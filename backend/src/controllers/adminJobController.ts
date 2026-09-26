import type { Request, Response } from "express";
import { z } from "zod";

import { prisma } from "../config/prisma.js";

const jobStatusSchema = z.object({
  status: z.enum(["DRAFT", "ACTIVE", "CLOSED"]),
});

const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Job title is required")
    .max(200),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(200),

  location: z
    .string()
    .trim()
    .min(2, "Location is required")
    .max(200),

  salary: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  slug: z
    .string()
    .trim()
    .max(220)
    .optional()
    .or(z.literal("")),

  description: z
    .string()
    .trim()
    .min(10, "Description is too short"),

  responsibilities: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  requirements: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  employmentType: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  openings: z
    .union([
      z.coerce.number().int().positive(),
      z.literal(""),
    ])
    .optional(),

  status: z
    .enum(["DRAFT", "ACTIVE", "CLOSED"])
    .optional(),
});

const updateJobSchema = createJobSchema.partial();

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function createUniqueSlug(
  title: string,
  requestedSlug?: string,
): Promise<string> {
  const base = slugify(requestedSlug || title);

  let slug = base;
  let counter = 2;

  while (
    await prisma.job.findUnique({
      where: { slug },
      select: { id: true },
    })
  ) {
    slug = `${base}-${counter}`;
    counter += 1;
  }

  return slug;
}

export async function getAdminJobs(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : "";

    const status =
      typeof req.query.status === "string"
        ? req.query.status
        : "";

    const pageValue = Number(req.query.page);
    const limitValue = Number(req.query.limit);

    const page =
      Number.isInteger(pageValue) && pageValue > 0
        ? pageValue
        : 1;

    const limit =
      Number.isInteger(limitValue) &&
      limitValue > 0 &&
      limitValue <= 100
        ? limitValue
        : 20;

    const skip = (page - 1) * limit;

    const validStatuses = [
      "DRAFT",
      "ACTIVE",
      "CLOSED",
    ] as const;

    const where = {
      ...(validStatuses.includes(
        status as (typeof validStatuses)[number],
      )
        ? {
            status:
              status as (typeof validStatuses)[number],
          }
        : {}),

      ...(search
        ? {
            OR: [
              {
                title: {
                  contains: search,
                },
              },
              {
                company: {
                  contains: search,
                },
              },
              {
                location: {
                  contains: search,
                },
              },
            ],
          }
        : {}),
    };

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
        include: {
          _count: {
            select: {
              applications: true,
            },
          },
        },
      }),

      prisma.job.count({
        where,
      }),
    ]);

    res.status(200).json({
      success: true,
      data: jobs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching admin jobs:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
}

export async function getAdminJobById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
      return;
    }

    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            applications: true,
          },
        },
      },
    });

    if (!job) {
      res.status(404).json({
        success: false,
        message: "Job not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Error fetching admin job:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });
  }
}

export async function createJob(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const parsed = createJobSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid job data",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const data = parsed.data;

    const slug = await createUniqueSlug(
      data.title,
      data.slug || undefined,
    );

    const job = await prisma.job.create({
      data: {
        title: data.title,
        company: data.company,
        location: data.location,
        salary: data.salary || null,
        slug,
        description: data.description,
        responsibilities:
          data.responsibilities || null,
        requirements: data.requirements || null,
        employmentType:
          data.employmentType || null,
        openings:
          data.openings === "" ||
          data.openings === undefined
            ? null
            : data.openings,
        status: data.status || "ACTIVE",
      },
      include: {
        _count: {
          select: {
            applications: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error creating job:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create job",
    });
  }
}

export async function updateJob(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
      return;
    }

    const parsed = updateJobSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid job data",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const existingJob = await prisma.job.findUnique({
      where: { id },
      select: {
        id: true,
        slug: true,
      },
    });

    if (!existingJob) {
      res.status(404).json({
        success: false,
        message: "Job not found",
      });
      return;
    }

    const data = parsed.data;

    let slug = existingJob.slug;

    if (data.slug || data.title) {
      const base = slugify(
        data.slug ||
          data.title ||
          existingJob.slug,
      );

      slug = base;

      let counter = 2;

      while (true) {
        const existing = await prisma.job.findFirst({
          where: {
            slug,
            NOT: {
              id,
            },
          },
          select: {
            id: true,
          },
        });

        if (!existing) {
          break;
        }

        slug = `${base}-${counter}`;
        counter += 1;
      }
    }

    const job = await prisma.job.update({
      where: { id },
      data: {
        ...(data.title !== undefined && {
          title: data.title,
        }),

        ...(data.company !== undefined && {
          company: data.company,
        }),

        ...(data.location !== undefined && {
          location: data.location,
        }),

        ...(data.salary !== undefined && {
          salary: data.salary || null,
        }),

        slug,

        ...(data.description !== undefined && {
          description: data.description,
        }),

        ...(data.responsibilities !== undefined && {
          responsibilities:
            data.responsibilities || null,
        }),

        ...(data.requirements !== undefined && {
          requirements:
            data.requirements || null,
        }),

        ...(data.employmentType !== undefined && {
          employmentType:
            data.employmentType || null,
        }),

        ...(data.openings !== undefined && {
          openings:
            data.openings === ""
              ? null
              : data.openings,
        }),

        ...(data.status !== undefined && {
          status: data.status,
        }),
      },
      include: {
        _count: {
          select: {
            applications: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error updating job:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update job",
    });
  }
}

export async function updateJobStatus(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
      return;
    }

    const parsed = jobStatusSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid job status",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const existingJob = await prisma.job.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existingJob) {
      res.status(404).json({
        success: false,
        message: "Job not found",
      });
      return;
    }

    const job = await prisma.job.update({
      where: { id },
      data: {
        status: parsed.data.status,
      },
      select: {
        id: true,
        title: true,
        status: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Job status updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error updating job status:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update job status",
    });
  }
}

export async function deleteJob(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid job ID",
      });
      return;
    }

    const job = await prisma.job.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            applications: true,
          },
        },
      },
    });

    if (!job) {
      res.status(404).json({
        success: false,
        message: "Job not found",
      });
      return;
    }

    if (job._count.applications > 0) {
      res.status(409).json({
        success: false,
        message:
          "This job has applications and cannot be deleted. Close the job instead.",
        applicationCount: job._count.applications,
      });
      return;
    }

    await prisma.job.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete job",
    });
  }
}
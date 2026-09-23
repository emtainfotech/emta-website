import type { Request, Response } from "express";
import { z } from "zod";

import { prisma } from "../config/prisma.js";

const statusSchema = z.object({
  status: z.enum([
    "APPLIED",
    "SHORTLISTED",
    "INTERVIEW",
    "SELECTED",
    "REJECTED",
  ]),
});

export async function getApplications(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const status =
      typeof req.query.status === "string"
        ? req.query.status
        : "";

    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
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
      "APPLIED",
      "SHORTLISTED",
      "INTERVIEW",
      "SELECTED",
      "REJECTED",
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
                name: {
                  contains: search,
                },
              },
              {
                email: {
                  contains: search,
                },
              },
              {
                phone: {
                  contains: search,
                },
              },
              {
                job: {
                  title: {
                    contains: search,
                  },
                },
              },
            ],
          }
        : {}),
    };

    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          experience: true,
          qualification: true,
          location: true,
          resumeUrl: true,
          resumeName: true,
          status: true,
          createdAt: true,
          updatedAt: true,
          job: {
            select: {
              id: true,
              title: true,
              company: true,
              location: true,
            },
          },
        },
      }),

      prisma.application.count({
        where,
      }),
    ]);

    res.status(200).json({
      success: true,
      data: applications,
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
    console.error("Error fetching applications:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
    });
  }
}

export async function getApplicationById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid application ID",
      });
      return;
    }

    const application = await prisma.application.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        experience: true,
        qualification: true,
        location: true,
        resumeUrl: true,
        resumeName: true,
        coverMessage: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        job: {
          select: {
            id: true,
            title: true,
            company: true,
            location: true,
            salary: true,
          },
        },
      },
    });

    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("Error fetching application:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch application",
    });
  }
}

export async function updateApplicationStatus(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid application ID",
      });
      return;
    }

    const parsed = statusSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid application status",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const existingApplication =
      await prisma.application.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
        },
      });

    if (!existingApplication) {
      res.status(404).json({
        success: false,
        message: "Application not found",
      });
      return;
    }

    const application =
      await prisma.application.update({
        where: {
          id,
        },
        data: {
          status: parsed.data.status,
        },
        select: {
          id: true,
          status: true,
          updatedAt: true,
        },
      });

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: application,
    });
  } catch (error) {
    console.error(
      "Error updating application status:",
      error,
    );

    res.status(500).json({
      success: false,
      message: "Failed to update application status",
    });
  }
}

export async function deleteApplication(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid application ID",
      });
      return;
    }

    const application = await prisma.application.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found",
      });
      return;
    }

    await prisma.application.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting application:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete application",
    });
  }
}
import type { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

export async function getJobs(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : "";

    const location =
      typeof req.query.location === "string"
        ? req.query.location.trim()
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
        : 12;

    const skip = (page - 1) * limit;

    const where = {
      status: "ACTIVE" as const,

      ...(location
        ? {
            location: {
              contains: location,
            },
          }
        : {}),

      ...(search
        ? {
            OR: [
              { title: { contains: search } },
              { company: { contains: search } },
              { location: { contains: search } },
              { description: { contains: search } },
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
    console.error("Error fetching jobs:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
}

export async function getJobByIdentifier(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const identifier = String(req.params.identifier).trim();

    if (!identifier) {
      res.status(400).json({
        success: false,
        message: "Job identifier is required",
      });
      return;
    }

    let job = await prisma.job.findUnique({
      where: {
        slug: identifier,
      },
    });

    if (!job && /^\d+$/.test(identifier)) {
      job = await prisma.job.findUnique({
        where: {
          id: Number(identifier),
        },
      });
    }

    if (!job || job.status !== "ACTIVE") {
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
    console.error("Error fetching job:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });
  }
}
import type { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

export async function getDashboard(_req: Request, res: Response): Promise<void> {
  try {
    const [
      totalJobs,
      activeJobs,
      draftJobs,
      closedJobs,
      totalApplications,
      appliedApplications,
      shortlistedApplications,
      interviewApplications,
      selectedApplications,
      rejectedApplications,
      totalCourses,
      recentApplications,
    ] = await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { status: "ACTIVE" } }),
      prisma.job.count({ where: { status: "DRAFT" } }),
      prisma.job.count({ where: { status: "CLOSED" } }),
      prisma.application.count(),
      prisma.application.count({ where: { status: "APPLIED" } }),
      prisma.application.count({ where: { status: "SHORTLISTED" } }),
      prisma.application.count({ where: { status: "INTERVIEW" } }),
      prisma.application.count({ where: { status: "SELECTED" } }),
      prisma.application.count({ where: { status: "REJECTED" } }),
      prisma.course.count({ where: { status: "ACTIVE" } }),
      prisma.application.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          status: true,
          createdAt: true,
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
    ]);

    res.json({
      success: true,
      data: {
        jobs: { total: totalJobs, active: activeJobs, draft: draftJobs, closed: closedJobs },
        applications: {
          total: totalApplications,
          applied: appliedApplications,
          shortlisted: shortlistedApplications,
          interview: interviewApplications,
          selected: selectedApplications,
          rejected: rejectedApplications,
        },
        courses: { total: totalCourses },
        recentApplications,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    res.status(500).json({ success: false, message: "Failed to fetch dashboard" });
  }
}

import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../config/prisma.js";
import { uploadResume } from "../services/cloudinary.js";
import { sendApplicationEmails } from "../services/emailService.js";

const applicationSchema = z.object({
  jobId: z.coerce.number().int().positive(),

  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(150, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Invalid phone number")
    .max(20, "Invalid phone number"),

  experience: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  qualification: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal("")),

  location: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  coverMessage: z
    .string()
    .trim()
    .max(5000, "Cover message is too long")
    .optional()
    .or(z.literal("")),
});

export async function createApplication(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const parsed = applicationSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid application data",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const data = parsed.data;

    const job = await prisma.job.findFirst({
      where: {
        id: data.jobId,
        status: "ACTIVE",
      },
      select: {
        id: true,
        title: true,
        company: true,
      },
    });

    if (!job) {
      res.status(404).json({
        success: false,
        message: "The selected job is no longer available",
      });
      return;
    }

    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "Resume is required",
      });
      return;
    }

    const uploadedResume = await uploadResume(
      req.file.buffer,
      req.file.originalname,
    );

    const application = await prisma.application.create({
      data: {
        jobId: job.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        experience: data.experience || null,
        qualification: data.qualification || null,
        location: data.location || null,
        resumeUrl: uploadedResume.url,
        resumeName: req.file.originalname,
        coverMessage: data.coverMessage || null,
      },

      select: {
        id: true,
        status: true,
        createdAt: true,
        resumeName: true,
        job: {
          select: {
            id: true,
            title: true,
            company: true,
          },
        },
      },
    });

    try {
  await sendApplicationEmails({
    applicationId: application.id,
    candidateName: data.name,
    candidateEmail: data.email,
    candidatePhone: data.phone,
    jobTitle: job.title,
    company: job.company,
    resumeUrl: uploadedResume.url,
    resumeName: req.file.originalname,
  });
} catch (emailError) {
  console.error(
    "Application saved but email notification failed:",
    emailError,
  );
}

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Error creating application:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
}
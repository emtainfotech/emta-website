import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../config/prisma.js";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().min(7).max(20),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
});

export async function getCourses(_req: Request, res: Response): Promise<void> {
  try {
    const courses = await prisma.course.findMany({
      where: { status: "ACTIVE" },
      orderBy: { id: "asc" },
    });

    res.json({ success: true, data: courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ success: false, message: "Failed to fetch courses" });
  }
}

export async function getCourseById(req: Request, res: Response): Promise<void> {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({ success: false, message: "Invalid course ID" });
      return;
    }

    const course = await prisma.course.findFirst({
      where: { id, status: "ACTIVE" },
    });

    if (!course) {
      res.status(404).json({ success: false, message: "Course not found" });
      return;
    }

    res.json({ success: true, data: course });
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ success: false, message: "Failed to fetch course" });
  }
}

export async function createCourseEnquiry(req: Request, res: Response): Promise<void> {
  try {
    const courseId = Number(req.params.id);
    if (!Number.isInteger(courseId) || courseId <= 0) {
      res.status(400).json({ success: false, message: "Invalid course ID" });
      return;
    }

    const parsed = enquirySchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid enquiry data",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const course = await prisma.course.findFirst({
      where: { id: courseId, status: "ACTIVE" },
      select: { id: true, title: true },
    });

    if (!course) {
      res.status(404).json({ success: false, message: "Course not found" });
      return;
    }

    const enquiry = await prisma.courseEnquiry.create({
      data: {
        courseId: course.id,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message || null,
      },
      select: {
        id: true,
        createdAt: true,
        course: { select: { id: true, title: true } },
      },
    });

    res.status(201).json({
      success: true,
      message: "Course enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error creating course enquiry:", error);
    res.status(500).json({ success: false, message: "Failed to submit course enquiry" });
  }
}

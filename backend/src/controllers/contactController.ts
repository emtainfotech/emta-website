import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../config/prisma.js";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(8000),
});

export async function createContact(req: Request, res: Response): Promise<void> {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Invalid contact data",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const contact = await prisma.contact.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        subject: parsed.data.subject || null,
        message: parsed.data.message,
      },
      select: {
        id: true,
        createdAt: true,
        subject: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ success: false, message: "Failed to submit your message" });
  }
}

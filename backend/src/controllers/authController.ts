import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { prisma } from "../config/prisma.js";
import { signAdminToken } from "../utils/jwt.js";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email()
    .max(150),

  password: z
    .string()
    .min(8)
    .max(200),
});

export async function login(
  req: Request,
  res: Response,
): Promise<void> {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
    return;
  }

  try {
    const { email, password } = parsed.data;

    const admin = await prisma.admin.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!admin || !admin.isActive) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash,
    );

    if (!passwordMatches) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    const token = signAdminToken({
      adminId: admin.id,
      email: admin.email,
      role: admin.role,
    });

    res.cookie(
      process.env.COOKIE_NAME || "emta_admin_token",
      token,
      {
        httpOnly: true,
        secure: process.env.COOKIE_SECURE === "true",
        sameSite:
          (process.env.COOKIE_SAME_SITE as
            | "lax"
            | "strict"
            | "none") || "lax",
        maxAge: 8 * 60 * 60 * 1000,
        path: "/",
      },
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
}

export async function logout(
  _req: Request,
  res: Response,
): Promise<void> {
  res.clearCookie(
    process.env.COOKIE_NAME || "emta_admin_token",
    {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite:
        (process.env.COOKIE_SAME_SITE as
          | "lax"
          | "strict"
          | "none") || "lax",
      path: "/",
    },
  );

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
}
import type { NextFunction, Request, Response } from "express";
import { verifyAdminToken } from "../utils/jwt.js";

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const cookieName =
    process.env.COOKIE_NAME || "emta_admin_token";

  const token = req.cookies?.[cookieName];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Authentication required",
    });
    return;
  }

  try {
    const payload = verifyAdminToken(token);

    res.locals.admin = payload;

    next();
  } catch (error) {
    console.error("JWT verification failed:", error);

    res.status(401).json({
      success: false,
      message: "Invalid or expired authentication",
    });
  }
}
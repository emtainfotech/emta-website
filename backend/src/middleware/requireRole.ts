import type { NextFunction, Request, Response } from "express";

type AdminRole = "ADMIN" | "HR";

export function requireRole(...allowedRoles: AdminRole[]) {
  return (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const admin = res.locals.admin as
      | {
          adminId: number;
          email: string;
          role: AdminRole;
        }
      | undefined;

    if (!admin) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    if (!allowedRoles.includes(admin.role)) {
      res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action",
      });
      return;
    }

    next();
  };
}
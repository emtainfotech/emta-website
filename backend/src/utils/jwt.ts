import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET as string;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is missing");
}

export type AdminTokenPayload = {
  adminId: number;
  email: string;
  role: "ADMIN" | "HR";
};

export function signAdminToken(
  payload: AdminTokenPayload,
): string {
  return jwt.sign(payload, jwtSecret, {
    expiresIn: "8h",
  });
}

export function verifyAdminToken(
  token: string,
): AdminTokenPayload {
  return jwt.verify(token, jwtSecret) as unknown as AdminTokenPayload;
}
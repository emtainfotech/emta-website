import "dotenv/config";
import bcrypt from "bcryptjs";

import { prisma } from "../config/prisma.js";

async function createAdmin() {
  const name = process.env.ADMIN_SETUP_NAME;
  const email = process.env.ADMIN_SETUP_EMAIL?.toLowerCase();
  const password = process.env.ADMIN_SETUP_PASSWORD;

  if (!name || !email || !password) {
    throw new Error(
      "Missing ADMIN_SETUP_NAME, ADMIN_SETUP_EMAIL or ADMIN_SETUP_PASSWORD",
    );
  }

  if (password.length < 8) {
    throw new Error(
      "ADMIN_SETUP_PASSWORD must be at least 8 characters",
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.upsert({
    where: {
      email,
    },
    update: {
      name,
      passwordHash,
      isActive: true,
    },
    create: {
      name,
      email,
      passwordHash,
      role: "ADMIN",
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  console.log("✅ Admin created/updated:");
  console.log(admin);
}

createAdmin()
  .catch((error) => {
    console.error("❌ Admin setup failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
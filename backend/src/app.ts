import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminDashboardRoutes from "./routes/adminDashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminJobRoutes from "./routes/adminJobRoutes.js";
import adminApplicationRoutes from "./routes/adminApplicationRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "EMTA API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    status: "healthy",
    service: "emta-backend",
  });
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/contact", contactRoutes);

app.use("/api/auth/login", authLimiter);
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);
app.use("/api/admin/dashboard", adminDashboardRoutes);

app.use(
  "/api/admin/applications",
  adminApplicationRoutes,
);
app.use("/api/admin/jobs", adminJobRoutes);

export default app;
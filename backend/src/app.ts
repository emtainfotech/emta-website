import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

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

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "EMTA API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    service: "emta-backend",
  });
});

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

export default app;
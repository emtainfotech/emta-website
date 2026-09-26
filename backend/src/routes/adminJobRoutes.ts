import { Router } from "express";

import {
  createJob,
  deleteJob,
  getAdminJobById,
  getAdminJobs,
  updateJob,
  updateJobStatus,
} from "../controllers/adminJobController.js";

import { requireAdmin } from "../middleware/auth.js";
import { requireRole } from "../middleware/requireRole.js";

const router = Router();

router.use(requireAdmin);

router.get("/", getAdminJobs);

router.get("/:id", getAdminJobById);

router.post("/", createJob);

router.patch("/:id", updateJob);

router.patch("/:id/status", updateJobStatus);

router.delete(
  "/:id",
  requireRole("ADMIN"),
  deleteJob,
);

export default router;
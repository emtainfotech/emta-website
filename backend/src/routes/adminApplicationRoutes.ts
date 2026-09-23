import { Router } from "express";

import {
  deleteApplication,
  getApplicationById,
  getApplications,
  updateApplicationStatus,
} from "../controllers/adminApplicationController.js";

import { requireAdmin } from "../middleware/auth.js";
import { requireRole } from "../middleware/requireRole.js";

const router = Router();

router.use(requireAdmin);

router.get("/", getApplications);

router.get("/:id", getApplicationById);

router.patch("/:id/status", updateApplicationStatus);

router.delete(
  "/:id",
  requireRole("ADMIN"),
  deleteApplication,
);

export default router;
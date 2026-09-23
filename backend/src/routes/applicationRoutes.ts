import { Router } from "express";
import { createApplication } from "../controllers/applicationController.js";
import upload from "../middleware/upload.js";

const router = Router();

router.post(
  "/",
  upload.single("resume"),
  createApplication,
);

export default router;
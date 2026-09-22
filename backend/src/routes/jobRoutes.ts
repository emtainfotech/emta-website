import { Router } from "express";
import {
  getJobs,
  getJobByIdentifier,
} from "../controllers/jobController.js";

const router = Router();

router.get("/", getJobs);
router.get("/:identifier", getJobByIdentifier);

export default router;
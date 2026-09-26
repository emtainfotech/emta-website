import { Router } from "express";
import { getDashboard } from "../controllers/adminDashboardController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();
router.use(requireAdmin);
router.get("/", getDashboard);
export default router;

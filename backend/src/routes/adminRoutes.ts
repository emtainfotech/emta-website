import { Router } from "express";
import { requireAdmin } from "../middleware/auth.js";

const router = Router();

router.get(
  "/me",
  requireAdmin,
  (req, res) => {
    res.status(200).json({
      success: true,
      data: res.locals.admin,
    });
  },
);

export default router;
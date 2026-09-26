import { Router } from "express";
import { createCourseEnquiry, getCourseById, getCourses } from "../controllers/courseController.js";

const router = Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/:id/enquiries", createCourseEnquiry);

export default router;

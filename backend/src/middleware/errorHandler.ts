import type { ErrorRequestHandler } from "express";
import multer from "multer";

const errorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  console.error("Unhandled error:", error);

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({
        success: false,
        message: "Resume must be 5 MB or smaller",
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: "Resume upload failed",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.message.includes("Invalid resume format")
  ) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorHandler;
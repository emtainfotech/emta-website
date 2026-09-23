import multer from "multer";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const allowedExtensions = new Set([
  ".pdf",
  ".doc",
  ".docx",
]);

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1,
  },

  fileFilter: (_req, file, cb) => {
    const extension = file.originalname
      .toLowerCase()
      .slice(file.originalname.lastIndexOf("."));

    const validMimeType = allowedMimeTypes.has(file.mimetype);
    const validExtension = allowedExtensions.has(extension);

    if (!validMimeType || !validExtension) {
      cb(
        new Error(
          "Invalid resume format. Only PDF, DOC, and DOCX files are allowed.",
        ),
      );
      return;
    }

    cb(null, true);
  },
});

export default upload;
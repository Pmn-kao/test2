import { NestMiddleware } from "@nestjs/common/interfaces/middleware";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import * as multer from "multer";
import { extname, join } from "path";

export const FileUploadMiddleware = (
  limit: number = 2 * 1024 * 1024,
  dest = "file"
): MulterOptions => {
  return {
    storage: multer.diskStorage({
      destination: join(".", "bucket", "uploads", dest),
      filename: (req, file, cb) => {
        return cb(null, `${file.originalname}`);
      },
    }),
    limits: {
      fileSize: limit,
    },
  };
};

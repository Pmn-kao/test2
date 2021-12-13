"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadMiddleware = void 0;
const multer = require("multer");
const path_1 = require("path");
const FileUploadMiddleware = (limit = 2 * 1024 * 1024, dest = "file") => {
    return {
        storage: multer.diskStorage({
            destination: (0, path_1.join)(".", "bucket", "uploads", dest),
            filename: (req, file, cb) => {
                return cb(null, `${file.originalname}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
        limits: {
            fileSize: limit,
        },
    };
};
exports.FileUploadMiddleware = FileUploadMiddleware;
//# sourceMappingURL=imports-excel.middleware.js.map
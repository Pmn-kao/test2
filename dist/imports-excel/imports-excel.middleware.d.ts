import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
export declare const FileUploadMiddleware: (limit?: number, dest?: string) => MulterOptions;

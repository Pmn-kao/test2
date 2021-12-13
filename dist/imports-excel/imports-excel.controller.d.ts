/// <reference types="multer" />
import { Albums } from "src/entity/albums.entity";
import { Repository } from "typeorm";
export declare class UploadController {
    private readonly albumRepository;
    constructor(albumRepository: Repository<Albums>);
    uploadFile(file: Express.Multer.File): Promise<Albums>;
}

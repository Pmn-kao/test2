import { Response } from "express";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { ExportsExcelService } from "./exports-excel.service";
export declare class ExportsExcelController {
    private readonly excelService;
    private userRepository;
    constructor(excelService: ExportsExcelService, userRepository: Repository<User>);
    getAll(res: Response): Promise<void>;
}

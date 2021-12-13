import { Response } from "express";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class ExportsExcelService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getExcel(res: Response): Promise<void>;
}

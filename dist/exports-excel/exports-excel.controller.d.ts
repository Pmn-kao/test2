import { Response } from "express";
import { ExportsExcelService } from "./exports-excel.service";
export declare class ExportsExcelController {
    private readonly excelService;
    constructor(excelService: ExportsExcelService);
    getExcel(res: Response): Promise<void>;
}

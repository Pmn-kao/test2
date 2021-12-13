import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { ExportsExcelService } from "./exports-excel.service";

@Controller("export-excel")
export class ExportsExcelController {
  constructor(private readonly excelService: ExportsExcelService) {}

  @Get()
  async getExcel(@Res() res: Response) {
    try {
      return await this.excelService.getExcel(res);
    } catch (error) {
      throw error;
    }
  }
}

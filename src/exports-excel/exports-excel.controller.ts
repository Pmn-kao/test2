import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { JwtAuthGuard } from "src/api/auth/jwt-guard";
import { User } from "src/entity/user.entity";
import { createQueryBuilder, Repository } from "typeorm";
import { ExportsExcelService } from "./exports-excel.service";

@ApiTags("export-excel")
@Controller("export-excel")
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller("export-excel")
export class ExportsExcelController {
  constructor(
    private readonly excelService: ExportsExcelService,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  // @Get()
  // async getExcel(@Res() res: Response) {
  //   try {
  //     return await this.excelService.getExcel(res);
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  @Get()
  async getAll(@Res() res: Response) {
    try {
      const data = await this.userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.usertohouses", "usertohouses")
        .leftJoinAndSelect("usertohouses.house", "h")
        // .andWhere('al.isDelete= :isDelete', { isDelete: false })
        // .orderBy('al.createdAt', 'DESC')
        .getMany();
      return await this.excelService.getExcel(res, data);
    } catch (error) {
      throw error;
    }
  }
}

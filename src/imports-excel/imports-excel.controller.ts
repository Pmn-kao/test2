import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  UseGuards,
  Req,
  Headers,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { JwtAuthGuard } from "src/api/auth/jwt-guard";
import { Albums } from "src/entity/albums.entity";
import { Repository } from "typeorm";
import { ImportsExcelDto } from "./dto/imports-excel.dto";
import { FileUploadMiddleware } from "./imports-excel.middleware";
import xlsx from "node-xlsx";
import { join } from "path";

@ApiTags("imports-excel")
@Controller("imports-exce")
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller()
export class UploadController {
  constructor(
    @InjectRepository(Albums)
    private readonly albumRepository: Repository<Albums>
  ) {}
  @Post("upload")
  @ApiBody({ type: ImportsExcelDto })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(
    FileInterceptor("file", FileUploadMiddleware(2 * 1024 * 1024, "pmn"))
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Parse a buffer

    if (!file.originalname.match(/\.(xlsx|pdf|xls)$/)) {
      throw new Error("error");
    }
    console.log(
      join(__dirname, "../..", "bucket", "uploads", "pmn", file.originalname)
    );

    const album = new Albums();
    album.url = file.path;
    const url = await this.albumRepository.save(album);
    return url;
  }
  @Get()
  async readfile() {
    const workSheetsFromBuffer = xlsx.parse(
      join(__dirname, "../..", "bucket", "uploads", "pmn", `รหัสอาคาร.xlsx`)
    );

    for (let i = 3; i < workSheetsFromBuffer[0].data.length; i++) {
      console.log(workSheetsFromBuffer[0].data[i][2]);
      console.log(workSheetsFromBuffer[0].data[i][5]);
      console.log(workSheetsFromBuffer[0].data[i][6]);
      console.log(workSheetsFromBuffer[0].data[i][8]);
      console.log(workSheetsFromBuffer[0].data[i][9]);
    }
  }
}

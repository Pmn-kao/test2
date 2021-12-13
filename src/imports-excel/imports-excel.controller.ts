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
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { Albums } from "src/entity/albums.entity";
import { Repository } from "typeorm";
import { ImportsExcelDto } from "./dto/imports-excel.dto";
import { FileUploadMiddleware } from "./imports-excel.middleware";


@Controller()
export class UploadController {
  constructor(
  @InjectRepository(Albums)
    private readonly albumRepository: Repository<Albums>,
  ){

  }
  @Post("upload")
  @ApiBody({ type: ImportsExcelDto })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(
    FileInterceptor("file", FileUploadMiddleware(2 * 1024 * 1024, "pmn"))
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (!file.originalname.match(/\.(xlsx|pdf|xls)$/)) {
      throw new Error("error");
    }
    const album = new Albums();
    album.url = file.path;
    const url = await this.albumRepository.save(album);
    return url;
  }
}

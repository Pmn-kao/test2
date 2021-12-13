import { ApiProperty } from "@nestjs/swagger";
export class ImportsExcelDto {
  @ApiProperty({type:"file"})
    file :  Express.Multer.File
  }
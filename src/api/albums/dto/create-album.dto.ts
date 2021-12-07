import { ApiProperty } from "@nestjs/swagger";
export class CreateAlbumDto {
  @ApiProperty()
    title: string;
  @ApiProperty()
    remark: string;
  @ApiProperty()
    user1:number;
  }
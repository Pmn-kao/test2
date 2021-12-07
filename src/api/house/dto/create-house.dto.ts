import { ApiProperty } from "@nestjs/swagger";
export class CreateHouseDto {
  @ApiProperty()
    name: string;
  }
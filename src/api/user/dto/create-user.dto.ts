import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, isNumber, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  lastname: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsString()
  password: string;
  @ApiProperty()
  @IsString()
  confirmPassword: string;
  @ApiProperty()
  @IsNumber()
  houseId: number;
  
  
}

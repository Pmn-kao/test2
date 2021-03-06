import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Put,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UsertohouseService } from "./usertohouse.service";
import { CreateUsertohouseDto } from "./dto/create-Usertohouse.dto";
import { Usertohouse } from "src/entity/usertohouse.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-guard";
@ApiTags("usertohouse")
@Controller("Usertohouse")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UsertohouseController {
  constructor(private readonly UsertohouseService: UsertohouseService) {}

  @Post() // POST /usertohouse
  @HttpCode(HttpStatus.CREATED)
  async createUsertohouse(
    @Body() newUsertohouse: CreateUsertohouseDto
  ): Promise<Usertohouse> {
    const usertohouse = new Usertohouse();
    return await this.UsertohouseService.createOrUpdate(usertohouse);
  }

  
  @Get() // GET /user
  async findUser(): Promise<Usertohouse> {
    console.log("dist/**/*.entity{.ts,.js}");
    return await this.UsertohouseService.getAll();
  }

  
  @Get(":id") // GET /Usertohouse/123
  async findUsertohouseid(@Param("id") id: number): Promise<Usertohouse[]> {
    return await this.UsertohouseService.getById(id);
  }

  
  @Put(":id") // PUT /Usertohouse/123
  async updateUsertohouse(
    @Param("id") id: number,
    @Body() createUsertohouseDto: CreateUsertohouseDto
  ): Promise<Usertohouse> {
    const Usertohouse = await this.UsertohouseService.findOne(id);
    return await this.UsertohouseService.createOrUpdate(Usertohouse);
  }

  
  @Delete(":id") // DELETE /Usertohouse/123
  async deleteUsertohouse(@Param("id") id: number): Promise<any> {
    await this.UsertohouseService.delete(id);
    return { success: true };
  }
}

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
  } from '@nestjs/common';
  import { UsertohouseService } from './usertohouse.service';
  import { CreateUsertohouseDto } from './dto/create-Usertohouse.dto';
  import { Usertohouse } from 'src/entity/usertohouse.entity';


@Controller('Usertohouse')
export class UsertohouseController {
  constructor(private readonly UsertohouseService: UsertohouseService) {}

  @Post() // POST /usertohouse
  @HttpCode(HttpStatus.CREATED)
  async createUsertohouse(@Body() newUsertohouse: CreateUsertohouseDto): Promise<Usertohouse> {
    const usertohouse = new Usertohouse();
    return await this.UsertohouseService.createOrUpdate(usertohouse);
  }

  @Get() // GET /Usertohouse
  async findUsertohouse(): Promise<Usertohouse[]> {
    console.log('dist/**/*.entity{.ts,.js}');
    return await this.UsertohouseService.findAll();
  }

  @Get(':id') // GET /Usertohouse/123
  async findUsertohouseid(@Param('id') id: number): Promise<Usertohouse> {
    return await this.UsertohouseService.findOne(id);
  }

  @Put(':id') // PUT /Usertohouse/123
  async updateUsertohouse(
    @Param('id') id: number,
    @Body() createUsertohouseDto: CreateUsertohouseDto,
  ): Promise<Usertohouse> {
    const Usertohouse = await this.UsertohouseService.findOne(id);
    return await this.UsertohouseService.createOrUpdate(Usertohouse);
  }

  @Delete(':id')  // DELETE /Usertohouse/123
  async deleteUsertohouse(@Param('id') id: number): Promise<any> {
    await this.UsertohouseService.delete(id);
    return { success: true };
  }
}
  
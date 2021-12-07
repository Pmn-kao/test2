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
  import { HouseService } from './house.service';
  import { CreateHouseDto } from './dto/create-house.dto';
  import { House } from '../../entity/house.entity';
import { ApiTags } from '@nestjs/swagger';
  @ApiTags('house')
  @Controller('house')
  export class HouseController {
    constructor(private readonly houseService: HouseService) {}
  
    @Post() // POST /house
    @HttpCode(HttpStatus.CREATED)
    async createHouse(@Body() newHouse: CreateHouseDto): Promise<House> {
      const house = new House();
      house.name = newHouse.name;
      return await this.houseService.createOrUpdate(house);
    }
  
    @Get() // GET /house
    async findHouse(): Promise<House[]> {
      console.log('dist/**/*.entity{.ts,.js}');
      return await this.houseService.getAll();
    }
  
    @Get(':id') // GET /house/123
    async findHouseid(@Param('id') id: number): Promise<House[]> {
      return await this.houseService.getById(id);
    }
  
    @Put(':id') // PUT /house/123
    async updateHouse(
      @Param('id') id: number,
      @Body() createHouseDto: CreateHouseDto,
    ): Promise<House> {
      const house = await this.houseService.findOne(id);
      house.name = createHouseDto.name;
      return await this.houseService.createOrUpdate(house);
    }
  
    @Delete(':id')  // DELETE /house/123
    async deleteHouse(@Param('id') id: number): Promise<any> {
      await this.houseService.delete(id);
      return { success: true };
    }
  }

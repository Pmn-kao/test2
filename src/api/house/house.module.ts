import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from 'src/entity/house.entity';


@Module({
  imports: [TypeOrmModule.forFeature([House])],
  controllers: [HouseController],
  providers: [HouseService],
  exports: [HouseService]
})
export class HouseModule {}

import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { Usertohouse } from 'src/entity/usertohouse.entity';
import { UsertohouseController } from './usertohouse.controller';
import { UsertohouseService } from './usertohouse.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usertohouse])],
  controllers: [UsertohouseController],
  providers: [UsertohouseService],
  exports: [UsertohouseService]
})
export class UsertohouseModule {}

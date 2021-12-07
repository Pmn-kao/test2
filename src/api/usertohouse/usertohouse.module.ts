import { Module } from '@nestjs/common';

import { UsertohouseService } from './Usertohouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usertohouse } from 'src/entity/usertohouse.entity';
import { UsertohouseController } from './usertohouse.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usertohouse])],
  controllers: [UsertohouseController],
  providers: [UsertohouseService],
  exports: [UsertohouseService]
})
export class UsertohouseModule {}

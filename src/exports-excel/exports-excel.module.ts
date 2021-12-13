import { Module } from '@nestjs/common';
import { ExportsExcelService } from './exports-excel.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { ExportsExcelController } from './exports-excel.controller';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [ExportsExcelService],
  controllers: [ExportsExcelController],
  exports:[ExportsExcelService]
})
export class ExportsExcelModule {}

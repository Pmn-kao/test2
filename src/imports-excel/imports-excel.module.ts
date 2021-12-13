import { Module } from '@nestjs/common';
import { ImportsExcelService } from './imports-excel.service';

@Module({
  providers: [ImportsExcelService]
})
export class ImportsExcelModule {}

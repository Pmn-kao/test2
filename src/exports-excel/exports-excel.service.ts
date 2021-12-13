import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as xl from "excel4node";
import { Response } from "express";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExportsExcelService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async getExcel(res: Response) {
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Sheet');

    ws.column(1).setWidth(20);
    ws.column(2).setWidth(20);
    ws.column(3).setWidth(20);
    ws.column(4).setWidth(50);
    ws.column(5).setWidth(50);

    ws.cell(1, 1).string('Id');

    ws.cell(1, 2).string('Name');

    ws.cell(1, 3).string('lastname');

    ws.cell(1, 4).string('email');


    const wh = await this.userRepository.find({ order: { id: 'ASC' } });

    let _row = 2;

    for (const data of wh) {
      ws.cell(_row, 1).number(data.id);

      ws.cell(_row, 2).string(data.name);

      ws.cell(_row, 3).string(data.lastname);

      ws.cell(_row, 4).string(data.email);

      _row++;
    }
    wb.write('Excel.xlsx', res);
  }
}

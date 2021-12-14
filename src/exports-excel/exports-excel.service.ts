import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as xl from "excel4node";
import { Response } from "express";
import { Albums } from "src/entity/albums.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExportsExcelService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async getExcel(res: Response, data: any) {
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet("Sheet");

    ws.column(1).setWidth(20);
    ws.column(2).setWidth(20);
    ws.column(3).setWidth(20);
    ws.column(4).setWidth(40);
    ws.column(5).setWidth(20);
    ws.column(6).setWidth(20);

    ws.cell(1, 1).string("Id");

    ws.cell(1, 2).string("Name");

    ws.cell(1, 3).string("lastname");

    ws.cell(1, 4).string("email");

    ws.cell(1, 5).string("usertohouse");

    // ws.cell(1, 6).string('usertohouse');

    // const wh = await this.userRepository.find({ order: { id: "ASC" } });

    let _row = 2;

    for (const datas of data) {
      console.log();

      ws.cell(_row, 1).number(datas.id);

      ws.cell(_row, 2).string(datas.name);

      ws.cell(_row, 3).string(datas.lastname);

      ws.cell(_row, 4).string(datas.email);

      ws.cell(_row, 5).string(`${datas.usertohouses[0]?.house.name || ""}`);

      _row++;
    }
    wb.write("Excel.xlsx", res);
  }
}

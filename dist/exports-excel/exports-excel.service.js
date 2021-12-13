"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportsExcelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const xl = require("excel4node");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
let ExportsExcelService = class ExportsExcelService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getExcel(res) {
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
};
ExportsExcelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExportsExcelService);
exports.ExportsExcelService = ExportsExcelService;
//# sourceMappingURL=exports-excel.service.js.map
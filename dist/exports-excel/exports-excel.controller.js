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
exports.ExportsExcelController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_guard_1 = require("../api/auth/jwt-guard");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const exports_excel_service_1 = require("./exports-excel.service");
let ExportsExcelController = class ExportsExcelController {
    constructor(excelService, userRepository) {
        this.excelService = excelService;
        this.userRepository = userRepository;
    }
    async getAll(res) {
        try {
            const data = await this.userRepository
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.usertohouses", "usertohouses")
                .leftJoinAndSelect("usertohouses.house", "h")
                .getMany();
            return await this.excelService.getExcel(res, data);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExportsExcelController.prototype, "getAll", null);
ExportsExcelController = __decorate([
    (0, swagger_1.ApiTags)("export-excel"),
    (0, common_1.Controller)("export-excel"),
    (0, common_1.Controller)("export-excel"),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [exports_excel_service_1.ExportsExcelService,
        typeorm_2.Repository])
], ExportsExcelController);
exports.ExportsExcelController = ExportsExcelController;
//# sourceMappingURL=exports-excel.controller.js.map
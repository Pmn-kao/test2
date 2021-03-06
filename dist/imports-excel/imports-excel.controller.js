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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_guard_1 = require("../api/auth/jwt-guard");
const albums_entity_1 = require("../entity/albums.entity");
const typeorm_2 = require("typeorm");
const imports_excel_dto_1 = require("./dto/imports-excel.dto");
const imports_excel_middleware_1 = require("./imports-excel.middleware");
const node_xlsx_1 = require("node-xlsx");
const path_1 = require("path");
let UploadController = class UploadController {
    constructor(albumRepository) {
        this.albumRepository = albumRepository;
    }
    async uploadFile(file) {
        if (!file.originalname.match(/\.(xlsx|pdf|xls)$/)) {
            throw new Error("error");
        }
        console.log((0, path_1.join)(__dirname, "../..", "bucket", "uploads", "pmn", file.originalname));
        const album = new albums_entity_1.Albums();
        album.url = file.path;
        const url = await this.albumRepository.save(album);
        return url;
    }
    async readfile() {
        const workSheetsFromBuffer = node_xlsx_1.default.parse((0, path_1.join)(__dirname, "../..", "bucket", "uploads", "pmn", `???????????????????????????.xlsx`));
        for (let i = 3; i < workSheetsFromBuffer[0].data.length; i++) {
            console.log(workSheetsFromBuffer[0].data[i][2]);
            console.log(workSheetsFromBuffer[0].data[i][5]);
            console.log(workSheetsFromBuffer[0].data[i][6]);
            console.log(workSheetsFromBuffer[0].data[i][8]);
            console.log(workSheetsFromBuffer[0].data[i][9]);
        }
    }
};
__decorate([
    (0, common_1.Post)("upload"),
    (0, swagger_1.ApiBody)({ type: imports_excel_dto_1.ImportsExcelDto }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", (0, imports_excel_middleware_1.FileUploadMiddleware)(2 * 1024 * 1024, "pmn"))),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "readfile", null);
UploadController = __decorate([
    (0, swagger_1.ApiTags)("imports-excel"),
    (0, common_1.Controller)("imports-exce"),
    (0, common_1.Controller)(),
    __param(0, (0, typeorm_1.InjectRepository)(albums_entity_1.Albums)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=imports-excel.controller.js.map
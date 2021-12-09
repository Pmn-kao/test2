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
exports.UsertohouseController = void 0;
const common_1 = require("@nestjs/common");
const usertohouse_service_1 = require("./usertohouse.service");
const create_Usertohouse_dto_1 = require("./dto/create-Usertohouse.dto");
const usertohouse_entity_1 = require("../../entity/usertohouse.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt-guard");
let UsertohouseController = class UsertohouseController {
    constructor(UsertohouseService) {
        this.UsertohouseService = UsertohouseService;
    }
    async createUsertohouse(newUsertohouse) {
        const usertohouse = new usertohouse_entity_1.Usertohouse();
        return await this.UsertohouseService.createOrUpdate(usertohouse);
    }
    async findUser() {
        console.log("dist/**/*.entity{.ts,.js}");
        return await this.UsertohouseService.getAll();
    }
    async findUsertohouseid(id) {
        return await this.UsertohouseService.getById(id);
    }
    async updateUsertohouse(id, createUsertohouseDto) {
        const Usertohouse = await this.UsertohouseService.findOne(id);
        return await this.UsertohouseService.createOrUpdate(Usertohouse);
    }
    async deleteUsertohouse(id) {
        await this.UsertohouseService.delete(id);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Usertohouse_dto_1.CreateUsertohouseDto]),
    __metadata("design:returntype", Promise)
], UsertohouseController.prototype, "createUsertohouse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsertohouseController.prototype, "findUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsertohouseController.prototype, "findUsertohouseid", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_Usertohouse_dto_1.CreateUsertohouseDto]),
    __metadata("design:returntype", Promise)
], UsertohouseController.prototype, "updateUsertohouse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsertohouseController.prototype, "deleteUsertohouse", null);
UsertohouseController = __decorate([
    (0, swagger_1.ApiTags)("usertohouse"),
    (0, common_1.Controller)("Usertohouse"),
    __metadata("design:paramtypes", [usertohouse_service_1.UsertohouseService])
], UsertohouseController);
exports.UsertohouseController = UsertohouseController;
//# sourceMappingURL=usertohouse.controller.js.map
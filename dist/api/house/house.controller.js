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
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const house_service_1 = require("./house.service");
const create_house_dto_1 = require("./dto/create-house.dto");
const house_entity_1 = require("../../entity/house.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt-guard");
let HouseController = class HouseController {
    constructor(houseService) {
        this.houseService = houseService;
    }
    async createHouse(newHouse) {
        const house = new house_entity_1.House();
        house.name = newHouse.name;
        return await this.houseService.createOrUpdate(house);
    }
    async findHouse() {
        console.log("dist/**/*.entity{.ts,.js}");
        return await this.houseService.getAll();
    }
    async findHouseid(id) {
        return await this.houseService.getById(id);
    }
    async updateHouse(id, createHouseDto) {
        const house = await this.houseService.findOne(id);
        house.name = createHouseDto.name;
        return await this.houseService.createOrUpdate(house);
    }
    async deleteHouse(id) {
        await this.houseService.delete(id);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_house_dto_1.CreateHouseDto]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "createHouse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "findHouse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "findHouseid", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_house_dto_1.CreateHouseDto]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "updateHouse", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "deleteHouse", null);
HouseController = __decorate([
    (0, swagger_1.ApiTags)("house"),
    (0, common_1.Controller)("house"),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
exports.HouseController = HouseController;
//# sourceMappingURL=house.controller.js.map
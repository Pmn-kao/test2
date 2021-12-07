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
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const house_entity_1 = require("../../entity/house.entity");
const typeorm_2 = require("typeorm");
let HouseService = class HouseService {
    constructor(houseRepository) {
        this.houseRepository = houseRepository;
    }
    async createOrUpdate(user) {
        return await this.houseRepository.save(user);
    }
    async findOne(id) {
        return await this.houseRepository.findOne({ id: id });
    }
    async findAll() {
        return await this.houseRepository.find();
    }
    async delete(id) {
        return await this.houseRepository.delete({ id: id });
    }
    async getAll() {
        const _house = await this.houseRepository
            .createQueryBuilder('house')
            .leftJoinAndSelect('house.usertohouses', 'usertohouses')
            .getMany();
        return _house;
    }
};
HouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(house_entity_1.House)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HouseService);
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map
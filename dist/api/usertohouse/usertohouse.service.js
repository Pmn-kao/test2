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
exports.UsertohouseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Usertohouse_entity_1 = require("../../entity/Usertohouse.entity");
const typeorm_2 = require("typeorm");
let UsertohouseService = class UsertohouseService {
    constructor(usertohouseRepository) {
        this.usertohouseRepository = usertohouseRepository;
    }
    async createOrUpdate(usertohouse) {
        return await this.usertohouseRepository.save(usertohouse);
    }
    async findOne(id) {
        return await this.usertohouseRepository.findOne({ id: id });
    }
    async findAll() {
        return await this.usertohouseRepository.find();
    }
    async delete(id) {
        return await this.usertohouseRepository.delete({ id: id });
    }
    async getAll() {
        const [_usertohouse] = await this.usertohouseRepository
            .createQueryBuilder("usertohouse")
            .leftJoinAndSelect("usertohouse.house", "house")
            .leftJoinAndSelect("usertohouse.user", "user")
            .getMany();
        return _usertohouse;
    }
    async getById(id) {
        const _usertohouse = await this.usertohouseRepository
            .createQueryBuilder("usertohouse")
            .leftJoinAndSelect("usertohouse.house", "house")
            .leftJoinAndSelect("usertohouse.user", "user")
            .andWhere("usertohouse.id = :id", { id: id })
            .getMany();
        return _usertohouse;
    }
};
UsertohouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usertohouse_entity_1.Usertohouse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsertohouseService);
exports.UsertohouseService = UsertohouseService;
//# sourceMappingURL=usertohouse.service.js.map
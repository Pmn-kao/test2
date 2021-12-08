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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../entity/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.saltRounds = 10;
    }
    async getHashPassword(password) {
        return await (0, bcrypt_1.hash)(password, this.saltRounds);
    }
    async createOrUpdate(user) {
        return await this.userRepository.save(user);
    }
    async findOne(id) {
        return await this.userRepository.findOne({ id: id });
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async delete(id) {
        return await this.userRepository.delete({ id: id });
    }
    async getAll() {
        const _user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.albums1s", "albums1s")
            .leftJoinAndSelect("user.usertohouses", "usertohouses")
            .getRawMany();
        return _user;
    }
    async getById(id) {
        const _user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.albums1s", "albums1s")
            .leftJoinAndSelect("user.usertohouses", "usertohouses")
            .andWhere("user.id = :id", { id: id })
            .getMany();
        return _user;
    }
    async findEmail(email) {
        return await this.userRepository.findOne({
            where: { email: email },
            relations: ["albums1s", "usertohouses"],
        });
    }
    async compareHash(password, hash) {
        return await (0, bcrypt_1.compare)(password, hash);
    }
    async findPayload(payload) {
        return await this.userRepository.findOne({ where: { id: payload.id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
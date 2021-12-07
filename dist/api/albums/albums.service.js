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
exports.AlbumsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const albums_entity_1 = require("../../entity/albums.entity");
const typeorm_2 = require("typeorm");
let AlbumsService = class AlbumsService {
    constructor(albumRepository) {
        this.albumRepository = albumRepository;
    }
    async createOrUpdate(album) {
        return await this.albumRepository.save(album);
    }
    async findOne(id) {
        return await this.albumRepository.findOne({ id: id });
    }
    async findAll() {
        return await this.albumRepository.find();
    }
    async delete(id) {
        return await this.albumRepository.delete({ id: id });
    }
    async getAll() {
        const _albums = await this.albumRepository
            .createQueryBuilder('albums')
            .leftJoinAndSelect('albums.user1', 'user1')
            .getMany();
        return _albums;
    }
};
AlbumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(albums_entity_1.Albums)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlbumsService);
exports.AlbumsService = AlbumsService;
//# sourceMappingURL=albums.service.js.map
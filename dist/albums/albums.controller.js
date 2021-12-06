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
exports.AlbumsController = void 0;
const common_1 = require("@nestjs/common");
const albums_service_1 = require("./albums.service");
const create_album_dto_1 = require("./dto/create-album.dto");
const albums_entity_1 = require("../entity/albums.entity");
const user_service_1 = require("../user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const find_album_dto_1 = require("./dto/find-album.dto");
let AlbumsController = class AlbumsController {
    constructor(albumService, userRepository) {
        this.albumService = albumService;
        this.userRepository = userRepository;
    }
    async createAlbum(newAlbum) {
        const findUser = await this.userRepository.findOne({ id: newAlbum.user1 });
        const album = new albums_entity_1.Albums;
        album.title = newAlbum.title;
        album.remark = newAlbum.remark;
        album.user1 = findUser;
        return await this.albumService.createAlbum(newAlbum);
    }
    async findAlbums() {
        console.log("dist/**/*.entity{.ts,.js}");
        return await this.albumService.Get();
    }
    async findOne(id) {
        const album = await this.albumService.findOne(id);
        return album;
    }
    async findAlbum(getFil) {
        const newAlbum = await this.albumService.searchAlbumByFilter(getFil);
        return newAlbum;
    }
    async deleteAlbum(id) {
        await this.albumService.delete(id);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_album_dto_1.CreateAlbumDto]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "createAlbum", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "findAlbums", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_album_dto_1.AlbumFind]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "findAlbum", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "deleteAlbum", null);
AlbumsController = __decorate([
    (0, common_1.Controller)("albums"),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [albums_service_1.AlbumsService,
        typeorm_2.Repository])
], AlbumsController);
exports.AlbumsController = AlbumsController;
//# sourceMappingURL=albums.controller.js.map
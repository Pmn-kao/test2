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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Albums = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Albums = class Albums {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Albums.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Albums.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Albums.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.albums1),
    __metadata("design:type", user_entity_1.User)
], Albums.prototype, "user1", void 0);
Albums = __decorate([
    (0, typeorm_1.Entity)()
], Albums);
exports.Albums = Albums;
//# sourceMappingURL=albums.entity.js.map
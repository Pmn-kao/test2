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
exports.Usertohouse = void 0;
const typeorm_1 = require("typeorm");
const house_entity_1 = require("./house.entity");
const user_entity_1 = require("./user.entity");
let Usertohouse = class Usertohouse {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usertohouse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.usertohouses),
    __metadata("design:type", user_entity_1.User)
], Usertohouse.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => house_entity_1.House, house => house.usertohouses),
    __metadata("design:type", house_entity_1.House)
], Usertohouse.prototype, "house", void 0);
Usertohouse = __decorate([
    (0, typeorm_1.Entity)()
], Usertohouse);
exports.Usertohouse = Usertohouse;
//# sourceMappingURL=usertohouse.entity.js.map
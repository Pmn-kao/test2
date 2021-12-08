"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertohouseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usertohouse_entity_1 = require("../../entity/usertohouse.entity");
const usertohouse_controller_1 = require("./usertohouse.controller");
const usertohouse_service_1 = require("./usertohouse.service");
let UsertohouseModule = class UsertohouseModule {
};
UsertohouseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usertohouse_entity_1.Usertohouse])],
        controllers: [usertohouse_controller_1.UsertohouseController],
        providers: [usertohouse_service_1.UsertohouseService],
        exports: [usertohouse_service_1.UsertohouseService]
    })
], UsertohouseModule);
exports.UsertohouseModule = UsertohouseModule;
//# sourceMappingURL=usertohouse.module.js.map
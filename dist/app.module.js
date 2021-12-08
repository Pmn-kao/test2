"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const albums_module_1 = require("./api/albums/albums.module");
const house_module_1 = require("./api/house/house.module");
const user_module_1 = require("./api/user/user.module");
const usertohouse_module_1 = require("./api/usertohouse/usertohouse.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orm_1 = require("./orm");
const auth_module_1 = require("./api/auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(orm_1.config),
            user_module_1.UserModule,
            albums_module_1.AlbumsModule,
            house_module_1.HouseModule,
            usertohouse_module_1.UsertohouseModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
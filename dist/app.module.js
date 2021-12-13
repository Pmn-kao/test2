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
const user_entity_1 = require("./entity/user.entity");
const usertohouse_entity_1 = require("./entity/usertohouse.entity");
const house_entity_1 = require("./entity/house.entity");
const exports_excel_module_1 = require("./exports-excel/exports-excel.module");
const imports_excel_controller_1 = require("./imports-excel/imports-excel.controller");
const imports_excel_module_1 = require("./imports-excel/imports-excel.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(orm_1.config),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, usertohouse_entity_1.Usertohouse, house_entity_1.House]),
            user_module_1.UserModule,
            albums_module_1.AlbumsModule,
            house_module_1.HouseModule,
            usertohouse_module_1.UsertohouseModule,
            auth_module_1.AuthModule,
            exports_excel_module_1.ExportsExcelModule,
            imports_excel_module_1.ImportsExcelModule,
        ],
        controllers: [app_controller_1.AppController, imports_excel_controller_1.ImportsExcelController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
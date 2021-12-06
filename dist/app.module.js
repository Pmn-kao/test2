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
const albums_module_1 = require("./albums/albums.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orm_1 = require("./orm");
const user_module_1 = require("./user/user.module");
const house_module_1 = require("./house/house.module");
const house_service_1 = require("./house/house.service");
const house_controller_1 = require("./house/house.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [albums_module_1.AlbumsModule, typeorm_1.TypeOrmModule.forRoot(orm_1.config), user_module_1.UserModule, house_module_1.HouseModule],
        controllers: [app_controller_1.AppController, house_controller_1.HouseController],
        providers: [app_service_1.AppService, house_service_1.HouseService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
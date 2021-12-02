"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: '1001',
    port: 5432,
    host: 'localhost',
    database: 'test1',
    synchronize: true,
    entities: [__dirname + '/entity/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.js.map
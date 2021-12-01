import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { dirname } from "path/posix";
import { Albums } from "./entity/albums.entity";
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '1001',
  port: 5432,
  host: 'localhost',
  database: 'test1',
  synchronize: true,
  entities: [__dirname +'/entity/*.entity{.ts,.js}'],
};

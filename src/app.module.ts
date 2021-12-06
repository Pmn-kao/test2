import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumsModule } from "./api/albums/albums.module";
import { HouseModule } from "./api/house/house.module";
import { UserModule } from "./api/user/user.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { config } from "./orm";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AlbumsModule,
    HouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

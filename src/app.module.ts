import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumsModule } from "./api/albums/albums.module";
import { HouseModule } from "./api/house/house.module";
import { UserModule } from "./api/user/user.module";
import { UsertohouseModule } from "./api/usertohouse/usertohouse.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { config } from "./orm";
import { AuthModule } from "./api/auth/auth.module";
import { AuthService } from "./api/auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "./entity/user.entity";
import { Usertohouse } from "./entity/usertohouse.entity";
import { House } from "./entity/house.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User,Usertohouse,House]),
    UserModule,
    AlbumsModule,
    HouseModule,
    UsertohouseModule,
    AuthModule,
   
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

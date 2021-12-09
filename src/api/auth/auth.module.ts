import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { AuthController } from "./auth.controller";
import { UserService } from "../user/user.service";
import { JwtStrategy } from "./jwt.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { House } from "src/entity/house.entity";
import { Albums } from "src/entity/albums.entity";
import { Usertohouse } from "src/entity/usertohouse.entity";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "10h" },
    }),
    TypeOrmModule.forFeature([User, Albums, Usertohouse, House]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

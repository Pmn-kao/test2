import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { House } from "src/entity/house.entity";
import { Usertohouse } from "src/entity/usertohouse.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Usertohouse, House])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

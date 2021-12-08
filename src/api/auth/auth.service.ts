import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { Login } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(body: Login) {
    const { email, password } = body;
    const user = await this.userService.findEmail(email);
    if (!user) {
      throw new BadRequestException("User not found");
    }
    const checkpass = await this.userService.compareHash(
      password,
      user.password
    );
    if (checkpass === false) {
      throw new BadRequestException("Password is wrong");
    }
    return user;
  }

  async login(boby: Login) {
    const user = await this.validateUser(boby);
    const { ...userInfo } = user;
    return {
      payload: user,
      accessToken: this.jwtService.sign(userInfo),
    };
  }
}

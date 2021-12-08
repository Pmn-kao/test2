import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { Login } from "./dto/login.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(body: Login): Promise<import("../../entity/user.entity").User>;
    login(boby: Login): Promise<{
        payload: import("../../entity/user.entity").User;
        accessToken: string;
    }>;
}

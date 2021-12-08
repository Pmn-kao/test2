import { AuthService } from './auth.service';
import { Login } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: Login): Promise<{
        payload: import("../../entity/user.entity").User;
        accessToken: string;
    }>;
}

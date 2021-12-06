import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(newUser: CreateUserDto): Promise<User>;
    findUser(): Promise<User[]>;
    findUserid(id: number): Promise<User>;
    updateUser(id: number, createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<any>;
}

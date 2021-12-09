import { User } from "src/entity/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { House } from "src/entity/house.entity";
import { Usertohouse } from "src/entity/usertohouse.entity";
export declare class UserService {
    private readonly userRepository;
    private readonly userToHouseRepository;
    private readonly houseRepository;
    private saltRounds;
    constructor(userRepository: Repository<User>, userToHouseRepository: Repository<Usertohouse>, houseRepository: Repository<House>);
    createUser(newUser: CreateUserDto): Promise<User>;
    getHashPassword(password: string): Promise<string>;
    createOrUpdate(user: User): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<DeleteResult>;
    getAll(): Promise<any[]>;
    getById(id: number): Promise<User[]>;
    findEmail(email: string): Promise<User>;
    compareHash(password: string, hash: string): Promise<boolean>;
    findPayload(payload: any): Promise<User>;
}

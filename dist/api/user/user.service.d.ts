import { User } from "src/entity/user.entity";
import { DeleteResult, Repository } from "typeorm";
export declare class UserService {
    private readonly userRepository;
    private saltRounds;
    constructor(userRepository: Repository<User>);
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

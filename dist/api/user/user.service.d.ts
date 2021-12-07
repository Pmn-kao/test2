import { User } from 'src/entity/user.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createOrUpdate(user: User): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<DeleteResult>;
    getAll(): Promise<User[]>;
}

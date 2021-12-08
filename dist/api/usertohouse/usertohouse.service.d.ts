import { Usertohouse } from "src/entity/Usertohouse.entity";
import { DeleteResult, Repository } from "typeorm";
export declare class UsertohouseService {
    private readonly usertohouseRepository;
    constructor(usertohouseRepository: Repository<Usertohouse>);
    createOrUpdate(usertohouse: Usertohouse): Promise<Usertohouse>;
    findOne(id: number): Promise<Usertohouse>;
    findAll(): Promise<Usertohouse[]>;
    delete(id: number): Promise<DeleteResult>;
    getAll(): Promise<Usertohouse>;
    getById(id: number): Promise<Usertohouse[]>;
}

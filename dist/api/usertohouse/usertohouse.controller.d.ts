import { UsertohouseService } from './usertohouse.service';
import { CreateUsertohouseDto } from './dto/create-Usertohouse.dto';
import { Usertohouse } from 'src/entity/usertohouse.entity';
export declare class UsertohouseController {
    private readonly UsertohouseService;
    constructor(UsertohouseService: UsertohouseService);
    createUsertohouse(newUsertohouse: CreateUsertohouseDto): Promise<Usertohouse>;
    findUsertohouse(): Promise<Usertohouse[]>;
    findUsertohouseid(id: number): Promise<Usertohouse[]>;
    updateUsertohouse(id: number, createUsertohouseDto: CreateUsertohouseDto): Promise<Usertohouse>;
    deleteUsertohouse(id: number): Promise<any>;
}

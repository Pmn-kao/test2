import { House } from "src/entity/house.entity";
import { DeleteResult, Repository } from "typeorm";
export declare class HouseService {
    private readonly houseRepository;
    constructor(houseRepository: Repository<House>);
    createOrUpdate(house: House): Promise<House>;
    findOne(id: number): Promise<House>;
    findAll(): Promise<House[]>;
    delete(id: number): Promise<DeleteResult>;
}

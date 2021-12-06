import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { House } from '../../entity/house.entity';
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    createHouse(newHouse: CreateHouseDto): Promise<House>;
    findHouse(): Promise<House[]>;
    findHouseid(id: number): Promise<House>;
    updateHouse(id: number, createHouseDto: CreateHouseDto): Promise<House>;
    deleteHouse(id: number): Promise<any>;
}

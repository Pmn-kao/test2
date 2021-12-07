import { Albums } from './albums.entity';
import { Usertohouse } from './usertohouse.entity';
export declare class User {
    id: number;
    name: string;
    lastname: string;
    albums1s: Albums[];
    usertohouses: Usertohouse[];
}

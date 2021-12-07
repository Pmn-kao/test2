import { Albums } from "src/entity/albums.entity";
import { DeleteResult, Repository } from "typeorm";
export declare class AlbumsService {
    private readonly albumRepository;
    constructor(albumRepository: Repository<Albums>);
    createOrUpdate(album: Albums): Promise<Albums>;
    findOne(id: number): Promise<Albums>;
    findAll(): Promise<Albums[]>;
    delete(id: number): Promise<DeleteResult>;
    getAll(): Promise<Albums[]>;
    getById(id: number): Promise<Albums[]>;
}

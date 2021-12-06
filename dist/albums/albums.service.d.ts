import { Albums } from "src/entity/albums.entity";
import { User } from "src/entity/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { AlbumFind } from "./dto/find-album.dto";
export declare class AlbumsService {
    private readonly albumRepository;
    private readonly userRepository;
    constructor(albumRepository: Repository<Albums>, userRepository: Repository<User>);
    createAlbum(CreateAlbum: CreateAlbumDto): Promise<Albums>;
    createOrUpdate(album: Albums): Promise<Albums>;
    findOne(id: number): Promise<Albums[]>;
    searchAlbumByFilter(findAlbum: AlbumFind): Promise<Albums[]>;
    findAll(): Promise<Albums[]>;
    delete(id: number): Promise<DeleteResult>;
    Get(): Promise<Albums[]>;
}

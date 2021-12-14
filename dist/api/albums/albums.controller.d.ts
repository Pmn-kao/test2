import { AlbumsService } from "./albums.service";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { Albums } from "../../entity/albums.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class AlbumsController {
    private readonly albumService;
    private userRepository;
    constructor(albumService: AlbumsService, userRepository: Repository<User>);
    createAlbum(newAlbum: CreateAlbumDto): Promise<Albums>;
    findAlbums(): Promise<Albums[]>;
    findAlbum(id: number): Promise<Albums[]>;
    updateAlbum(id: number, createAlbumDto: CreateAlbumDto): Promise<Albums>;
    deleteAlbum(id: number): Promise<any>;
}

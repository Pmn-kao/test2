import { AlbumsService } from "./albums.service";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { Albums } from "../entity/albums.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { AlbumFind } from "./dto/find-album.dto";
export declare class AlbumsController {
    private readonly albumService;
    private userRepository;
    constructor(albumService: AlbumsService, userRepository: Repository<User>);
    createAlbum(newAlbum: CreateAlbumDto): Promise<Albums>;
    findAlbums(): Promise<Albums[]>;
    findOne(id: number): Promise<Albums[]>;
    findAlbum(getFil: AlbumFind): Promise<Albums[]>;
    deleteAlbum(id: number): Promise<any>;
}

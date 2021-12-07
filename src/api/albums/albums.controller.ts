import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    HttpStatus,
    HttpCode,
    Put,
    Delete,
  } from '@nestjs/common';
  import { AlbumsService } from './albums.service';
  import { CreateAlbumDto } from './dto/create-album.dto';
  import { Albums } from '../../entity/albums.entity';
  import { InjectRepository } from '@nestjs/typeorm';
  import { User } from 'src/entity/user.entity';
  import { Repository } from 'typeorm';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
  @ApiTags('albums')
  @Controller('albums')
  export class AlbumsController {
    constructor(private readonly albumService: AlbumsService,
      @InjectRepository(User)
      private userRepository: Repository<User>,) {
    }

  
    @Post() // POST /albums
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() newAlbum: CreateAlbumDto): Promise<Albums> {
      const findUser = await this.userRepository.findOne({id:newAlbum.user1});
      const album = new Albums();
      album.title = newAlbum.title;
      album.remark = newAlbum.remark;
      album.user1 = findUser;
      return await this.albumService.createOrUpdate(album);
    }
  
    @Get() // GET /albums
    async findAlbums(): Promise<Albums[]> {
      console.log('dist/**/*.entity{.ts,.js}');
      return await this.albumService.getAll();
    }
  
    @Get(':id') // GET /albums/123
    async findAlbum(@Param('id') id: number): Promise<Albums[]> {
      return await this.albumService.getById(id);
    }
  
    @Put(':id') // PUT /albums/123
    async updateAlbum(
      @Param('id') id: number,
      @Body() createAlbumDto: CreateAlbumDto,
    ): Promise<Albums> {
      const album = await this.albumService.findOne(id);
      album.title = createAlbumDto.title;
      album.remark = createAlbumDto.remark;
      return await this.albumService.createOrUpdate(album);
    }
  
    @Delete(':id')  // DELETE /albums/123
    async deleteAlbum(@Param('id') id: number): Promise<any> {
      await this.albumService.delete(id);
      return { success: true };
    }
  } 
  
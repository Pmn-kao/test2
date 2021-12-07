import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { Albums } from 'src/entity/albums.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AlbumsService {

  constructor(
    @InjectRepository(Albums)
    private readonly albumRepository: Repository<Albums>,
  ) {}

  async createOrUpdate(album: Albums): Promise<Albums> {
    return await this.albumRepository.save(album);
  }

  async findOne(id: number): Promise<Albums> {
     return await this.albumRepository.findOne({ id: id });
  }

  async findAll(): Promise<Albums[]> {
     return await this.albumRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
     return await this.albumRepository.delete({ id: id });
  }

  // async Get() {
  //   const _al = await this.al
  //     .createQueryBuilder('al')
  //     .leftJoinAndSelect('al.user', 'user')
  //     .andWhere('al.isDelete= :isDelete', { isDelete: false })
  //     .orderBy('al.createdAt', 'DESC')
  //     .getMany();
  //   return _al;
  // }

  
}

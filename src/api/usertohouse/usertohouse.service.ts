import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usertohouse } from 'src/entity/Usertohouse.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UsertohouseService {

  constructor(
    @InjectRepository(Usertohouse)
    private readonly usertohouseRepository: Repository<Usertohouse>,
  ) {}

  async createOrUpdate(usertohouse: Usertohouse): Promise<Usertohouse> {
    return await this.usertohouseRepository.save(usertohouse);
  }

  async findOne(id: number): Promise<Usertohouse> {
     return await this.usertohouseRepository.findOne({ id: id });
  }

  async findAll(): Promise<Usertohouse[]> {
     return await this.usertohouseRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
     return await this.usertohouseRepository.delete({ id: id });
  }

  async getAll() {
    const _usertohouse = await this.usertohouseRepository
      .createQueryBuilder('usertohouse')
      .leftJoinAndSelect('usertohouse.house', 'house')
      .leftJoinAndSelect("usertohouse.user", "user")
      // .andWhere('al.isDelete= :isDelete', { isDelete: false })
      // .orderBy('al.createdAt', 'DESC')
      .getMany();
    return _usertohouse;
  }

  async getById(id: number) {
    const _usertohouse = await this.usertohouseRepository
    .createQueryBuilder("usertohouse")
    .leftJoinAndSelect("usertohouse.house", "house")
    .leftJoinAndSelect("usertohouse.user", "user")
    .andWhere('usertohouse.id = :id', { id: id })
    .getMany();
    // const _richMenu = await this.richMenuRepository.find({
    //   relations: ["image"],
    //   where: { id },
    // });
    return _usertohouse;
  }

}

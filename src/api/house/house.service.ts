import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { House} from 'src/entity/house.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class HouseService {

  constructor(
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>,
  ) {}

  async createOrUpdate(user: House): Promise<House> {
    return await this.houseRepository.save(user);
  }

  async findOne(id: number): Promise<House> {
     return await this.houseRepository.findOne({ id: id });
  }

  async findAll(): Promise<House[]> {
     return await this.houseRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
     return await this.houseRepository.delete({ id: id });
  }

  async getAll() {
    const _house = await this.houseRepository
      .createQueryBuilder('house')
      .leftJoinAndSelect('house.usertohouses', 'usertohouses')
      // .andWhere('al.isDelete= :isDelete', { isDelete: false })
      // .orderBy('al.createdAt', 'DESC')
      .getMany();
    return _house;
  }

  async getById(id: number) {
    const _house = await this.houseRepository
    .createQueryBuilder("house")
    .leftJoinAndSelect("house.usertohouses", "usertohouses")
    .andWhere('house.id = :id', { id: id })
    .getMany();
    // const _richMenu = await this.richMenuRepository.find({
    //   relations: ["image"],
    //   where: { id },
    // });
    return _house;
  }
}


import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { User } from 'src/entity/user.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createOrUpdate(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
     return await this.userRepository.findOne({ id: id });
  }

  async findAll(): Promise<User[]> {
     return await this.userRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
     return await this.userRepository.delete({ id: id });
  }

  async getAll() {
    const _user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.albums1s', 'albums1s')
      .leftJoinAndSelect('user.usertohouses', 'usertohouses')
      // .andWhere('al.isDelete= :isDelete', { isDelete: false })
      // .orderBy('al.createdAt', 'DESC')
      .getMany();
    return _user;
  }
  
}

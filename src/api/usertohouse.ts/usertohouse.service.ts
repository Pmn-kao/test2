// import { Inject, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { type } from 'os';
// import { Usertohouse } from 'src/entity/Usertohouse.entity';
// import { DeleteResult, Repository } from 'typeorm';

// @Injectable()
// export class Usertohouse {

//   constructor(
//     @InjectRepository(Usertohouse)
//     private readonly usertohouseRepository: Repository<Usertohouse>,
//   ) {}

//   async createOrUpdate(usertohouse: Usertohouse): Promise<Usertohouse> {
//     return await this.usertohouseRepository.save(usertohouse);
//   }

//   async findOne(id: number): Promise<Usertohouse> {
//      return await this.usertohouseRepository.findOne({ id: id });
//   }

//   async findAll(): Promise<Usertohouse[]> {
//      return await this.usertohouseRepository.find();
//   }

//   async delete(id: number): Promise<DeleteResult> {
//      return await this.usertohouseRepository.delete({ id: id });
//   }
// }

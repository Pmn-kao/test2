import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { type } from "os";
import { User } from "src/entity/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { compare,hash } from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  private saltRounds = 10;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  // async create(newUser:CreateUserDto):Promise<User>{
  //   const { name, lastname, email, password, confirmPassword} = newUser;
  //   const user = new User();
  //   user.name = newUser.name;
  //   user.lastname = newUser.lastname;
  //   user.email = newUser.email;
  //   user.password = await this.getHashPassword(confirmPassword);
  //   // const data=await this.save(user);
  //   return user;
  // }

  async getHashPassword(password: string): Promise<string> {
    return await hash(password, this.saltRounds);
  }

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
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.albums1s", "albums1s")
      .leftJoinAndSelect("user.usertohouses", "usertohouses")
      // .andWhere('al.isDelete= :isDelete', { isDelete: false })
      // .orderBy('al.createdAt', 'DESC')
      .getRawMany();
    return _user;
  }

  async getById(id: number) {
    const _user = await this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.albums1s", "albums1s")
      .leftJoinAndSelect("user.usertohouses", "usertohouses")
      .andWhere("user.id = :id", { id: id })
      .getMany();
    // const _richMenu = await this.richMenuRepository.find({
    //   relations: ["image"],
    //   where: { id },
    // });
    return _user;
  }

  async findEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email: email },
      relations: ["albums1s", "usertohouses"],
    });
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }

  async findPayload(payload: any) {
    return await this.userRepository.findOne({ where: { id: payload.id } });
  }

}

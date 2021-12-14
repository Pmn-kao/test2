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
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "src/entity/user.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import passport from "passport";
import { JwtAuthGuard } from "../auth/jwt-guard";
@ApiTags("user")
@Controller("user")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // POST /user
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() newUser: CreateUserDto): Promise<User> {
    // const { name, lastname, email, password, confirmPassword} = newUser;
    // const user = new User();
    // user.name = newUser.name;
    // user.lastname = newUser.lastname;
    // user.email = newUser.email;
    // user.password = await this.userService.getHashPassword(confirmPassword);
    return await this.userService.createUser(newUser);
  }

  
  @Get() // GET /user
  async findUser(): Promise<User[]> {
    console.log("dist/**/*.entity{.ts,.js}");
    return await this.userService.getAll();
  }
  
  @Get(":id") // GET /user/123
  async findUserid(@Param("id") id: number): Promise<User[]> {
    return await this.userService.getById(id);
  }
  
  @Put(":id") // PUT /usr/123
  async updateUser(
    @Param("id") id: number,
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    const user = await this.userService.findOne(id);
    user.name = createUserDto.name;
    user.lastname = createUserDto.lastname;
    return await this.userService.createOrUpdate(user);
  }
  @Delete(":id") // DELETE /user/123
  async deleteUser(@Param("id") id: number): Promise<any> {
    await this.userService.delete(id);
    return { success: true };
  }
}

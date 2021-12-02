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
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { User } from '../entity/user.entity';

  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post() // POST /user
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() newUser: CreateUserDto): Promise<User> {
      const user = new User();
      user.name = newUser.name;
      user.lastname = newUser.lastname;
      return await this.userService.createOrUpdate(user);
    }
  
    @Get() // GET /user
    async findUser(): Promise<User[]> {
      console.log('dist/**/*.entity{.ts,.js}');
      return await this.userService.findAll();
    }
  
    @Get(':id') // GET /user/123
    async findUserid(@Param('id') id: number): Promise<User> {
      return await this.userService.findOne(id);
    }
  
    @Put(':id') // PUT /usr/123
    async updateUser(
      @Param('id') id: number,
      @Body() createUserDto: CreateUserDto,
    ): Promise<User> {
      const user = await this.userService.findOne(id);
      user.name = createUserDto.name;
      user.lastname = createUserDto.lastname;
      return await this.userService.createOrUpdate(user);
    }
  
    @Delete(':id')  // DELETE /user/123
    async deleteUser(@Param('id') id: number): Promise<any> {
      await this.userService.delete(id);
      return { success: true };
    }
  }

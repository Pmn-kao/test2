import { All } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Albums } from './albums.entity';
import { House } from './house.entity';
import { User } from './user.entity';

@Entity()
export class Usertohouse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => User,
    user => user.usertohouses,
  )
  user:User;

  @ManyToOne(
    () => House,
    house => house.usertohouses,
  )
  house:House;
}

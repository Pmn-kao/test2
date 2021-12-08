import { All } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Albums } from './albums.entity';
import { Usertohouse } from './usertohouse.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  lastname: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @OneToMany(
    () => Albums,
    albums => albums.user1,
)
albums1s:Albums[];

  @OneToMany(
  () => Usertohouse,
  usertohouse => usertohouse.user
)
usertohouses:Usertohouse[];
}


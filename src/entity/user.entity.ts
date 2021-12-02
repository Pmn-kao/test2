import { All } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Albums } from './albums.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 255 })
  lastname: string;

  @OneToMany(
    () => Albums,
    albums => albums.user1
)
albums1:Albums[];

}


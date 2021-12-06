import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Usertohouse } from './usertohouse.entity';

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @OneToMany(
    () => Usertohouse,
    usertohouse => usertohouse.house
  )
  usertohouses:Usertohouse[];

}
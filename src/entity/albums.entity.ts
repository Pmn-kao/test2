import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  @Column({ length: 255 })
  remark: string;

  @ManyToOne(
    () => User,
    user => user.albums1
  )
  user1:User;

}

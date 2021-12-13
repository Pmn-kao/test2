import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true , length: 30 })
  title: string;

  @Column({nullable:true ,length: 255 })
  remark: string;

  @Column({nullable:true , type:"text"})
  url : string;

  @ManyToOne(
    () => User,
    user => user.albums1s,
  )
  user1:User;

}

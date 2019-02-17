import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserGroup } from './usergroup.entity';
import { User } from './user.entity';

@Entity()
export class Alias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(type => UserGroup, ug => ug.aliases)
  @JoinColumn({ name: "user_group_id" })
  userGroup: UserGroup;
}

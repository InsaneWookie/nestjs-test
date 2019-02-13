import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;


}

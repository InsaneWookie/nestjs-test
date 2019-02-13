import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { GamePlayed } from "./gameplayed.entity";

@Entity({name: 'machine'})
export class Machine {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  //
  // @Column()
  // group_id: number;


  @OneToOne(type => GamePlayed, gp => gp.machine) // specify inverse side as a second parameter
  gameplayed: GamePlayed;


}
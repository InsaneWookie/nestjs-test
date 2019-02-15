import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { GamePlayed } from "./gameplayed.entity";

@Entity({name: 'game'})
export class Game {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  full_name: string;



  @OneToOne(type => GamePlayed, gp => gp.game) // specify inverse side as a second parameter
  gameplayed: GamePlayed;

  latestPlayed: GamePlayed;

}
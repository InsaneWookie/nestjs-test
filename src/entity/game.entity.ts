import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { GamePlayed } from "./gameplayed.entity";
import { Score } from './score.entity';

@Entity({name: 'game'})
export class Game {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  sort: string;

  @OneToMany(type => Score, s => s.game)
  scores: Score[];

  @OneToOne(type => GamePlayed, gp => gp.game) // specify inverse side as a second parameter
  gameplayed: GamePlayed;

  latestPlayed: GamePlayed;

}

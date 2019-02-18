import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';
import { Machine } from './machine.entity';
import { Game } from './game.entity';

@Entity()
export class Score {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: string;

  @Column()
  alias_id: number;

  @ManyToOne(type => Machine, m => m.scores)
  @JoinColumn({ name: "machine_id" })
  machine: Machine;

  @ManyToOne(type => Game, g => g.scores)
  @JoinColumn({ name: "game_id" })
  game: Game;
}

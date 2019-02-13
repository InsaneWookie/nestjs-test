import { Injectable } from '@nestjs/common';
import { Game } from "../entity/game.entity";
import { InjectRepository  } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { GamePlayed } from "../entity/gameplayed.entity";

@Injectable()
export class GameService {

  constructor(@InjectRepository(Game)
              private readonly game: Repository<Game>,
              @InjectRepository(GamePlayed)
              private readonly gamePlayed: Repository<GamePlayed>){

  }

  async findAll(groupId: number): Promise<Game[]> {

    let q = this.gamePlayed.createQueryBuilder('gp')
      .leftJoinAndSelect('gp.machine', 'm')
      .where('m.group_id = :groupId')
      .getQuery();

    return await this.game.createQueryBuilder('game')
      .leftJoinAndSelect(`(${q})`, 'played', 'game.id = played.gp_game_id')
      //  .leftJoinAndSelect(GamePlayed, 'gameplayed', 'played.gp_id = gameplayed.id')
      .leftJoinAndMapOne('game.gameplayed', 'game.gameplayed', 'gameplayed', 'played.gp_id = gameplayed.game_id')
      .setParameter("groupId", groupId)
      .getMany();
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { Game } from '../entity/game.entity';
import { Machine } from '../entity/machine.entity';
import { GamePlayed } from '../entity/gameplayed.entity';
import { User } from '../entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from "../entity/score.entity";
import { Group } from "../entity/group.entity";
import { UserGroup } from "../entity/usergroup.entity";
import { Alias } from "../entity/alias.entity";

describe('Game Controller', () => {
  let controller: GameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '192.168.99.100',
          port: 5433,
          username: 'postgres',
          password: 'example',
          database: 'mame',
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          entities: [Game, Machine, GamePlayed, User, Score, Group, UserGroup, Alias],
          synchronize: false,
          logging: true,
          cli: {
            entitiesDir: "src"
          }
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Game, Machine, GamePlayed, User, Score, Group, UserGroup, Alias])],
      controllers: [GameController],
    }).compile();

    controller = module.get<GameController>(GameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

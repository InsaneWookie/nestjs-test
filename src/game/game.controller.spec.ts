import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { Game } from '../entity/game.entity';
import { Machine } from '../entity/machine.entity';
import { GamePlayed } from '../entity/gameplayed.entity';
import { User } from '../entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Game Controller', () => {
  let controller: GameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5433,
          username: 'postgres',
          password: 'example',
          database: 'mamebackup',
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          entities: [Game, Machine, GamePlayed, User],
          synchronize: false,
          logging: true,
          cli: {
            entitiesDir: "src"
          }
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Game, Machine, GamePlayed, User])],
      controllers: [GameController],
    }).compile();

    controller = module.get<GameController>(GameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

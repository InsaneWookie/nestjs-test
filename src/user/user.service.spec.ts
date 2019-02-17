import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Game } from '../entity/game.entity';
import { Machine } from '../entity/machine.entity';
import { GamePlayed } from '../entity/gameplayed.entity';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Score } from '../entity/score.entity';
import { Group } from '../entity/group.entity';
import { UserGroup } from '../entity/usergroup.entity';
import { Alias } from '../entity/alias.entity';

describe('UserService', () => {
  let service: UserService;

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
          entities: [Game, Machine, GamePlayed, User, Score, Group, UserGroup, Alias],
          synchronize: false,
          logging: true,
          cli: {
            entitiesDir: 'src'
          }
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Game, Machine, GamePlayed, User, Score, Group, UserGroup, Alias])],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

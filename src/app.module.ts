import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamePlayed } from './entity/gameplayed.entity';
import { Machine } from './entity/machine.entity';
import { Game } from './entity/game.entity';
import { User } from './entity/user.entity';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ScoredecoderService } from './scoredecoder/scoredecoder.service';
import { GroupModule } from './group/group.module';
import { Score } from './entity/score.entity';
import { Group } from './entity/group.entity';
import { UserGroup } from './entity/usergroup.entity';
import { Alias } from './entity/alias.entity';
import { AliasController } from './alias/alias.controller';
import { AliasModule } from './alias/alias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.99.100',
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
    TypeOrmModule.forFeature([Game, Machine, GamePlayed, User, Score, Group, UserGroup, Alias]),
    AuthModule,
    GameModule,
    UserModule,
    GroupModule,
    AliasModule
  ],
  controllers: [],
  providers: [ScoredecoderService],
})
export class AppModule {
  constructor() {
    console.log('Working directory: ' + __dirname);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamePlayed } from "./entity/gameplayed.entity";
import { Machine } from "./entity/machine.entity";
import { Game } from "./entity/game.entity";
import { User } from "./entity/user.entity";
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.99.100',
      port: 5433,
      username: 'postgres',
      password: 'example',
      database: 'mame',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Game, Machine, GamePlayed, User],
      synchronize: false,
      logging: true,
      cli: {
        entitiesDir: "src"
      }
    }),
    TypeOrmModule.forFeature([Game, Machine, GamePlayed, User]),
    AuthModule,
    GameModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log("Working directory: " + __dirname);
  }
}

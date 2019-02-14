import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamePlayed } from "./entity/gameplayed.entity";
import { Machine } from "./entity/machine.entity";
import { Game } from "./entity/game.entity";
import { User } from "./entity/user.entity";
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { AuthController } from "./auth/auth.controller";
import { UserService } from './user/user.service';
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
    AuthModule
    // GameModule,
    // UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log(__dirname);
  }
}

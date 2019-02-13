import { Module } from '@nestjs/common';
import { AppModule } from "../app.module";
import { AuthService } from "../auth/auth.service";
import { HttpStrategy } from "../http.strategy";
import { AuthController } from "../auth/auth.controller";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { Game } from "../entity/game.entity";
import { Machine } from "../entity/machine.entity";
import { GamePlayed } from "../entity/gameplayed.entity";
import { User } from "../entity/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Machine, GamePlayed, User]),],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}

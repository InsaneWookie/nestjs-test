import { Module } from '@nestjs/common';
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { Game } from "../entity/game.entity";
import { Machine } from "../entity/machine.entity";
import { GamePlayed } from "../entity/gameplayed.entity";
import { User } from "../entity/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from "../jwt.strategy";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Game, Machine, GamePlayed, User]),],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}

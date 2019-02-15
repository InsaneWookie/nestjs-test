import { Module } from '@nestjs/common';
import { UserService } from "./user.service";
import { User } from "../entity/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from "../entity/game.entity";
import { Machine } from "../entity/machine.entity";
import { GamePlayed } from "../entity/gameplayed.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Game, Machine, GamePlayed, User]),],
  providers: [UserService],
  controllers: [],
  })
export class UserModule {}

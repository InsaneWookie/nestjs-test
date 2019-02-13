import { Controller, Get, Session, Request, Post, Body } from '@nestjs/common';
import { Game } from "../entity/game.entity";
import { AppService } from "../app.service";
import { GameService } from "./game.service";

@Controller('game')
export class GameController {

  constructor( private readonly gameService: GameService) {
  }

  @Get()
  findAll(@Session() session): Promise<Game[]> {
    console.log(session);
    return this.gameService.findAll(2);
  }
}

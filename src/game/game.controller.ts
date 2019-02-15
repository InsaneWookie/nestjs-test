import { Controller, Get, Session, Request, Post, Body, UseGuards, Req } from '@nestjs/common';
import { Game } from "../entity/game.entity";
import { GameService } from "./game.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('game')
export class GameController {

  constructor( private readonly gameService: GameService) {
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(@Req() req): Promise<Game[]> {
    console.log('game route');
    console.log(req.user);
    const groupId = req.user.groupId;
    return this.gameService.findAll(groupId);
  }
}

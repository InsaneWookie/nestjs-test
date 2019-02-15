import { Controller, Get, Session, Request, Post, Body, UseGuards, Req, Param } from '@nestjs/common';
import { Game } from "../entity/game.entity";
import { GameService } from "./game.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('game')
@UseGuards(AuthGuard())
export class GameController {

  constructor( private readonly gameService: GameService) {
  }

  @Get()
  findAll(@Req() req): Promise<Game[]> {
    console.log('game route');
    console.log(req.user);
    const groupId = 1; //req.user.groupId;
    return this.gameService.findAll(groupId);
  }

  @Get(':id')
  // @UseGuards(AuthGuard())
  find(@Param('id') id): Promise<Game>{
    const groupId = 1; //req.user.groupId;
    return this.gameService.find(id, groupId);
  }
}

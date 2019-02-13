import { Controller, Get, Session, Request, Post, Body } from '@nestjs/common';
// import { AppService } from './app.service';
// import { GamePlayed } from "./entity/gameplayed.entity";
// import { Machine } from "./machine.entity";
// import { Game } from "./entity/game.entity";

@Controller('main')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  //
  // @Get()
  // getHello(@Session() session): Promise<Game[]> {
  //   session.test = 123;
  //   return this.appService.getHello();
  // }
  //
  // @Get('/auth')
  // getAuth(@Request() request, @Session() session): string {
  //
  //   // request.session.groupId
  //   //session.touch();
  //   console.log(request.sessionID);
  //   console.log(request.session);
  //   console.log(session);
  //   return "sweet";
  // }
  //
  // @Post('/test')
  // create(@Body() createUserData) {
  //   console.log(createUserData);
  //   return this.appService.saveUser(createUserData);
  // }
}

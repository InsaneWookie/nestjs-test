import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AliasService } from "./alias.service";

@Controller('alias')
@UseGuards(AuthGuard())
export class AliasController {

  constructor(private readonly aliasService: AliasService) {
  }

  @Post(':id')
  create(@Req() req, @Body() body){

    const id = 1;

    return this.aliasService.save(body)

  }
}

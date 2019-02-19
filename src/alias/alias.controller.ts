import { Body, Controller, Delete, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AliasService } from "./alias.service";

@Controller('alias')
@UseGuards(AuthGuard())
export class AliasController {

  constructor(private readonly aliasService: AliasService) {
  }

  @Post()
  create(@Req() req, @Body() body){

    console.log(body);
    const groupId = req.user.groupId;

    if(!body.length){
      return [];
    }

    return this.aliasService.saveAll(body, groupId)

  }

  @Post('delete')
  delete(@Req() req, @Body() body){
    //TODO check valid to delete

    if(!body.length){
      return [];
    }

    return this.aliasService.removeAll(body);
  }

}

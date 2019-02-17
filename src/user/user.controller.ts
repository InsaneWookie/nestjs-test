import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  find(@Req() req): Promise<User[]> {
    const groupId = req.user.groupId;
    return this.userService.find(groupId);
  }
}

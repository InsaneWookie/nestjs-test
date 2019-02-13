import { Controller, Post, Session } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('login')
  login(@Session() session): object {
    session.groupId = 1;
    return { success: true };
  }

}

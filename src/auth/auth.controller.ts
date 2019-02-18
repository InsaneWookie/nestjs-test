import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Get('token')
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    return 'hello';
    // return req.user;
    // This route is restricted by AuthGuard
    // JWT strategy
  }

  @Post('login')
  async login(@Body() body) {

    console.log(body);

    return await this.authService.login(body.username, body.password);
  }

  @Post('register')
  async register(@Body() body) {
    return await this.authService.register(body);
  }
}

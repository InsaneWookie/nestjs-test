import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from "./jwt-payload.interface";
import { UserService } from "../user/user.service";
// import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              private readonly userService: UserService) {}

  async createToken() {
    // const user: JwtPayload = { email: 'test@email.com' };
    // const accessToken = this.jwtService.sign(user);
    // console.log(accessToken);
    // return {
    //   expiresIn: 3600,
    //   accessToken,
    // };
  }

  async login(userName: string, password: string){
    const u = await this.userService.findByUserName(userName);

    const user: JwtPayload = {
      userId: u.id,
      groupId: 1
    };

    console.log(user);
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username

    let user = await this.userService.findOne(payload.userId);
    console.log(payload);

    return { user, groupId: payload.groupId };
  }
}
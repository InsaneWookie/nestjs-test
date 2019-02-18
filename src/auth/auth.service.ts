import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserService } from '../user/user.service';

// import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              private readonly userService: UserService) {
  }

  async createToken() {
    // const user: JwtPayload = { email: 'test@email.com' };
    // const accessToken = this.jwtService.sign(user);
    // console.log(accessToken);
    // return {
    //   expiresIn: 3600,
    //   accessToken,
    // };
  }

  async login(userName: string, password: string) {
    const u = await this.userService.findByUserName(userName);

    if(!u){
      throw "User not found: " + userName;
    }

    if (!u.groups.length) {
      throw 'No group for this user: ' + u.id;
    }

    if (u.groups.length > 1) {
      throw 'More than group per user not supported yet, user: ' + u.id;
    }

    const user: JwtPayload = {
      userId: u.id,
      groupId: u.groups[0].id
    };

    // console.log(user);
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

    return {user, groupId: payload.groupId};
  }
}

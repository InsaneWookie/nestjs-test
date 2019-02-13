import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { AppService } from "../app.service";

@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // return await this.appService.findOneByToken(token);
  }
}
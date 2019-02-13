import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
// import { Model } from 'mongoose';
import { use } from 'passport';
import { Strategy } from 'passport-local';
import { User } from './entity/user.entity';
import { UserService } from './user/user.service';
import { bcrypt } from 'bcrypt-nodejs';
import { PassportStrategy } from '@nestjs/passport';

// import { IUser } from '../../user/interfaces/user.interface';
// import { generateHashedPassword, generateSalt } from '../../../utilities/encryption';
// import { MESSAGES, USER_MODEL_TOKEN } from '../../../server.constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
    // this.init();
  }

  async validate(token: string) {
    const user = await this.authService.validateUser(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  private init(): void {

    const config = {
      usernameField: 'username',
      passportField: 'password',
    };


    use('local-signin',
      new Strategy(
        config,
        async (username, password, cb) => {
          let user = await this.userService.findOne({username: username});

          if (!user) {
            return cb(null, false, {message: 'Username not found'});
          }
          bcrypt.compare(password, user.password, (err, res) => {
            if (!res) {
              return cb(null, false, {message: 'Invalid Password'});
            }
            const userDetails = {
              email: user.email,
              username: user.username,
              id: user.id,
            };
            return cb(null, userDetails, {message: 'Login Succesful'});
          });
      }));
  }
}

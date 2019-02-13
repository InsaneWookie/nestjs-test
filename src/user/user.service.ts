import { Injectable} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Game } from '../entity/game.entity';
import { Repository } from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
              private readonly user: Repository<User>) {
  }

  async findOneByToken(token: string): Promise<any> {

  }

  async findOne(id): Promise<User> {
    return await this.user.findOne(id);
  }
}

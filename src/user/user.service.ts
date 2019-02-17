import { Injectable} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
              private readonly user: Repository<User>) {
  }

  // async findOneByToken(token: string): Promise<any> {
  //
  // }

  async find(groupId: number): Promise<User[]> {
    return await this.user.createQueryBuilder('user')
      .innerJoin('user.userGroups', 'ug')
      .where('ug.group_id = :groupId', {groupId})
      .getMany();
  }

  async findOne(id): Promise<User> {
    return await this.user.findOne(id);
  }

  async findByUserName(userName: string): Promise<User> {
    return await this.user.findOne({where: {username: userName}, relations: ['groups']});
  }
}

import { Injectable} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm';
import { UserGroup } from '../entity/usergroup.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
              private readonly userRepository: Repository<User>,
              @InjectRepository(UserGroup)
              private readonly userGroupRepo: Repository<UserGroup>) {
  }

  // async findOneByToken(token: string): Promise<any> {
  //
  // }

  async find(groupId: number): Promise<User[]> {
    return await this.userRepository.createQueryBuilder('user')
      .innerJoin('user.userGroups', 'ug')
      .where('ug.group_id = :groupId', {groupId})
      .getMany();
  }

  async findOne(id): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findByUserName(userName: string): Promise<User> {
    return await this.userRepository.findOne({where: {username: userName}, relations: ['groups']});
  }

  async save(user: User, groupId: number): Promise<User> {

    const newUser = await this.userRepository.save(user);

    await this.userGroupRepo.createQueryBuilder('ug').insert().into('user_group')
      .values({group: groupId, user: user.id})
      .execute();

    return newUser;
  }
}

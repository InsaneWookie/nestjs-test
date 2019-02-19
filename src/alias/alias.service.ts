import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { Alias } from "../entity/alias.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AliasService {

  constructor(@InjectRepository(Alias)
              private readonly aliasRepository: Repository<Alias>) {
  }

  save(body: any, groupId? : number) {

    const alias = new Alias();

    this.aliasRepository.save()
  }
}

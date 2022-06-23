import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './entities/repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
  ){}

  // async findAll() {
  //   const data = await this.repoRepository.find();
  //   return data; 
  // }

  async findByUser(username: string) {
    const data = await this.repoRepository.find({where:{username:username}});
    return data; 
  }

}

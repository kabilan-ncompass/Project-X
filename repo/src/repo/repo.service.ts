import { CACHE_MANAGER, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { Repo } from './entities/repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ){}

  // async findAll() {
  //   const data = await this.repoRepository.find();
  //   return data; 
  // }

  async findByUser(username: string) {
    try {
      const repo = await this.cacheManager.get(`${username}_repo`);
      console.log("cache *******************************************************",repo)
      if(repo){
        return repo
      }
      const data = await this.repoRepository.find({where:{username:username}});
      if(data.length == 0){
        return "No details found"
      }
      await this.cacheManager.set(`${username}_repo`,data,{ttl:30})
      console.log("data *************************************************",data)
      return data; 
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}

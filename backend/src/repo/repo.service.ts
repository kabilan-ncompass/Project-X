import { CACHE_MANAGER, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
  ) { }

  async findByUser(username: string) {
    try {
      const repo = await this.cacheManager.get(`${username}_repo`);
      if (repo) {
        return {
          "success": true,
          "message": `sucessfully fetched`,
          "data": repo
        };
      }
      const data = await this.repoRepository.find({ where: { username: username } });
      if (data.length == 0) {
        throw new NotFoundException("No details found")
      }
      await this.cacheManager.set(`${username}_repo`, data, { ttl: 3600 })
      return {
        "success": true,
        "message": `sucessfully fetched ${data.length}`,
        "data": data
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}

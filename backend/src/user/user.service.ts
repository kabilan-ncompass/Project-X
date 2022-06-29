import { CACHE_MANAGER, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ){}

  async getByUserName(username:string){
    try {
      let userdata =await this.userRepository.findOne({where:{username:username}})
      return userdata 
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

}

import { CACHE_MANAGER, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { userInterface } from './intefaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ){}

  async getByUserName(username:string){
    try {
        const cachedItem:userInterface = await this.cacheManager.get('user');
        console.log(cachedItem)
      if(cachedItem && cachedItem.username == username){
        return cachedItem
      }
      let userdata =await this.userRepository.findOne({where:{username:username}})
      if(!userdata) throw new NotFoundException("Not found")
      await this.cacheManager.set('user',{"username":userdata.username,"password":userdata.password},{ttl:30})
      return userdata 
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

}

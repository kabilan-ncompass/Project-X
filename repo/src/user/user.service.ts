import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
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

  async login(createUserDto: CreateUserDto) {
    try {
      const cachedItem:userInterface = await this.cacheManager.get('cached_item');
      console.log(cachedItem)
    if(cachedItem && cachedItem.username == createUserDto.username && cachedItem.password == createUserDto.password){
      return "Loginin success"   
    }
    else{
      let data = await this.getByEmail(createUserDto.username)
      console.log(data)
      if(data.length && createUserDto.password === data[0].password){
       await this.cacheManager.set("cached_item",{"username":createUserDto.username,"password":createUserDto.password},{ttl:30})
       return "Loginin success"      
    }  
  }
      return "No details found"
  } catch (error) {
      console.log(error.message);  
  }
  }


  async getByEmail(username:string){
    return this.userRepository.find({where:{username:username}})
  }

}

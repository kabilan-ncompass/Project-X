import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async login(createUserDto: CreateUserDto) {
    let data = await this.getByEmail(createUserDto.username)
    if(data.length && createUserDto.password === data[0].password){
       return "Loginin success"      
    }
    return "No details found"
  }

  async getByEmail(username:string){
    return this.userRepository.find({where:{username:username}})
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username,pass)
    const user = await this.usersService.getByUserName(username);
    if(user){
        if(user.password == pass){
            const {password, ...rest} = user;
            return rest;
        }

    }else{
        throw new NotFoundException('User not found')
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
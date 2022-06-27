import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RepoService } from './repo.service';


@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @UseGuards(JwtAuthGuard)
  @Get('getRepo')
  findOne(@Request() req) {
    let {username} = req.user
    let data  =  this.repoService.findByUser(username);
    if(!data){
      throw new NotFoundException("Not Found error")
    }
    return data
  }
}

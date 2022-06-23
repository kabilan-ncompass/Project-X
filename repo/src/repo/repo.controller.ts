import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepoService } from './repo.service';


@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}


  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.repoService.findByUser(username);
  }

}

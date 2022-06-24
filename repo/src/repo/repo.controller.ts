import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RepoService } from './repo.service';


@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  findOne(@Request() req) {
    let {username} = req.user
    return this.repoService.findByUser(username);
  }

}

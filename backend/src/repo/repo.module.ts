import { Module } from '@nestjs/common';
import { RepoService } from './repo.service';
import { RepoController } from './repo.controller';
import { Repo } from './entities/repo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Repo]),],
  controllers: [RepoController],
  providers: [RepoService]
})
export class RepoModule {}

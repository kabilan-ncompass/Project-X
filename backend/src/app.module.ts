import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Repo } from './repo/entities/repo.entity';
import { RepoModule } from './repo/repo.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.host,
    port: Number(process.env.mysql_port),
    username: process.env.user,
    password: process.env.password,
    database: process.env.db,
    entities: [Repo,User],
    synchronize: true,
  }),
  RepoModule,
  UserModule, CacheModule.register({
    isGlobal:true,
    store:redisStore,
    host: process.env.redis_host,
    port: process.env.redis_port,
  }), AuthModule, ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import supabaseConfig from './config/env/supabase.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './post/post.entity';
import { Like } from './like/like.entity';
import { Follow } from './follow/follow.entity';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { FollowModule } from './follow/follow.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      load: [supabaseConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('supabase.host'),
        port: configService.get<number>('supabase.port'),
        username: configService.get<string>('supabase.username'),
        password: configService.get<string>('supabase.password'),
        database: configService.get<string>('supabase.supabase'),
        entities: [User, Post, Like, Follow],
        synchronize: true,
      }),
    }),
    PostModule,
    LikeModule,
    FollowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

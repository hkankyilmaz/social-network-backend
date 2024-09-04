import { Like } from 'src/like/like.entity';
import { Post } from 'src/post/post.entity';
import { Follow } from 'src/follow/follow.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Table,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  userId: number;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('text')
  username: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column()
  role: string;

  @Column('text')
  Address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Follow, (follow) => follow.follower)
  following: Follow[];

  @OneToMany(() => Follow, (follow) => follow.following)
  followers: Follow[];
}

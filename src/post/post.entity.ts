import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Like } from 'src/like/like.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('text')
  images: string[];

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Like, (like) => like.post, { onDelete: 'CASCADE' })
  likes: Like[];
}

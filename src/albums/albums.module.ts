import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from '../entity/albums.entity';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Albums,User])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
  exports: [AlbumsService]
})
export class AlbumsModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsController } from './albums/albums.controller';
import { AlbumsService } from './albums/albums.service';
import { AlbumsModule } from './albums/albums.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Albums } from './entity/albums.entity';
import { config } from './orm';
import { UserModule } from './user/user.module';

@Module({
  imports: [AlbumsModule,TypeOrmModule.forRoot(config), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
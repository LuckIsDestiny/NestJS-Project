import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserinfoModule } from './userinfo/userinfo.module';
import { Userinfo } from './userinfo/entities/userinfo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass@word1',
      database: 'test',
      entities: [Userinfo],
      synchronize: true,
    }),
    UserinfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

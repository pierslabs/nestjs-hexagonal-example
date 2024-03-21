import { Module } from '@nestjs/common';
import { PostgreDBConf } from './config/Typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/presentation/users.module';

@Module({
  imports: [ConfigModule.forRoot(), PostgreDBConf(), UsersModule.forRoot()],
})
export class AppModule {}

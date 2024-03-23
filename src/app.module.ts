import { Module } from '@nestjs/common';
import { PostgreDBConf } from './config/Typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/presentation/users.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PostgreDBConf(),
    DomainModule,
    UsersModule.forRoot(),
  ],
})
export class AppModule {}

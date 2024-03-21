import { Module } from '@nestjs/common';
import { PostgreDBConf } from './config/Typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PostgreDBConf()],
})
export class AppModule {}

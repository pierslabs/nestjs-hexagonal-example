import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class DomainModule {}

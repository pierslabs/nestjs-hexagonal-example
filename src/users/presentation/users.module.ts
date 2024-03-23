import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserUseCasePresenterPort } from '../presenters';
import { UserUseCasePresenterAdapter } from '../infraestructure/presenters/adapters/user-use-case.presenter.adapter';
import {
  CreateUserUseCase,
  DefaultCreateUserUseCase,
} from '../use-cases/create-user';
import { UserEntityRepositoryPort } from 'src/domain/entities/user/user-entity.repository.port';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [
    {
      provide: UserEntityRepositoryPort,
      useExisting: getRepositoryToken(UserEntity),
    },
  ],
})
export class UsersModule {
  static forRoot() {
    return {
      module: UsersModule,
      providers: [
        {
          provide: UserUseCasePresenterPort,
          useExisting: UserUseCasePresenterAdapter,
        },
        {
          provide: CreateUserUseCase,
          useFactory: (repository: UserEntityRepositoryPort) =>
            new DefaultCreateUserUseCase(repository),
          inject: [UserEntityRepositoryPort],
        },
        {
          provide: UserUseCasePresenterAdapter,
          useFactory: (createUserUseCase: CreateUserUseCase) => {
            return new UserUseCasePresenterAdapter({
              createUserUseCase,
            });
          },
          inject: [CreateUserUseCase],
        },
      ],
    };
  }
}

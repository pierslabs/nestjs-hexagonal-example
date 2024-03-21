import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserUseCasePresenterPort } from '../presenters';
import { UserUseCasePresenterAdapter } from '../infraestructure/presenters/adapters/user-use-case.presenter.adapter';
import {
  CreateUserUseCase,
  DefaultCreateUserUseCase,
} from '../use-cases/create-user';

@Module({
  controllers: [UsersController],
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
          useFactory: () => new DefaultCreateUserUseCase(),
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

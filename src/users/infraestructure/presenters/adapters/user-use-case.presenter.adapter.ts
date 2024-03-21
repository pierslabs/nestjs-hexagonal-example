import {
  CreateUserUseCaseRequestPresenterModel,
  CreateUserUseCaseResponsePresenterModel,
  UserUseCasePresenterPort,
} from 'src/users/presenters';
import { CreateUserUseCase } from 'src/users/use-cases/create-user';

export interface UserUseCasePresenterAdapterOptions {
  createUserUseCase: CreateUserUseCase;
}

export class UserUseCasePresenterAdapter implements UserUseCasePresenterPort {
  private readonly createUserUseCase: CreateUserUseCase;

  constructor(private readonly options: UserUseCasePresenterAdapterOptions) {
    this.createUserUseCase = this.options.createUserUseCase;
  }

  async createUser(
    request: CreateUserUseCaseRequestPresenterModel,
  ): Promise<CreateUserUseCaseResponsePresenterModel> {
    return await this.createUserUseCase.execute(request);
  }
}

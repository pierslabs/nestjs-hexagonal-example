import {
  CreateUserUseCaseRequest,
  CreateUserUseCaseResponse,
} from '../use-cases/create-user';

export type CreateUserUseCaseRequestPresenterModel = CreateUserUseCaseRequest;

export type CreateUserUseCaseResponsePresenterModel = CreateUserUseCaseResponse;

export interface UserUseCasePresenterPort {
  createUser(
    request: CreateUserUseCaseRequestPresenterModel,
  ): Promise<CreateUserUseCaseResponsePresenterModel>;
}

export const UserUseCasePresenterPort = Symbol('UserUseCasePresenterPort');

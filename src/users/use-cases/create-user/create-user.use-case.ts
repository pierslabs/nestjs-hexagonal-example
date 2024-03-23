import { UseCase } from 'src/common/use-case';
import { CreateUserRequiredRequestError } from '../errors';
import { Logger } from '@nestjs/common';
import { UserEntityRepositoryPort } from 'src/domain/entities/user/user-entity.repository.port';

export type CreateUserRepositoryPort = Pick<UserEntityRepositoryPort, 'save'>;

export const CreateUserRepositoryPort = Symbol('CreateUserRepositoryPort');

export interface CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserUseCaseResponse {
  id: string;
  name: string;
  email: string;
}

export abstract class CreateUserUseCase
  implements UseCase<CreateUserUseCaseRequest, CreateUserUseCaseResponse>
{
  abstract execute(
    request: CreateUserUseCaseRequest,
  ): Promise<CreateUserUseCaseResponse>;
}

export class DefaultCreateUserUseCase implements CreateUserUseCase {
  logger: Logger = new Logger('DefaultCreateUserUseCase');

  constructor(private readonly repository: CreateUserRepositoryPort) {}

  async execute(
    request: CreateUserUseCaseRequest,
  ): Promise<CreateUserUseCaseResponse> {
    try {
      const user = await this.repository.save(request);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      this.logger.error(error);
      throw new CreateUserRequiredRequestError(error);
    }
  }
}

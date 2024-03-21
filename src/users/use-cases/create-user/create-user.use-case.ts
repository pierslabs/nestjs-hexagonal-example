import { UseCase } from 'src/common/use-case';
import { CreateUserRequiredRequestError } from '../errors';
import { Logger } from '@nestjs/common';

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

  execute(
    request: CreateUserUseCaseRequest,
  ): Promise<CreateUserUseCaseResponse> {
    try {
      return Promise.resolve({
        id: '1',
        name: request.name,
        email: request.email,
      });
    } catch (error) {
      this.logger.error(error);
      throw new CreateUserRequiredRequestError(error);
    }
  }
}

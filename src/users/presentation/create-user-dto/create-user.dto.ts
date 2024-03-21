import {
  CreateUserUseCaseRequest,
  CreateUserUseCaseResponse,
} from 'src/users/use-cases/create-user';

export class CreateUserRequestDto implements CreateUserUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserResponseDto implements CreateUserUseCaseResponse {
  id: string;
  name: string;
  email: string;
}

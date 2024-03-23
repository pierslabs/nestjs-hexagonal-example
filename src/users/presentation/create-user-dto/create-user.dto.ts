import { IsString } from 'class-validator';
import {
  CreateUserUseCaseRequest,
  CreateUserUseCaseResponse,
} from 'src/users/use-cases/create-user';

export class CreateUserRequestDto implements CreateUserUseCaseRequest {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}

export class CreateUserResponseDto implements CreateUserUseCaseResponse {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  email: string;
}

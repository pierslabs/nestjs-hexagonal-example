import { CreateUserErrorType } from './create-user-error-types/create-user.error.enum';

export class CreateUserRequiredRequestError extends Error {
  constructor(error: Error) {
    super(`[${CreateUserErrorType.REQUIRED_REQUEST}]: ${error.message}`);
  }
}

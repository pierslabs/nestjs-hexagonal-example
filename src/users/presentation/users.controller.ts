import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserUseCasePresenterPort } from '../presenters';
import { CreateUserUseCaseRequest } from '../use-cases/create-user';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UserUseCasePresenterPort)
    private readonly adapter: UserUseCasePresenterPort,
  ) {}

  @Post()
  create(@Body() user: CreateUserUseCaseRequest) {
    return this.adapter.createUser(user);
  }
}

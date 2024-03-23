import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserUseCasePresenterPort } from '../presenters';
import { UserUseCasePresenterAdapter } from '../infraestructure/presenters/adapters/user-use-case.presenter.adapter';
import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from './create-user-dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UserUseCasePresenterPort)
    private readonly adapter: UserUseCasePresenterAdapter,
  ) {}

  @Post()
  create(@Body() user: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    console.log('user', { user });
    return this.adapter.createUser(user);
  }
}

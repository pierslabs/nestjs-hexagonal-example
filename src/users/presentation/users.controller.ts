import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  create() {
    throw new Error('Method not implemented.');
  }
}

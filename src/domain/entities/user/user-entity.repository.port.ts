import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export interface CreateUserUseRepositoryResponse {
  id: string;
  name: string;
  email: string;
}

export interface CreateUserRepositoryRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserEntityRepositoryPort extends Repository<UserEntity> {}

export const UserEntityRepositoryPort = Symbol('UserEntityRepositoryPort');

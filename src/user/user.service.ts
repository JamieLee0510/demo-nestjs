import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

/**
 * 用戶有關的服務
 */

@Injectable()
export class UserService {
  private users: User[] = [];

  findOne(username: string): User {
    return this.users.find((user) => user.username === username);
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }
}

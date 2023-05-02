/**
 * 導入用戶模塊和todo模塊
 */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UserModule, TodoModule],
})
export class AppModule {}

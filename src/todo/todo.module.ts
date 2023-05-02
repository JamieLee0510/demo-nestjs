/**
 * 將代辦事項服務和控制器導入
 */
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}

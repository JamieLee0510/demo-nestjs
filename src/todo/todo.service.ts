/**
 * 代辦事項的處理邏輯
 */
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      ...createTodoDto,
      id: Date.now(),
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.todos.find((t) => t.id === updateTodoDto.id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, updateTodoDto);
    return todo;
  }

  remove(id: number): boolean {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return false;
    }
    this.todos.splice(todoIndex, 1);
    return true;
  }
}

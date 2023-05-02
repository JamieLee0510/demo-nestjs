/**
 * 代辦事項的更新
 */
export class UpdateTodoDto {
  id: number;
  title?: string;
  description?: string;
  completed?: boolean;
}

import type { Todo } from './types.js';
import { TodoStatus } from './types.js';
export declare class TodoList {
    private todos;
    private nextId;
    addTodo(task: string): Todo;
    removeTodo(id: number): boolean;
    toggleTodo(id: number): boolean;
    getAllTodos(): Todo[];
    getTodosByStatus(status: TodoStatus): Todo[];
    clearAllTodos(): void;
    getTodoCount(): number;
    getCompletedCount(): number;
    findTodoById(id: number): Todo | undefined;
    searchTodos(query: string): Todo[];
}
//# sourceMappingURL=todoList.d.ts.map
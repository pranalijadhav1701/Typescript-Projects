import type { Todo } from './types.js';
import { TodoAction, TodoStatus } from './types.js';

export class TodoList {
  private todos: Todo[] = [];
  private nextId: number = 1;

  // Add a new todo
  addTodo(task: string): Todo {
    if (!task.trim()) {
      throw new Error('Task cannot be empty');
    }

    const newTodo: Todo = {
      id: this.nextId++,
      task: task.trim(),
      done: false,
      createdAt: new Date()
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  // Remove a todo by ID
  removeTodo(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos.length < initialLength;
  }

  // Toggle todo completion status
  toggleTodo(id: number): boolean {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
      return true;
    }
    return false;
  }

  // Get all todos
  getAllTodos(): Todo[] {
    return [...this.todos];
  }

  // Get todos by status
  getTodosByStatus(status: TodoStatus): Todo[] {
    return this.todos.filter(todo => 
      status === TodoStatus.COMPLETED ? todo.done : !todo.done
    );
  }

  // Clear all todos
  clearAllTodos(): void {
    this.todos = [];
    this.nextId = 1;
  }

  // Get todo count
  getTodoCount(): number {
    return this.todos.length;
  }

  // Get completed todo count
  getCompletedCount(): number {
    return this.todos.filter(todo => todo.done).length;
  }

  // Find todo by ID
  findTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  // Search todos by task content
  searchTodos(query: string): Todo[] {
    const lowercaseQuery = query.toLowerCase();
    return this.todos.filter(todo => 
      todo.task.toLowerCase().includes(lowercaseQuery)
    );
  }
}

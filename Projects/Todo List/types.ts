// Todo interface definition
export interface Todo {
  id: number;
  task: string;
  done: boolean;
  createdAt: Date;
}

// Enum for different actions
export enum TodoAction {
  ADD = 'add',
  REMOVE = 'remove',
  LIST = 'list',
  TOGGLE = 'toggle',
  CLEAR = 'clear',
  HELP = 'help',
  EXIT = 'exit'
}

// Enum for todo status
export enum TodoStatus {
  PENDING = 'pending',
  COMPLETED = 'completed'
}

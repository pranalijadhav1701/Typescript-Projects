import * as readline from 'readline';
import { TodoList } from './todoList.js';
import type { TodoStatus } from './types.js';
import { TodoAction } from './types.js';

export class TodoCLI {
  private todoList: TodoList;
  private rl: readline.Interface;

  constructor() {
    this.todoList = new TodoList();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  // Start the CLI application
  async start(): Promise<void> {
    console.log('🎯 Welcome to TypeScript Todo List CLI!');
    console.log('Type "help" to see available commands.\n');
    
    await this.showMenu();
    this.rl.close();
  }

  // Display the main menu
  private async showMenu(): Promise<void> {
    while (true) {
      try {
        const input = await this.prompt('Enter command: ');
        const [command, ...args] = input.trim().split(' ');

        switch (command?.toLowerCase()) {
          case TodoAction.ADD:
            await this.handleAdd(args.join(' '));
            break;
          case TodoAction.REMOVE:
            await this.handleRemove(args[0]);
            break;
          case TodoAction.LIST:
            await this.handleList();
            break;
          case TodoAction.TOGGLE:
            await this.handleToggle(args[0]);
            break;
          case TodoAction.CLEAR:
            await this.handleClear();
            break;
          case TodoAction.HELP:
            this.showHelp();
            break;
          case TodoAction.EXIT:
            console.log('👋 Goodbye!');
            return;
          default:
            console.log('❌ Unknown command. Type "help" for available commands.');
        }
      } catch (error) {
        console.log(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  }

  // Handle add command
  private async handleAdd(task: string): Promise<void> {
    if (!task) {
      const input = await this.prompt('Enter task: ');
      task = input;
    }

    try {
      const todo = this.todoList.addTodo(task);
      console.log(`✅ Added: "${todo.task}" (ID: ${todo.id})`);
    } catch (error) {
      console.log(`❌ ${error instanceof Error ? error.message : 'Failed to add todo'}`);
    }
  }

  // Handle remove command
  private async handleRemove(idStr?: string): Promise<void> {
    if (!idStr) {
      const input = await this.prompt('Enter todo ID to remove: ');
      idStr = input;
    }

    const id = parseInt(idStr);
    if (isNaN(id)) {
      console.log('❌ Please enter a valid ID number');
      return;
    }

    const success = this.todoList.removeTodo(id);
    if (success) {
      console.log(`✅ Removed todo with ID: ${id}`);
    } else {
      console.log(`❌ Todo with ID ${id} not found`);
    }
  }

  // Handle list command
  private async handleList(): Promise<void> {
    const todos = this.todoList.getAllTodos();
    
    if (todos.length === 0) {
      console.log('📝 No todos found. Add some tasks!');
      return;
    }

    console.log('\n📋 Your Todos:');
    console.log('─'.repeat(50));
    
    todos.forEach(todo => {
      const status = todo.done ? '✅' : '⏳';
      const date = todo.createdAt.toLocaleDateString();
      console.log(`${status} [${todo.id}] ${todo.task} (Created: ${date})`);
    });

    const completed = this.todoList.getCompletedCount();
    const total = this.todoList.getTodoCount();
    console.log('─'.repeat(50));
    console.log(`📊 Progress: ${completed}/${total} completed`);
  }

  // Handle toggle command
  private async handleToggle(idStr?: string): Promise<void> {
    if (!idStr) {
      const input = await this.prompt('Enter todo ID to toggle: ');
      idStr = input;
    }

    const id = parseInt(idStr);
    if (isNaN(id)) {
      console.log('❌ Please enter a valid ID number');
      return;
    }

    const todo = this.todoList.findTodoById(id);
    if (!todo) {
      console.log(`❌ Todo with ID ${id} not found`);
      return;
    }

    const success = this.todoList.toggleTodo(id);
    if (success) {
      const status = todo.done ? 'completed' : 'pending';
      console.log(`✅ Todo "${todo.task}" marked as ${status}`);
    }
  }

  // Handle clear command
  private async handleClear(): Promise<void> {
    const confirm = await this.prompt('Are you sure you want to clear all todos? (y/N): ');
    if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
      this.todoList.clearAllTodos();
      console.log('🗑️ All todos cleared!');
    } else {
      console.log('❌ Clear operation cancelled');
    }
  }

  // Show help information
  private showHelp(): void {
    console.log('\n📖 Available Commands:');
    console.log('─'.repeat(40));
    console.log('add [task]     - Add a new todo');
    console.log('remove [id]   - Remove a todo by ID');
    console.log('list          - Show all todos');
    console.log('toggle [id]   - Toggle todo completion');
    console.log('clear         - Clear all todos');
    console.log('help          - Show this help');
    console.log('exit          - Exit the application');
    console.log('─'.repeat(40));
  }

  // Prompt for user input
  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }
}

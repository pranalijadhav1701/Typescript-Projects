import { TodoStatus } from './types.js';
export class TodoList {
    todos = [];
    nextId = 1;
    // Add a new todo
    addTodo(task) {
        if (!task.trim()) {
            throw new Error('Task cannot be empty');
        }
        const newTodo = {
            id: this.nextId++,
            task: task.trim(),
            done: false,
            createdAt: new Date()
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    // Remove a todo by ID
    removeTodo(id) {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this.todos.length < initialLength;
    }
    // Toggle todo completion status
    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
            return true;
        }
        return false;
    }
    // Get all todos
    getAllTodos() {
        return [...this.todos];
    }
    // Get todos by status
    getTodosByStatus(status) {
        return this.todos.filter(todo => status === TodoStatus.COMPLETED ? todo.done : !todo.done);
    }
    // Clear all todos
    clearAllTodos() {
        this.todos = [];
        this.nextId = 1;
    }
    // Get todo count
    getTodoCount() {
        return this.todos.length;
    }
    // Get completed todo count
    getCompletedCount() {
        return this.todos.filter(todo => todo.done).length;
    }
    // Find todo by ID
    findTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }
    // Search todos by task content
    searchTodos(query) {
        const lowercaseQuery = query.toLowerCase();
        return this.todos.filter(todo => todo.task.toLowerCase().includes(lowercaseQuery));
    }
}
//# sourceMappingURL=todoList.js.map
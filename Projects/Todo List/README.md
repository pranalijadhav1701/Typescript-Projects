# 📝 TypeScript Todo List CLI

A console-based Todo List application built with TypeScript, demonstrating core TypeScript concepts including interfaces, arrays, type annotations, and enums.

## 🎯 Features

- ✅ Add new todos
- ❌ Remove todos by ID
- 📋 List all todos with status
- 🔄 Toggle todo completion status
- 🗑️ Clear all todos
- 🔍 Search functionality
- 📊 Progress tracking
- 🎨 Beautiful console interface with emojis

## 🧠 TypeScript Concepts Demonstrated

### 1. **Interfaces**
```typescript
interface Todo {
  id: number;
  task: string;
  done: boolean;
  createdAt: Date;
}
```

### 2. **Enums**
```typescript
enum TodoAction {
  ADD = 'add',
  REMOVE = 'remove',
  LIST = 'list',
  // ... more actions
}

enum TodoStatus {
  PENDING = 'pending',
  COMPLETED = 'completed'
}
```

### 3. **Type Annotations**
- Function parameters and return types
- Class properties and methods
- Array types with generics

### 4. **Arrays and Array Methods**
- Filter, map, find operations
- Type-safe array manipulation

## 🛠️ Prerequisites

- **Node.js** (version 16.0.0 or higher)
- **npm** (comes with Node.js)
- **TypeScript** (will be installed as dev dependency)

## 📦 Installation & Setup

### Step 1: Navigate to the Project Directory
```bash
cd "Projects/Todo List"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Build the Project
```bash
npm run build
```

### Step 4: Run the Application
```bash
npm start
```

## 🚀 Quick Start Guide

### Option 1: Automated Setup (Recommended)
```bash
cd "Projects/Todo List"
./setup.sh
npm start
```

### Option 2: Manual Setup
```bash
cd "Projects/Todo List"
npm install
npm run build
npm start
```

### Option 3: Try the Demo
```bash
cd "Projects/Todo List"
./demo.sh
```

### Using the CLI

Once the application starts, you'll see the welcome message and can use these commands:

```
🎯 Welcome to TypeScript Todo List CLI!
Type "help" to see available commands.

Enter command: help
```

## 📖 Available Commands

| Command | Description | Example |
|---------|-------------|---------|
| `add [task]` | Add a new todo | `add Buy groceries` |
| `remove [id]` | Remove a todo by ID | `remove 1` |
| `list` | Show all todos | `list` |
| `toggle [id]` | Toggle todo completion | `toggle 1` |
| `clear` | Clear all todos | `clear` |
| `help` | Show help information | `help` |
| `exit` | Exit the application | `exit` |

## 💡 Example Usage

```
Enter command: add Learn TypeScript
✅ Added: "Learn TypeScript" (ID: 1)

Enter command: add Build a todo app
✅ Added: "Build a todo app" (ID: 2)

Enter command: list
📋 Your Todos:
──────────────────────────────────────────────────
⏳ [1] Learn TypeScript (Created: 12/20/2024)
⏳ [2] Build a todo app (Created: 12/20/2024)
──────────────────────────────────────────────────
📊 Progress: 0/2 completed

Enter command: toggle 1
✅ Todo "Learn TypeScript" marked as completed

Enter command: list
📋 Your Todos:
──────────────────────────────────────────────────
✅ [1] Learn TypeScript (Created: 12/20/2024)
⏳ [2] Build a todo app (Created: 12/20/2024)
──────────────────────────────────────────────────
📊 Progress: 1/2 completed
```

## 🏗️ Project Structure

```
Todo List/
├── types.ts          # TypeScript interfaces and enums
├── todoList.ts       # TodoList class with business logic
├── cli.ts            # CLI interface and user interaction
├── index.ts          # Main application entry point
├── package.json      # Project configuration and dependencies
├── tsconfig.json     # TypeScript compiler configuration
├── setup.sh          # Automated setup script
├── demo.sh           # Demo script with example usage
├── dist/             # Compiled JavaScript output
│   ├── *.js          # Compiled JavaScript files
│   ├── *.d.ts        # TypeScript declaration files
│   └── *.js.map      # Source maps for debugging
├── node_modules/     # Dependencies (created after npm install)
└── README.md         # This file
```

## 🔧 TypeScript Configuration

The project uses a strict TypeScript configuration (`tsconfig.json`) that includes:

- **Strict mode** enabled for better type safety
- **ES2022** target with **ESNext** modules
- **Source maps** and **declaration files** for debugging
- **Unused variable detection** and **implicit any** prevention

## 🎓 Learning Objectives

By working with this project, you'll learn:

1. **Interface Design**: How to create reusable type definitions
2. **Enum Usage**: Organizing constants and improving code readability
3. **Type Safety**: Leveraging TypeScript's type system for better code quality
4. **Class Implementation**: Object-oriented programming with TypeScript
5. **Error Handling**: Proper error management in TypeScript applications
6. **CLI Development**: Building interactive console applications

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Make sure you've run `npm install`
   - Ensure you're in the correct directory

2. **TypeScript compilation errors**
   - Check that all files have proper imports/exports
   - Verify `tsconfig.json` configuration

3. **Node.js version issues**
   - Ensure you're using Node.js 16.0.0 or higher
   - Check with `node --version`

### Getting Help

If you encounter issues:

1. Check the console output for specific error messages
2. Verify all dependencies are installed correctly
3. Ensure TypeScript compilation succeeds before running

## 🎉 Next Steps

Once you're comfortable with this basic implementation, try extending it with:

- **Data persistence** (save todos to a file)
- **Categories** for organizing todos
- **Due dates** and reminders
- **Priority levels** for tasks
- **Export/import** functionality
- **Color themes** for the CLI

## 📄 License

MIT License - feel free to use this project for learning and personal projects!

---

Happy coding! 🚀


Easy Setup Options:
Option 1: Automated Setup (Recommended)
cd "Projects/Todo List"
./setup.sh
npm start


Option 2: Manual Setup
cd "Projects/Todo List"
npm install
npm run build
npm start

Option 3: Try the Demo
cd "Projects/Todo List"
./demo.sh
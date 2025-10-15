# 🧮 TypeScript Calculator

A comprehensive calculator application built with TypeScript that demonstrates **union types**, **function types**, and **error handling**. This project showcases modern TypeScript concepts through a practical, real-world application.

## 📋 Features

- ✅ **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- ✅ **Union Types**: Operation types, result types, and error types
- ✅ **Function Types**: Type-safe operation functions
- ✅ **Error Handling**: Comprehensive error handling with custom error types
- ✅ **CLI Interface**: Interactive command-line calculator
- ✅ **Web Interface**: Beautiful, responsive web calculator
- ✅ **History Tracking**: Calculation history with timestamps
- ✅ **Input Validation**: Robust input validation and edge case handling
- ✅ **Configuration**: Customizable precision and settings

## 🎯 Learning Objectives

This project demonstrates the following TypeScript concepts:

### 1. Union Types
```typescript
type Operation = '+' | '-' | '*' | '/';
type CalculatorResult = { success: true; value: number } | { success: false; error: CalculatorError };
```

### 2. Function Types
```typescript
type CalculatorOperation = (a: number, b: number) => CalculatorResult;
```

### 3. Error Handling
```typescript
type CalculatorError = 'DIVISION_BY_ZERO' | 'INVALID_OPERATION' | 'INVALID_INPUT' | 'OVERFLOW' | 'UNDERFLOW';
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the Calculator directory:**
   ```bash
   cd Projects/Calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

## 🖥️ Usage

### CLI Calculator

Start the interactive command-line calculator:

```bash
npm run dev
# or
npm start
```

**CLI Commands:**
- Enter calculations: `5 + 3`
- View history: `history`
- Clear history: `clear`
- Show config: `config`
- Get help: `help`
- Exit: `exit` or `quit`

**Example CLI Session:**
```
Calculator> 10 + 5
✅ 10 + 5 = 15
Calculator> 20 / 4
✅ 20 / 4 = 5
Calculator> 10 / 0
❌ Error: Division by zero is not allowed
Calculator> history
📝 Calculation History:
=======================
1. [10:30:15] 10 / 0 = Error: DIVISION_BY_ZERO
2. [10:30:10] 20 / 4 = 5
3. [10:30:05] 10 + 5 = 15
Calculator> exit
Goodbye! 👋
```

### Web Calculator

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the web server:**
   ```bash
   npm run serve
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000/src/index.html
   ```

**Web Interface Features:**
- 🎨 Beautiful, responsive design
- ⌨️ Keyboard support
- 📝 Calculation history
- 🔄 Real-time error handling
- 📱 Mobile-friendly interface

### Programmatic Usage

Use the calculator in your own TypeScript projects:

```typescript
import { Calculator, calculate, Operation } from './src/index';

// Simple calculation
const result = calculate('+', 5, 3);
if (result.success) {
    console.log(result.value); // 8
} else {
    console.log(result.error);
}

// Advanced usage with configuration
const calculator = new Calculator({
    precision: 5,
    maxHistory: 50,
    allowNegativeResults: true
});

const result2 = calculator.calculate('*', 2.5, 4.2);
console.log(result2);
```

## 📁 Project Structure

```
Calculator/
├── src/
│   ├── types.ts          # Union types and interfaces
│   ├── calculator.ts     # Main calculator class
│   ├── cli.ts           # CLI interface
│   ├── index.ts         # Main entry point
│   ├── index.html       # Web interface
│   └── calculator-web.js # Web calculator logic
├── dist/                # Compiled JavaScript (after build)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🔧 Configuration

The calculator supports various configuration options:

```typescript
interface CalculatorConfig {
    precision: number;           // Decimal places (default: 10)
    maxHistory: number;         // Max history entries (default: 100)
    allowNegativeResults: boolean; // Allow negative results (default: true)
}
```

## 🧪 Error Handling

The calculator handles various error scenarios:

- **Division by Zero**: `DIVISION_BY_ZERO`
- **Invalid Operations**: `INVALID_OPERATION`
- **Invalid Input**: `INVALID_INPUT`
- **Overflow**: `OVERFLOW`
- **Underflow**: `UNDERFLOW`

## 📚 TypeScript Concepts Demonstrated

### 1. Union Types
Union types allow a variable to be one of several types:

```typescript
type Operation = '+' | '-' | '*' | '/';
type CalculatorError = 'DIVISION_BY_ZERO' | 'INVALID_OPERATION' | 'INVALID_INPUT';
```

### 2. Function Types
Function types define the signature of functions:

```typescript
type CalculatorOperation = (a: number, b: number) => CalculatorResult;
```

### 3. Discriminated Unions
Using union types with a common property for type safety:

```typescript
type CalculatorResult = 
    | { success: true; value: number }
    | { success: false; error: CalculatorError };
```

### 4. Error Handling Patterns
Comprehensive error handling with custom error types and proper error propagation.

## 🎨 Web Interface Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Keyboard Support**: Full keyboard navigation and input
- **Real-time Updates**: Instant calculation and error feedback
- **History Panel**: View and manage calculation history
- **Error Handling**: User-friendly error messages

## 🚀 Development

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled CLI calculator
- `npm run dev` - Run CLI calculator with ts-node
- `npm run watch` - Watch mode for development
- `npm run serve` - Start web server for HTML interface

### Development Workflow

1. **Make changes** to TypeScript files in `src/`
2. **Build** with `npm run build`
3. **Test** CLI with `npm run dev`
4. **Test** web interface with `npm run serve`

## 🤝 Contributing

This is a tutorial project, but feel free to:
- Add new operations (%, ^, √)
- Implement memory functions (M+, M-, MR, MC)
- Add scientific calculator features
- Improve the UI/UX
- Add unit tests

## 📖 Learning Resources

- [TypeScript Handbook - Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [TypeScript Handbook - Function Types](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [TypeScript Handbook - Error Handling](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## 📄 License

MIT License - Feel free to use this project for learning and educational purposes.

---

**Happy Calculating! 🧮✨**



🖥️ How to Use:
Quick Setup
   cd Projects/Calculator
   ./setup.sh

CLI Calculator
   npm run dev

Web Calculator
   npm run serve
   # Open: http://localhost:3000/src/index.html
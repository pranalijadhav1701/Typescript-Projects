# 🎯 Number Guessing Game

A fun and interactive number guessing game built with TypeScript! Test your guessing skills across three difficulty levels while learning TypeScript concepts like control flow, types, and user input handling.

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Game Rules](#-game-rules)
- [TypeScript Concepts Demonstrated](#-typescript-concepts-demonstrated)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Contributing](#-contributing)

## ✨ Features

- 🎮 **Three Difficulty Levels**: Easy, Medium, and Hard
- 🧠 **Smart Hints**: Get feedback on whether your guess is too high or too low
- 📊 **Game Statistics**: Track your performance across multiple games
- 🔄 **Multiple Rounds**: Play as many games as you want
- 🎨 **Clean CLI Interface**: Beautiful command-line interface with emojis
- 📈 **Performance Feedback**: Get congratulated based on your performance
- ⚙️ **Configurable**: Easy to modify difficulty settings and game rules

## 🔧 Prerequisites

Before running this game, make sure you have:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **TypeScript** (will be installed automatically)

## 🚀 Installation

### Quick Setup

1. Navigate to the project directory:
   ```bash
   cd Projects/Number-Guessing-Game
   ```

2. Run the setup script:
   ```bash
   ./setup.sh
   ```

### Manual Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## 🎮 Usage

### Running the Game

```bash
# Run the compiled game
npm start

# Or run in development mode
npm run dev

# Or run the compiled version directly
node dist/index.js
```

### Command Line Options

```bash
# Show help
node dist/index.js --help

# Show version
node dist/index.js --version
```

### Game Flow

1. **Welcome Screen**: The game greets you and explains the rules
2. **Difficulty Selection**: Choose from Easy, Medium, or Hard
3. **Gameplay**: Make guesses and receive hints
4. **Results**: See your performance and statistics
5. **Play Again**: Option to play another round or change difficulty

## 🎯 Game Rules

### Difficulty Levels

| Difficulty | Number Range | Max Attempts | Description |
|------------|--------------|--------------|-------------|
| **Easy**   | 1-10         | 5            | Perfect for beginners |
| **Medium** | 1-50         | 7            | Balanced challenge |
| **Hard**   | 1-100        | 10           | For the brave! |

### How to Play

1. The computer generates a random number within the selected range
2. You have a limited number of attempts to guess the number
3. After each guess, you'll receive a hint:
   - 📈 "Too low! Try a higher number."
   - 📉 "Too high! Try a lower number."
   - 🎉 "Correct! You guessed it!"
4. Win by guessing the number before running out of attempts
5. Track your statistics across multiple games

### Winning Conditions

- ✅ **Win**: Guess the correct number within the attempt limit
- ❌ **Lose**: Use all attempts without guessing correctly

## 🧠 TypeScript Concepts Demonstrated

This project showcases several important TypeScript concepts:

### 1. **Type Definitions**
- Custom interfaces for game state and configuration
- Union types for difficulty levels
- Strict typing throughout the application

### 2. **Control Flow**
- Conditional statements for game logic
- Loops for game rounds and input validation
- Error handling with try-catch blocks

### 3. **User Input Handling**
- Synchronous input using `readline-sync`
- Input validation and error messages
- Type-safe input processing

### 4. **Object-Oriented Programming**
- Class-based architecture
- Encapsulation of game state
- Method organization and separation of concerns

### 5. **Error Handling**
- Graceful error handling for invalid inputs
- Process termination handling
- User-friendly error messages

## 📁 Project Structure

```
Number-Guessing-Game/
├── src/
│   ├── types.ts      # Type definitions and interfaces
│   ├── game.ts       # Core game logic and state management
│   ├── cli.ts        # Command-line interface and user interaction
│   └── index.ts      # Main entry point
├── dist/             # Compiled JavaScript output
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── setup.sh          # Automated setup script
└── README.md         # This file
```

### File Descriptions

- **`types.ts`**: Defines all TypeScript interfaces, types, and constants
- **`game.ts`**: Contains the `NumberGuessingGame` class with core game logic
- **`cli.ts`**: Handles user interaction, input/output, and game flow
- **`index.ts`**: Main entry point that initializes and starts the game

## 🛠️ Development

### Available Scripts

```bash
# Build the project
npm run build

# Run in development mode (with ts-node)
npm run dev

# Watch for changes and rebuild automatically
npm run watch

# Run the compiled game
npm start
```

### Development Workflow

1. Make changes to TypeScript files in `src/`
2. Run `npm run watch` to automatically rebuild on changes
3. Test your changes with `npm run dev`
4. Build the final version with `npm run build`

### Adding New Features

1. **New Difficulty Level**: Add to `DIFFICULTY_CONFIGS` in `types.ts`
2. **New Game Mode**: Extend the `GameConfig` interface
3. **Enhanced Statistics**: Modify the `GameStats` interface
4. **UI Improvements**: Update the `GameCLI` class

## 🎨 Customization

### Modifying Difficulty Settings

Edit `src/types.ts` to change difficulty configurations:

```typescript
export const DIFFICULTY_CONFIGS: Record<Difficulty, GameConfig> = {
  easy: {
    minNumber: 1,
    maxNumber: 10,
    maxAttempts: 5,
    difficulty: 'easy'
  },
  // Add your custom difficulty here
};
```

### Adding New Features

The modular structure makes it easy to extend:

- **New Game Modes**: Extend the `GameConfig` interface
- **Enhanced Statistics**: Modify the `GameStats` interface
- **Different Input Methods**: Create new input handlers
- **Web Interface**: Add a web-based UI alongside the CLI

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Bug Reports**: Found a bug? Please report it!
2. **Feature Requests**: Have an idea? Let us know!
3. **Code Improvements**: Submit pull requests for enhancements
4. **Documentation**: Help improve this README or add comments

### Development Guidelines

- Follow TypeScript best practices
- Add proper type annotations
- Include error handling
- Write clear, readable code
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the package.json file for details.

## 🎉 Acknowledgments

- Built as part of a TypeScript learning tutorial
- Demonstrates practical TypeScript concepts
- Designed for educational purposes

---

**Happy Guessing! 🎯**

*Built with ❤️ and TypeScript*


How to Use:
Quick Start:

   cd Projects/Number-Guessing-Game
   ./setup.sh
   npm start

Development:

   npm run dev    # Run in development mode
   npm run watch  # Watch for changes

Help:
   node dist/index.js --help
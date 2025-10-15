#!/usr/bin/env node

/**
 * CLI Calculator Interface
 * 
 * This file demonstrates:
 * - Command line argument parsing
 * - Interactive calculator usage
 * - Error handling in CLI context
 * - History display functionality
 */

import * as readline from 'readline';
import { Calculator } from './calculator';
import { Operation } from './types';

class CLICalculator {
  private calculator: Calculator;
  private rl: readline.Interface;

  constructor() {
    this.calculator = new Calculator();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * Start the CLI calculator
   */
  public async start(): Promise<void> {
    console.log('🧮 TypeScript Calculator');
    console.log('=======================');
    console.log('Supported operations: +, -, *, /');
    console.log('Commands:');
    console.log('  - Type "history" to see calculation history');
    console.log('  - Type "clear" to clear history');
    console.log('  - Type "config" to see current configuration');
    console.log('  - Type "help" to see this help message');
    console.log('  - Type "exit" or "quit" to exit');
    console.log('  - Type calculations like: 5 + 3');
    console.log('');

    await this.runInteractiveMode();
  }

  /**
   * Run interactive calculator mode
   */
  private async runInteractiveMode(): Promise<void> {
    while (true) {
      try {
        const input = await this.prompt('Calculator> ');
        
        if (this.shouldExit(input)) {
          break;
        }

        await this.processInput(input.trim());
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    this.rl.close();
    console.log('Goodbye! 👋');
  }

  /**
   * Process user input
   */
  private async processInput(input: string): Promise<void> {
    if (!input) return;

    const lowerInput = input.toLowerCase();

    switch (lowerInput) {
      case 'help':
        this.showHelp();
        break;
      case 'history':
        this.showHistory();
        break;
      case 'clear':
        this.clearHistory();
        break;
      case 'config':
        this.showConfig();
        break;
      default:
        await this.processCalculation(input);
    }
  }

  /**
   * Process calculation input
   */
  private async processCalculation(input: string): Promise<void> {
    const parts = input.split(/\s+/);
    
    if (parts.length !== 3) {
      console.log('❌ Invalid format. Use: number operation number (e.g., "5 + 3")');
      return;
    }

    const [operand1Str, operationStr, operand2Str] = parts;
    
    // Validate operation
    if (!this.isValidOperation(operationStr)) {
      console.log('❌ Invalid operation. Supported: +, -, *, /');
      return;
    }

    // Parse numbers
    const operand1 = parseFloat(operand1Str);
    const operand2 = parseFloat(operand2Str);

    if (isNaN(operand1) || isNaN(operand2)) {
      console.log('❌ Invalid numbers. Please enter valid numeric values.');
      return;
    }

    // Perform calculation
    const result = this.calculator.calculate(
      operationStr as Operation,
      operand1,
      operand2
    );

    this.displayResult(result, operand1, operationStr as Operation, operand2);
  }

  /**
   * Display calculation result
   */
  private displayResult(
    result: any,
    operand1: number,
    operation: Operation,
    operand2: number
  ): void {
    if (result.success) {
      console.log(`✅ ${operand1} ${operation} ${operand2} = ${result.value}`);
    } else {
      console.log(`❌ ${this.calculator.getErrorMessage(result.error)}`);
    }
  }

  /**
   * Check if operation is valid
   */
  private isValidOperation(op: string): boolean {
    return ['+', '-', '*', '/'].includes(op);
  }

  /**
   * Show help message
   */
  private showHelp(): void {
    console.log(`
📖 Calculator Help
=================
Usage: number operation number

Examples:
  5 + 3
  10 - 2
  4 * 7
  15 / 3

Operations:
  +  Addition
  -  Subtraction
  *  Multiplication
  /  Division

Commands:
  history  - Show calculation history
  clear    - Clear calculation history
  config   - Show current configuration
  help     - Show this help message
  exit     - Exit the calculator
    `);
  }

  /**
   * Show calculation history
   */
  private showHistory(): void {
    const history = this.calculator.getHistory();
    
    if (history.length === 0) {
      console.log('📝 No calculations in history yet.');
      return;
    }

    console.log('\n📝 Calculation History:');
    console.log('=======================');
    
    history.forEach((entry, index) => {
      const timestamp = entry.timestamp.toLocaleTimeString();
      if (entry.result.success) {
        console.log(`${index + 1}. [${timestamp}] ${entry.operand1} ${entry.operation} ${entry.operand2} = ${entry.result.value}`);
      } else {
        console.log(`${index + 1}. [${timestamp}] ${entry.operand1} ${entry.operation} ${entry.operand2} = Error: ${entry.result.error}`);
      }
    });
    console.log('');
  }

  /**
   * Clear calculation history
   */
  private clearHistory(): void {
    this.calculator.clearHistory();
    console.log('🗑️  History cleared!');
  }

  /**
   * Show current configuration
   */
  private showConfig(): void {
    const config = this.calculator.getConfig();
    console.log('\n⚙️  Current Configuration:');
    console.log('==========================');
    console.log(`Precision: ${config.precision} decimal places`);
    console.log(`Max History: ${config.maxHistory} entries`);
    console.log(`Allow Negative Results: ${config.allowNegativeResults ? 'Yes' : 'No'}`);
    console.log('');
  }

  /**
   * Check if user wants to exit
   */
  private shouldExit(input: string): boolean {
    const lowerInput = input.toLowerCase();
    return lowerInput === 'exit' || lowerInput === 'quit' || lowerInput === 'q';
  }

  /**
   * Prompt user for input
   */
  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }
}

// Start the CLI calculator if this file is run directly
if (require.main === module) {
  const cliCalculator = new CLICalculator();
  cliCalculator.start().catch(console.error);
}

export { CLICalculator };

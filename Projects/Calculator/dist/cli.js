#!/usr/bin/env node
"use strict";
/**
 * CLI Calculator Interface
 *
 * This file demonstrates:
 * - Command line argument parsing
 * - Interactive calculator usage
 * - Error handling in CLI context
 * - History display functionality
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLICalculator = void 0;
const readline = __importStar(require("readline"));
const calculator_1 = require("./calculator");
class CLICalculator {
    constructor() {
        this.calculator = new calculator_1.Calculator();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    /**
     * Start the CLI calculator
     */
    async start() {
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
    async runInteractiveMode() {
        while (true) {
            try {
                const input = await this.prompt('Calculator> ');
                if (this.shouldExit(input)) {
                    break;
                }
                await this.processInput(input.trim());
            }
            catch (error) {
                console.error('An error occurred:', error);
            }
        }
        this.rl.close();
        console.log('Goodbye! 👋');
    }
    /**
     * Process user input
     */
    async processInput(input) {
        if (!input)
            return;
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
    async processCalculation(input) {
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
        const result = this.calculator.calculate(operationStr, operand1, operand2);
        this.displayResult(result, operand1, operationStr, operand2);
    }
    /**
     * Display calculation result
     */
    displayResult(result, operand1, operation, operand2) {
        if (result.success) {
            console.log(`✅ ${operand1} ${operation} ${operand2} = ${result.value}`);
        }
        else {
            console.log(`❌ ${this.calculator.getErrorMessage(result.error)}`);
        }
    }
    /**
     * Check if operation is valid
     */
    isValidOperation(op) {
        return ['+', '-', '*', '/'].includes(op);
    }
    /**
     * Show help message
     */
    showHelp() {
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
    showHistory() {
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
            }
            else {
                console.log(`${index + 1}. [${timestamp}] ${entry.operand1} ${entry.operation} ${entry.operand2} = Error: ${entry.result.error}`);
            }
        });
        console.log('');
    }
    /**
     * Clear calculation history
     */
    clearHistory() {
        this.calculator.clearHistory();
        console.log('🗑️  History cleared!');
    }
    /**
     * Show current configuration
     */
    showConfig() {
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
    shouldExit(input) {
        const lowerInput = input.toLowerCase();
        return lowerInput === 'exit' || lowerInput === 'quit' || lowerInput === 'q';
    }
    /**
     * Prompt user for input
     */
    prompt(question) {
        return new Promise((resolve) => {
            this.rl.question(question, resolve);
        });
    }
}
exports.CLICalculator = CLICalculator;
// Start the CLI calculator if this file is run directly
if (require.main === module) {
    const cliCalculator = new CLICalculator();
    cliCalculator.start().catch(console.error);
}
//# sourceMappingURL=cli.js.map
/**
 * Calculator Class - Demonstrating Error Handling and Function Types
 * 
 * This class showcases:
 * - Error handling with custom error types
 * - Function type usage for operations
 * - Union type handling for results
 * - Input validation and edge case handling
 */

import { 
  Operation, 
  CalculatorResult, 
  CalculatorError, 
  CalculatorOperation, 
  HistoryEntry, 
  CalculatorConfig, 
  DEFAULT_CONFIG 
} from './types';

export class Calculator {
  private history: HistoryEntry[] = [];
  private config: CalculatorConfig;

  constructor(config: CalculatorConfig = DEFAULT_CONFIG) {
    this.config = config;
  }

  /**
   * Main calculation method that handles all operations
   */
  public calculate(operation: Operation, operand1: number, operand2: number): CalculatorResult {
    // Input validation
    const inputValidation = this.validateInputs(operand1, operand2);
    if (!inputValidation.success) {
      return inputValidation;
    }

    // Get the operation function
    const operationFunction = this.getOperationFunction(operation);
    if (!operationFunction) {
      return {
        success: false,
        error: 'INVALID_OPERATION'
      };
    }

    // Perform the calculation
    const result = operationFunction(operand1, operand2);

    // Add to history if successful
    if (result.success) {
      this.addToHistory(operation, operand1, operand2, result);
    }

    return result;
  }

  /**
   * Validate input numbers
   */
  private validateInputs(operand1: number, operand2: number): CalculatorResult {
    if (!this.isValidNumber(operand1) || !this.isValidNumber(operand2)) {
      return {
        success: false,
        error: 'INVALID_INPUT'
      };
    }

    return { success: true, value: 0 }; // Placeholder for validation success
  }

  /**
   * Check if a number is valid (not NaN, not Infinity)
   */
  private isValidNumber(num: number): boolean {
    return !isNaN(num) && isFinite(num);
  }

  /**
   * Get operation function based on operation type
   * Demonstrates function types and switch with union types
   */
  private getOperationFunction(operation: Operation): CalculatorOperation | null {
    switch (operation) {
      case '+':
        return this.add;
      case '-':
        return this.subtract;
      case '*':
        return this.multiply;
      case '/':
        return this.divide;
      default:
        return null;
    }
  }

  /**
   * Addition operation
   */
  private add: CalculatorOperation = (a: number, b: number): CalculatorResult => {
    const result = a + b;
    
    if (!this.isValidNumber(result)) {
      return {
        success: false,
        error: result === Infinity ? 'OVERFLOW' : 'UNDERFLOW'
      };
    }

    return {
      success: true,
      value: this.roundResult(result)
    };
  };

  /**
   * Subtraction operation
   */
  private subtract: CalculatorOperation = (a: number, b: number): CalculatorResult => {
    const result = a - b;
    
    if (!this.isValidNumber(result)) {
      return {
        success: false,
        error: result === Infinity ? 'OVERFLOW' : 'UNDERFLOW'
      };
    }

    // Check if negative results are allowed
    if (!this.config.allowNegativeResults && result < 0) {
      return {
        success: false,
        error: 'UNDERFLOW'
      };
    }

    return {
      success: true,
      value: this.roundResult(result)
    };
  };

  /**
   * Multiplication operation
   */
  private multiply: CalculatorOperation = (a: number, b: number): CalculatorResult => {
    const result = a * b;
    
    if (!this.isValidNumber(result)) {
      return {
        success: false,
        error: result === Infinity ? 'OVERFLOW' : 'UNDERFLOW'
      };
    }

    return {
      success: true,
      value: this.roundResult(result)
    };
  };

  /**
   * Division operation with zero-division error handling
   */
  private divide: CalculatorOperation = (a: number, b: number): CalculatorResult => {
    // Check for division by zero
    if (b === 0) {
      return {
        success: false,
        error: 'DIVISION_BY_ZERO'
      };
    }

    const result = a / b;
    
    if (!this.isValidNumber(result)) {
      return {
        success: false,
        error: result === Infinity ? 'OVERFLOW' : 'UNDERFLOW'
      };
    }

    return {
      success: true,
      value: this.roundResult(result)
    };
  };

  /**
   * Round result to specified precision
   */
  private roundResult(value: number): number {
    return Math.round(value * Math.pow(10, this.config.precision)) / Math.pow(10, this.config.precision);
  }

  /**
   * Add calculation to history
   */
  private addToHistory(operation: Operation, operand1: number, operand2: number, result: CalculatorResult): void {
    const entry: HistoryEntry = {
      operation,
      operand1,
      operand2,
      result,
      timestamp: new Date()
    };

    this.history.unshift(entry); // Add to beginning

    // Maintain max history size
    if (this.history.length > this.config.maxHistory) {
      this.history = this.history.slice(0, this.config.maxHistory);
    }
  }

  /**
   * Get calculation history
   */
  public getHistory(): HistoryEntry[] {
    return [...this.history]; // Return copy to prevent external modification
  }

  /**
   * Clear calculation history
   */
  public clearHistory(): void {
    this.history = [];
  }

  /**
   * Get error message for display
   */
  public getErrorMessage(error: CalculatorError): string {
    switch (error) {
      case 'DIVISION_BY_ZERO':
        return 'Error: Division by zero is not allowed';
      case 'INVALID_OPERATION':
        return 'Error: Invalid operation';
      case 'INVALID_INPUT':
        return 'Error: Invalid input - please enter valid numbers';
      case 'OVERFLOW':
        return 'Error: Result is too large';
      case 'UNDERFLOW':
        return 'Error: Result is too small or negative results not allowed';
      default:
        return 'Error: Unknown error occurred';
    }
  }

  /**
   * Update calculator configuration
   */
  public updateConfig(newConfig: Partial<CalculatorConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  public getConfig(): CalculatorConfig {
    return { ...this.config };
  }
}

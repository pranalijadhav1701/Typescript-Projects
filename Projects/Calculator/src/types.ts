/**
 * Calculator Types - Demonstrating Union Types and Function Types
 * 
 * This file showcases TypeScript concepts:
 * - Union types for operation symbols
 * - Function types for calculator operations
 * - Error handling with custom error types
 */

// Union type for supported operations
export type Operation = '+' | '-' | '*' | '/';

// Union type for calculator results (success or error)
export type CalculatorResult = {
  success: true;
  value: number;
} | {
  success: false;
  error: CalculatorError;
};

// Union type for different error types
export type CalculatorError = 
  | 'DIVISION_BY_ZERO'
  | 'INVALID_OPERATION'
  | 'INVALID_INPUT'
  | 'OVERFLOW'
  | 'UNDERFLOW';

// Function type for calculator operations
export type CalculatorOperation = (a: number, b: number) => CalculatorResult;

// Type for calculator history entry
export type HistoryEntry = {
  operation: Operation;
  operand1: number;
  operand2: number;
  result: CalculatorResult;
  timestamp: Date;
};

// Interface for calculator configuration
export interface CalculatorConfig {
  precision: number;
  maxHistory: number;
  allowNegativeResults: boolean;
}

// Default configuration
export const DEFAULT_CONFIG: CalculatorConfig = {
  precision: 10,
  maxHistory: 100,
  allowNegativeResults: true
};

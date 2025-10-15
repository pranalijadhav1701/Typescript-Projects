/**
 * Calculator Types - Demonstrating Union Types and Function Types
 *
 * This file showcases TypeScript concepts:
 * - Union types for operation symbols
 * - Function types for calculator operations
 * - Error handling with custom error types
 */
export type Operation = '+' | '-' | '*' | '/';
export type CalculatorResult = {
    success: true;
    value: number;
} | {
    success: false;
    error: CalculatorError;
};
export type CalculatorError = 'DIVISION_BY_ZERO' | 'INVALID_OPERATION' | 'INVALID_INPUT' | 'OVERFLOW' | 'UNDERFLOW';
export type CalculatorOperation = (a: number, b: number) => CalculatorResult;
export type HistoryEntry = {
    operation: Operation;
    operand1: number;
    operand2: number;
    result: CalculatorResult;
    timestamp: Date;
};
export interface CalculatorConfig {
    precision: number;
    maxHistory: number;
    allowNegativeResults: boolean;
}
export declare const DEFAULT_CONFIG: CalculatorConfig;
//# sourceMappingURL=types.d.ts.map
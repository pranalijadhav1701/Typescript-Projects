/**
 * Calculator Class - Demonstrating Error Handling and Function Types
 *
 * This class showcases:
 * - Error handling with custom error types
 * - Function type usage for operations
 * - Union type handling for results
 * - Input validation and edge case handling
 */
import { Operation, CalculatorResult, CalculatorError, HistoryEntry, CalculatorConfig } from './types';
export declare class Calculator {
    private history;
    private config;
    constructor(config?: CalculatorConfig);
    /**
     * Main calculation method that handles all operations
     */
    calculate(operation: Operation, operand1: number, operand2: number): CalculatorResult;
    /**
     * Validate input numbers
     */
    private validateInputs;
    /**
     * Check if a number is valid (not NaN, not Infinity)
     */
    private isValidNumber;
    /**
     * Get operation function based on operation type
     * Demonstrates function types and switch with union types
     */
    private getOperationFunction;
    /**
     * Addition operation
     */
    private add;
    /**
     * Subtraction operation
     */
    private subtract;
    /**
     * Multiplication operation
     */
    private multiply;
    /**
     * Division operation with zero-division error handling
     */
    private divide;
    /**
     * Round result to specified precision
     */
    private roundResult;
    /**
     * Add calculation to history
     */
    private addToHistory;
    /**
     * Get calculation history
     */
    getHistory(): HistoryEntry[];
    /**
     * Clear calculation history
     */
    clearHistory(): void;
    /**
     * Get error message for display
     */
    getErrorMessage(error: CalculatorError): string;
    /**
     * Update calculator configuration
     */
    updateConfig(newConfig: Partial<CalculatorConfig>): void;
    /**
     * Get current configuration
     */
    getConfig(): CalculatorConfig;
}
//# sourceMappingURL=calculator.d.ts.map
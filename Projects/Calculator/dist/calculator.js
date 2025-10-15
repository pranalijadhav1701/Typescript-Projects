"use strict";
/**
 * Calculator Class - Demonstrating Error Handling and Function Types
 *
 * This class showcases:
 * - Error handling with custom error types
 * - Function type usage for operations
 * - Union type handling for results
 * - Input validation and edge case handling
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const types_1 = require("./types");
class Calculator {
    constructor(config = types_1.DEFAULT_CONFIG) {
        this.history = [];
        /**
         * Addition operation
         */
        this.add = (a, b) => {
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
        this.subtract = (a, b) => {
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
        this.multiply = (a, b) => {
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
        this.divide = (a, b) => {
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
        this.config = config;
    }
    /**
     * Main calculation method that handles all operations
     */
    calculate(operation, operand1, operand2) {
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
    validateInputs(operand1, operand2) {
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
    isValidNumber(num) {
        return !isNaN(num) && isFinite(num);
    }
    /**
     * Get operation function based on operation type
     * Demonstrates function types and switch with union types
     */
    getOperationFunction(operation) {
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
     * Round result to specified precision
     */
    roundResult(value) {
        return Math.round(value * Math.pow(10, this.config.precision)) / Math.pow(10, this.config.precision);
    }
    /**
     * Add calculation to history
     */
    addToHistory(operation, operand1, operand2, result) {
        const entry = {
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
    getHistory() {
        return [...this.history]; // Return copy to prevent external modification
    }
    /**
     * Clear calculation history
     */
    clearHistory() {
        this.history = [];
    }
    /**
     * Get error message for display
     */
    getErrorMessage(error) {
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
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
    /**
     * Get current configuration
     */
    getConfig() {
        return { ...this.config };
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map
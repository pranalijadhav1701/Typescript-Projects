/**
 * Main Calculator Entry Point
 *
 * This file provides both CLI and programmatic access to the calculator
 */
import { Calculator } from './calculator';
import { CLICalculator } from './cli';
import { Operation, CalculatorResult } from './types';
export { Calculator, CLICalculator };
export * from './types';
/**
 * Convenience function for simple calculations
 * @param operation The operation to perform
 * @param operand1 First operand
 * @param operand2 Second operand
 * @returns Calculator result
 */
export declare function calculate(operation: Operation, operand1: number, operand2: number): CalculatorResult;
/**
 * Create a new calculator instance with default configuration
 */
export declare function createCalculator(): Calculator;
//# sourceMappingURL=index.d.ts.map
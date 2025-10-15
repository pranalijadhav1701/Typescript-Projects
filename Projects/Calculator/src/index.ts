/**
 * Main Calculator Entry Point
 * 
 * This file provides both CLI and programmatic access to the calculator
 */

import { Calculator } from './calculator';
import { CLICalculator } from './cli';
import { Operation, CalculatorResult } from './types';

// Export main classes and types for programmatic use
export { Calculator, CLICalculator };
export * from './types';

/**
 * Convenience function for simple calculations
 * @param operation The operation to perform
 * @param operand1 First operand
 * @param operand2 Second operand
 * @returns Calculator result
 */
export function calculate(operation: Operation, operand1: number, operand2: number): CalculatorResult {
  const calculator = new Calculator();
  return calculator.calculate(operation, operand1, operand2);
}

/**
 * Create a new calculator instance with default configuration
 */
export function createCalculator(): Calculator {
  return new Calculator();
}

/**
 * Start CLI calculator if this file is run directly
 */
if (require.main === module) {
  const cliCalculator = new CLICalculator();
  cliCalculator.start().catch(console.error);
}

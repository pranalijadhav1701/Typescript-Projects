"use strict";
/**
 * Main Calculator Entry Point
 *
 * This file provides both CLI and programmatic access to the calculator
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLICalculator = exports.Calculator = void 0;
exports.calculate = calculate;
exports.createCalculator = createCalculator;
const calculator_1 = require("./calculator");
Object.defineProperty(exports, "Calculator", { enumerable: true, get: function () { return calculator_1.Calculator; } });
const cli_1 = require("./cli");
Object.defineProperty(exports, "CLICalculator", { enumerable: true, get: function () { return cli_1.CLICalculator; } });
__exportStar(require("./types"), exports);
/**
 * Convenience function for simple calculations
 * @param operation The operation to perform
 * @param operand1 First operand
 * @param operand2 Second operand
 * @returns Calculator result
 */
function calculate(operation, operand1, operand2) {
    const calculator = new calculator_1.Calculator();
    return calculator.calculate(operation, operand1, operand2);
}
/**
 * Create a new calculator instance with default configuration
 */
function createCalculator() {
    return new calculator_1.Calculator();
}
/**
 * Start CLI calculator if this file is run directly
 */
if (require.main === module) {
    const cliCalculator = new cli_1.CLICalculator();
    cliCalculator.start().catch(console.error);
}
//# sourceMappingURL=index.js.map
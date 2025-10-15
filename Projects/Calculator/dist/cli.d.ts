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
declare class CLICalculator {
    private calculator;
    private rl;
    constructor();
    /**
     * Start the CLI calculator
     */
    start(): Promise<void>;
    /**
     * Run interactive calculator mode
     */
    private runInteractiveMode;
    /**
     * Process user input
     */
    private processInput;
    /**
     * Process calculation input
     */
    private processCalculation;
    /**
     * Display calculation result
     */
    private displayResult;
    /**
     * Check if operation is valid
     */
    private isValidOperation;
    /**
     * Show help message
     */
    private showHelp;
    /**
     * Show calculation history
     */
    private showHistory;
    /**
     * Clear calculation history
     */
    private clearHistory;
    /**
     * Show current configuration
     */
    private showConfig;
    /**
     * Check if user wants to exit
     */
    private shouldExit;
    /**
     * Prompt user for input
     */
    private prompt;
}
export { CLICalculator };
//# sourceMappingURL=cli.d.ts.map
"use strict";
/**
 * Main Entry Point for Number Guessing Game
 *
 * This is the main entry point that starts the CLI-based number guessing game.
 * It handles command line arguments and initializes the game interface.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const cli_1 = require("./cli");
/**
 * Main function to start the game
 */
function main() {
    // Check for help flag
    const args = process.argv.slice(2);
    if (args.includes('--help') || args.includes('-h')) {
        cli_1.GameCLI.displayHelp();
        return;
    }
    // Check for version flag
    if (args.includes('--version') || args.includes('-v')) {
        console.log('Number Guessing Game v1.0.0');
        console.log('Built with TypeScript');
        return;
    }
    // Start the game
    try {
        const gameCLI = new cli_1.GameCLI();
        gameCLI.startGame();
    }
    catch (error) {
        console.error('❌ An error occurred while running the game:');
        console.error(error instanceof Error ? error.message : 'Unknown error');
        process.exit(1);
    }
}
// Handle process termination gracefully
process.on('SIGINT', () => {
    console.log('\n\n👋 Game interrupted. Thanks for playing! 👋');
    process.exit(0);
});
process.on('SIGTERM', () => {
    console.log('\n\n👋 Game terminated. Thanks for playing! 👋');
    process.exit(0);
});
// Start the application
if (require.main === module) {
    main();
}
//# sourceMappingURL=index.js.map
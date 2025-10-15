/**
 * CLI Interface for Number Guessing Game
 *
 * This module handles user interaction through the command line interface
 * using readline-sync for synchronous input handling.
 */
export declare class GameCLI {
    private game;
    private stats;
    constructor();
    /**
     * Initialize game statistics
     */
    private initializeStats;
    /**
     * Display welcome message and game instructions
     */
    private displayWelcome;
    /**
     * Display difficulty selection menu
     */
    private selectDifficulty;
    /**
     * Display current game information
     */
    private displayGameInfo;
    /**
     * Get user input for guess
     */
    private getGuess;
    /**
     * Display game result
     */
    private displayGameResult;
    /**
     * Update game statistics
     */
    private updateStats;
    /**
     * Display game statistics
     */
    private displayStats;
    /**
     * Ask if user wants to play again
     */
    private askPlayAgain;
    /**
     * Ask if user wants to change difficulty
     */
    private askChangeDifficulty;
    /**
     * Play a single game
     */
    private playSingleGame;
    /**
     * Main game loop
     */
    startGame(): void;
    /**
     * Display help information
     */
    static displayHelp(): void;
}
//# sourceMappingURL=cli.d.ts.map
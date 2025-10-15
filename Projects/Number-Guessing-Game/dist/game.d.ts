/**
 * Number Guessing Game Logic
 *
 * This module contains the core game logic including:
 * - Number generation
 * - Guess validation
 * - Game state management
 * - Win/loss determination
 */
import { GameConfig, GameResult, ValidationResult, Difficulty } from './types';
export declare class NumberGuessingGame {
    private state;
    constructor(difficulty?: Difficulty);
    /**
     * Initialize a new game with the given configuration
     */
    private initializeGame;
    /**
     * Generate a random number between min and max (inclusive)
     */
    private generateRandomNumber;
    /**
     * Validate user input
     */
    validateGuess(input: string): ValidationResult;
    /**
     * Process a guess and update game state
     */
    makeGuess(guess: number): GameResult | null;
    /**
     * Get feedback for the current guess
     */
    getGuessFeedback(guess: number): string;
    /**
     * Get current game state information
     */
    getGameInfo(): string;
    /**
     * Check if the game is over
     */
    isGameOver(): boolean;
    /**
     * Check if the player has won
     */
    hasWon(): boolean;
    /**
     * Get the target number (for debugging or end game)
     */
    getTargetNumber(): number;
    /**
     * Get the current game result
     */
    getGameResult(): GameResult;
    /**
     * Start a new game with the same difficulty
     */
    startNewGame(): void;
    /**
     * Start a new game with a different difficulty
     */
    startNewGameWithDifficulty(difficulty: Difficulty): void;
    /**
     * Get current difficulty
     */
    getDifficulty(): Difficulty;
    /**
     * Get all available difficulties
     */
    static getAvailableDifficulties(): Difficulty[];
    /**
     * Get difficulty configuration
     */
    static getDifficultyConfig(difficulty: Difficulty): GameConfig;
}
//# sourceMappingURL=game.d.ts.map
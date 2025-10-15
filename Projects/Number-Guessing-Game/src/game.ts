/**
 * Number Guessing Game Logic
 * 
 * This module contains the core game logic including:
 * - Number generation
 * - Guess validation
 * - Game state management
 * - Win/loss determination
 */

import { 
  GameState, 
  GameConfig, 
  GameResult, 
  ValidationResult, 
  Difficulty,
  DIFFICULTY_CONFIGS 
} from './types';

export class NumberGuessingGame {
  private state: GameState;

  constructor(difficulty: Difficulty = 'medium') {
    const config = DIFFICULTY_CONFIGS[difficulty];
    this.state = this.initializeGame(config);
  }

  /**
   * Initialize a new game with the given configuration
   */
  private initializeGame(config: GameConfig): GameState {
    const targetNumber = this.generateRandomNumber(config.minNumber, config.maxNumber);
    
    return {
      targetNumber,
      attempts: 0,
      maxAttempts: config.maxAttempts,
      guesses: [],
      isGameOver: false,
      hasWon: false,
      config
    };
  }

  /**
   * Generate a random number between min and max (inclusive)
   */
  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Validate user input
   */
  public validateGuess(input: string): ValidationResult {
    // Check if input is empty
    if (!input.trim()) {
      return {
        isValid: false,
        error: 'Please enter a number.'
      };
    }

    // Parse the input as a number
    const number = parseInt(input.trim(), 10);

    // Check if it's a valid number
    if (isNaN(number)) {
      return {
        isValid: false,
        error: 'Please enter a valid number.'
      };
    }

    // Check if it's within the valid range
    const { minNumber, maxNumber } = this.state.config;
    if (number < minNumber || number > maxNumber) {
      return {
        isValid: false,
        error: `Please enter a number between ${minNumber} and ${maxNumber}.`
      };
    }

    return {
      isValid: true,
      value: number
    };
  }

  /**
   * Process a guess and update game state
   */
  public makeGuess(guess: number): GameResult | null {
    if (this.state.isGameOver) {
      throw new Error('Game is already over. Start a new game.');
    }

    // Increment attempt counter
    this.state.attempts++;
    this.state.guesses.push(guess);

    // Check if the guess is correct
    if (guess === this.state.targetNumber) {
      this.state.hasWon = true;
      this.state.isGameOver = true;
      return this.getGameResult();
    }

    // Check if max attempts reached
    if (this.state.attempts >= this.state.maxAttempts) {
      this.state.isGameOver = true;
      this.state.hasWon = false;
      return this.getGameResult();
    }

    // Game continues
    return null;
  }

  /**
   * Get feedback for the current guess
   */
  public getGuessFeedback(guess: number): string {
    if (guess === this.state.targetNumber) {
      return '🎉 Correct! You guessed it!';
    }

    if (guess < this.state.targetNumber) {
      return `📈 Too low! Try a higher number.`;
    } else {
      return `📉 Too high! Try a lower number.`;
    }
  }

  /**
   * Get current game state information
   */
  public getGameInfo(): string {
    const { attempts, maxAttempts, config } = this.state;
    const remaining = maxAttempts - attempts;
    
    return `Attempts: ${attempts}/${maxAttempts} | Remaining: ${remaining} | Range: ${config.minNumber}-${config.maxNumber}`;
  }

  /**
   * Check if the game is over
   */
  public isGameOver(): boolean {
    return this.state.isGameOver;
  }

  /**
   * Check if the player has won
   */
  public hasWon(): boolean {
    return this.state.hasWon;
  }

  /**
   * Get the target number (for debugging or end game)
   */
  public getTargetNumber(): number {
    return this.state.targetNumber;
  }

  /**
   * Get the current game result
   */
  public getGameResult(): GameResult {
    return {
      hasWon: this.state.hasWon,
      attempts: this.state.attempts,
      targetNumber: this.state.targetNumber,
      guesses: [...this.state.guesses],
      difficulty: this.state.config.difficulty
    };
  }

  /**
   * Start a new game with the same difficulty
   */
  public startNewGame(): void {
    this.state = this.initializeGame(this.state.config);
  }

  /**
   * Start a new game with a different difficulty
   */
  public startNewGameWithDifficulty(difficulty: Difficulty): void {
    const config = DIFFICULTY_CONFIGS[difficulty];
    this.state = this.initializeGame(config);
  }

  /**
   * Get current difficulty
   */
  public getDifficulty(): Difficulty {
    return this.state.config.difficulty;
  }

  /**
   * Get all available difficulties
   */
  public static getAvailableDifficulties(): Difficulty[] {
    return Object.keys(DIFFICULTY_CONFIGS) as Difficulty[];
  }

  /**
   * Get difficulty configuration
   */
  public static getDifficultyConfig(difficulty: Difficulty): GameConfig {
    return DIFFICULTY_CONFIGS[difficulty];
  }
}

/**
 * Type definitions for the Number Guessing Game
 */

// Game difficulty levels
export type Difficulty = 'easy' | 'medium' | 'hard';

// Game configuration based on difficulty
export interface GameConfig {
  minNumber: number;
  maxNumber: number;
  maxAttempts: number;
  difficulty: Difficulty;
}

// Game state tracking
export interface GameState {
  targetNumber: number;
  attempts: number;
  maxAttempts: number;
  guesses: number[];
  isGameOver: boolean;
  hasWon: boolean;
  config: GameConfig;
}

// Game result information
export interface GameResult {
  hasWon: boolean;
  attempts: number;
  targetNumber: number;
  guesses: number[];
  difficulty: Difficulty;
}

// User input validation result
export interface ValidationResult {
  isValid: boolean;
  error?: string;
  value?: number;
}

// Game statistics
export interface GameStats {
  totalGames: number;
  gamesWon: number;
  gamesLost: number;
  averageAttempts: number;
  bestScore: number; // lowest number of attempts
  worstScore: number; // highest number of attempts
}

// Difficulty configurations
export const DIFFICULTY_CONFIGS: Record<Difficulty, GameConfig> = {
  easy: {
    minNumber: 1,
    maxNumber: 10,
    maxAttempts: 5,
    difficulty: 'easy'
  },
  medium: {
    minNumber: 1,
    maxNumber: 50,
    maxAttempts: 7,
    difficulty: 'medium'
  },
  hard: {
    minNumber: 1,
    maxNumber: 100,
    maxAttempts: 10,
    difficulty: 'hard'
  }
};

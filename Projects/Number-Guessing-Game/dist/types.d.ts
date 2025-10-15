/**
 * Type definitions for the Number Guessing Game
 */
export type Difficulty = 'easy' | 'medium' | 'hard';
export interface GameConfig {
    minNumber: number;
    maxNumber: number;
    maxAttempts: number;
    difficulty: Difficulty;
}
export interface GameState {
    targetNumber: number;
    attempts: number;
    maxAttempts: number;
    guesses: number[];
    isGameOver: boolean;
    hasWon: boolean;
    config: GameConfig;
}
export interface GameResult {
    hasWon: boolean;
    attempts: number;
    targetNumber: number;
    guesses: number[];
    difficulty: Difficulty;
}
export interface ValidationResult {
    isValid: boolean;
    error?: string;
    value?: number;
}
export interface GameStats {
    totalGames: number;
    gamesWon: number;
    gamesLost: number;
    averageAttempts: number;
    bestScore: number;
    worstScore: number;
}
export declare const DIFFICULTY_CONFIGS: Record<Difficulty, GameConfig>;
//# sourceMappingURL=types.d.ts.map
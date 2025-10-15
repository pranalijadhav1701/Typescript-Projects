"use strict";
/**
 * CLI Interface for Number Guessing Game
 *
 * This module handles user interaction through the command line interface
 * using readline-sync for synchronous input handling.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCLI = void 0;
const readlineSync = __importStar(require("readline-sync"));
const game_1 = require("./game");
class GameCLI {
    constructor() {
        this.game = new game_1.NumberGuessingGame('medium');
        this.stats = this.initializeStats();
    }
    /**
     * Initialize game statistics
     */
    initializeStats() {
        return {
            totalGames: 0,
            gamesWon: 0,
            gamesLost: 0,
            averageAttempts: 0,
            bestScore: Infinity,
            worstScore: 0
        };
    }
    /**
     * Display welcome message and game instructions
     */
    displayWelcome() {
        console.log('\n🎯 Welcome to the Number Guessing Game! 🎯');
        console.log('==========================================');
        console.log('I\'m thinking of a number, and you need to guess it!');
        console.log('I\'ll give you hints whether your guess is too high or too low.');
        console.log('Good luck! 🍀\n');
    }
    /**
     * Display difficulty selection menu
     */
    selectDifficulty() {
        console.log('📊 Select Difficulty Level:');
        console.log('1. Easy   (1-10, 5 attempts)');
        console.log('2. Medium (1-50, 7 attempts)');
        console.log('3. Hard   (1-100, 10 attempts)');
        const choice = readlineSync.questionInt('Enter your choice (1-3): ', {
            min: 1,
            max: 3
        });
        const difficulties = ['easy', 'medium', 'hard'];
        return difficulties[choice - 1];
    }
    /**
     * Display current game information
     */
    displayGameInfo() {
        console.log(`\n📋 ${this.game.getGameInfo()}`);
        console.log('─'.repeat(50));
    }
    /**
     * Get user input for guess
     */
    getGuess() {
        const input = readlineSync.question('🎲 Enter your guess: ');
        const validation = this.game.validateGuess(input);
        if (!validation.isValid) {
            console.log(`❌ ${validation.error}`);
            return this.getGuess(); // Recursive call for invalid input
        }
        return validation.value;
    }
    /**
     * Display game result
     */
    displayGameResult(result) {
        console.log('\n' + '='.repeat(50));
        if (result.hasWon) {
            console.log('🎉 Congratulations! You won! 🎉');
            console.log(`🎯 The number was: ${result.targetNumber}`);
            console.log(`📊 You guessed it in ${result.attempts} attempt${result.attempts === 1 ? '' : 's'}!`);
            // Performance feedback
            if (result.attempts === 1) {
                console.log('🏆 Perfect! First try! You\'re amazing!');
            }
            else if (result.attempts <= 3) {
                console.log('⭐ Excellent! Great job!');
            }
            else if (result.attempts <= 5) {
                console.log('👍 Good work!');
            }
            else {
                console.log('😅 You got there eventually!');
            }
        }
        else {
            console.log('😔 Game Over! Better luck next time!');
            console.log(`🎯 The number was: ${result.targetNumber}`);
            console.log(`📊 You used all ${result.attempts} attempts.`);
        }
        console.log('='.repeat(50));
    }
    /**
     * Update game statistics
     */
    updateStats(result) {
        this.stats.totalGames++;
        if (result.hasWon) {
            this.stats.gamesWon++;
            this.stats.bestScore = Math.min(this.stats.bestScore, result.attempts);
        }
        else {
            this.stats.gamesLost++;
        }
        this.stats.worstScore = Math.max(this.stats.worstScore, result.attempts);
        // Calculate average attempts
        const totalAttempts = this.stats.gamesWon * this.stats.averageAttempts + result.attempts;
        this.stats.averageAttempts = totalAttempts / this.stats.totalGames;
    }
    /**
     * Display game statistics
     */
    displayStats() {
        console.log('\n📈 Your Game Statistics:');
        console.log('─'.repeat(30));
        console.log(`Total Games: ${this.stats.totalGames}`);
        console.log(`Games Won: ${this.stats.gamesWon}`);
        console.log(`Games Lost: ${this.stats.gamesLost}`);
        console.log(`Win Rate: ${((this.stats.gamesWon / this.stats.totalGames) * 100).toFixed(1)}%`);
        console.log(`Average Attempts: ${this.stats.averageAttempts.toFixed(1)}`);
        if (this.stats.bestScore !== Infinity) {
            console.log(`Best Score: ${this.stats.bestScore} attempt${this.stats.bestScore === 1 ? '' : 's'}`);
        }
        if (this.stats.worstScore > 0) {
            console.log(`Worst Score: ${this.stats.worstScore} attempt${this.stats.worstScore === 1 ? '' : 's'}`);
        }
        console.log('─'.repeat(30));
    }
    /**
     * Ask if user wants to play again
     */
    askPlayAgain() {
        const playAgain = readlineSync.keyInYNStrict('\n🔄 Would you like to play again?');
        return playAgain;
    }
    /**
     * Ask if user wants to change difficulty
     */
    askChangeDifficulty() {
        const changeDifficulty = readlineSync.keyInYNStrict('\n⚙️  Would you like to change difficulty?');
        return changeDifficulty;
    }
    /**
     * Play a single game
     */
    playSingleGame() {
        this.displayGameInfo();
        while (!this.game.isGameOver()) {
            const guess = this.getGuess();
            const feedback = this.game.getGuessFeedback(guess);
            console.log(feedback);
            const result = this.game.makeGuess(guess);
            if (result) {
                this.displayGameResult(result);
                this.updateStats(result);
                break;
            }
            // Show remaining attempts
            console.log(`\n📋 ${this.game.getGameInfo()}`);
        }
    }
    /**
     * Main game loop
     */
    startGame() {
        this.displayWelcome();
        let playing = true;
        while (playing) {
            // Select difficulty
            const difficulty = this.selectDifficulty();
            this.game.startNewGameWithDifficulty(difficulty);
            // Play the game
            this.playSingleGame();
            // Show statistics
            this.displayStats();
            // Ask if user wants to play again
            if (this.askPlayAgain()) {
                if (this.askChangeDifficulty()) {
                    // Continue to next iteration to select new difficulty
                    continue;
                }
                else {
                    // Play again with same difficulty
                    this.game.startNewGame();
                    continue;
                }
            }
            else {
                playing = false;
            }
        }
        console.log('\n👋 Thanks for playing! Goodbye! 👋');
    }
    /**
     * Display help information
     */
    static displayHelp() {
        console.log('\n📖 Number Guessing Game Help');
        console.log('============================');
        console.log('🎯 Objective: Guess the randomly generated number');
        console.log('📊 Difficulty Levels:');
        console.log('   • Easy: Numbers 1-10, 5 attempts');
        console.log('   • Medium: Numbers 1-50, 7 attempts');
        console.log('   • Hard: Numbers 1-100, 10 attempts');
        console.log('💡 Tips:');
        console.log('   • Use binary search strategy');
        console.log('   • Pay attention to the hints');
        console.log('   • Start with the middle of the range');
        console.log('🎮 Commands:');
        console.log('   • Enter numbers to make guesses');
        console.log('   • Answer Y/N to play again');
        console.log('   • Answer Y/N to change difficulty');
        console.log('============================\n');
    }
}
exports.GameCLI = GameCLI;
//# sourceMappingURL=cli.js.map
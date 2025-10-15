/**
 * Web Calculator Interface
 * 
 * This file provides the web interface for the TypeScript calculator
 * It demonstrates how to use the calculator in a browser environment
 */

// Import the calculator (this will be compiled to JavaScript)
// For now, we'll recreate the essential parts for the web interface

class WebCalculator {
    constructor() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.waitingForOperand = false;
        this.history = [];
    }

    // Calculator operations
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
    multiply(a, b) { return a * b; }
    divide(a, b) { 
        if (b === 0) {
            throw new Error('DIVISION_BY_ZERO');
        }
        return a / b;
    }

    // Perform calculation
    calculate() {
        if (!this.operation || this.previousInput === '' || this.currentInput === '') {
            return;
        }

        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        let result;

        try {
            switch (this.operation) {
                case '+':
                    result = this.add(prev, current);
                    break;
                case '-':
                    result = this.subtract(prev, current);
                    break;
                case '*':
                    result = this.multiply(prev, current);
                    break;
                case '/':
                    result = this.divide(prev, current);
                    break;
                default:
                    return;
            }

            // Round to avoid floating point precision issues
            result = Math.round(result * 100000000) / 100000000;

            // Add to history
            this.addToHistory(`${this.previousInput} ${this.operation} ${this.currentInput} = ${result}`, true);

            // Update display
            this.currentInput = result.toString();
            this.previousInput = '';
            this.operation = null;
            this.waitingForOperand = true;

            this.updateDisplay();

        } catch (error) {
            this.addToHistory(`${this.previousInput} ${this.operation} ${this.currentInput} = Error: ${error.message}`, false);
            this.showError(error.message);
        }
    }

    // Add to history
    addToHistory(entry, success) {
        this.history.unshift({
            entry,
            success,
            timestamp: new Date()
        });

        // Keep only last 20 entries
        if (this.history.length > 20) {
            this.history = this.history.slice(0, 20);
        }

        this.updateHistoryDisplay();
    }

    // Update history display
    updateHistoryDisplay() {
        const historyList = document.getElementById('historyList');
        
        if (this.history.length === 0) {
            historyList.innerHTML = '<div class="history-item">No calculations yet</div>';
            return;
        }

        historyList.innerHTML = this.history.map(item => 
            `<div class="history-item ${item.success ? 'success' : 'error'}">
                ${item.entry}
            </div>`
        ).join('');
    }

    // Clear history
    clearHistory() {
        this.history = [];
        this.updateHistoryDisplay();
    }

    // Set operation
    setOperation(op) {
        if (this.operation && !this.waitingForOperand) {
            this.calculate();
        }

        this.operation = op;
        this.previousInput = this.currentInput;
        this.currentInput = '';
        this.waitingForOperand = true;
        this.updateDisplay();
    }

    // Append number
    appendNumber(num) {
        if (this.waitingForOperand) {
            this.currentInput = num;
            this.waitingForOperand = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }

    // Append decimal
    appendDecimal() {
        if (this.waitingForOperand) {
            this.currentInput = '0.';
            this.waitingForOperand = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }

    // Clear all
    clearAll() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }

    // Clear entry
    clearEntry() {
        this.currentInput = '';
        this.updateDisplay();
    }

    // Backspace
    backspace() {
        if (this.currentInput.length > 0) {
            this.currentInput = this.currentInput.slice(0, -1);
            this.updateDisplay();
        }
    }

    // Update display
    updateDisplay() {
        const displayInput = document.getElementById('displayInput');
        const displayResult = document.getElementById('displayResult');

        // Update input display
        let inputText = '';
        if (this.previousInput !== '') {
            inputText += this.previousInput;
            if (this.operation) {
                inputText += ` ${this.operation}`;
            }
        }
        displayInput.textContent = inputText;

        // Update result display
        displayResult.textContent = this.currentInput || '0';
        displayResult.className = 'display-result';
    }

    // Show error
    showError(message) {
        const displayResult = document.getElementById('displayResult');
        displayResult.textContent = 'Error';
        displayResult.className = 'display-result display-error';
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.clearAll();
        }, 2000);
    }
}

// Create calculator instance
const calculator = new WebCalculator();

// Global functions for button clicks
function appendNumber(num) {
    calculator.appendNumber(num);
}

function appendDecimal() {
    calculator.appendDecimal();
}

function setOperation(op) {
    calculator.setOperation(op);
}

function calculate() {
    calculator.calculate();
}

function clearAll() {
    calculator.clearAll();
}

function clearEntry() {
    calculator.clearEntry();
}

function backspace() {
    calculator.backspace();
}

function clearHistory() {
    calculator.clearHistory();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperation(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    } else if (key === 'Backspace') {
        backspace();
    }
});

// Initialize display
calculator.updateDisplay();

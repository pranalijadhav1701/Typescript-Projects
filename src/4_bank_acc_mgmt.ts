import * as readlineSync from 'readline-sync';

class BankAccountMgmt{
    private balance: number;
    constructor(accountHolder:string,initialBalance: number){
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}


console.log("Welcome to the Bank Account Management System");
const accountHolder = readlineSync.question("Enter account holder name: ");
const initialBalance = parseFloat(readlineSync.question("Enter initial balance: "));
const account = new BankAccountMgmt(accountHolder, initialBalance);

while (true) {
    console.log("\nMenu:");
    console.log("1. Deposit");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Exit");
    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
        case '1':
            const depositAmount = parseFloat(readlineSync.question("Enter deposit amount: "));
            account.deposit(depositAmount);
            break;
        case '2':
            const withdrawAmount = parseFloat(readlineSync.question("Enter withdrawal amount: "));
            account.withdraw(withdrawAmount);
            break;
        case '3':
            console.log(`Current balance: $${account.getBalance()}`);
            break;
        case '4':
            console.log("Exiting the system. Goodbye!");
            process.exit(0);
        default:
            console.log("Invalid choice. Please try again.");
    }
}
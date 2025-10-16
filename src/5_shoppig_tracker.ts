import * as readlineSync from 'readline-sync';

interface ShoppingTracker {
    trackerId: string;
    items: string[];
    totalSpent: number;
}

class ShoppingTrackerImpl implements ShoppingTracker {
    trackerId: string;
    items: string[];
    totalSpent: number;

    constructor(trackerId: string) {
        this.trackerId = trackerId;
        this.items = [];
        this.totalSpent = 0;
    }

    addItem(item: string, price: number): void {
        if (price > 0) {
            this.items.push(item);
            this.totalSpent += price;
            console.log(`Added item: ${item} for $${price}. Total spent: $${this.totalSpent}`);
        } else {
            console.log("Price must be positive.");
        }
    }

    removeItem(item: string, price: number): void {
        const index = this.items.indexOf(item);
        if (index > -1 && this.totalSpent >= price) {
            this.items.splice(index, 1);
            this.totalSpent -= price;
            console.log(`Removed item: ${item} for $${price}. Total spent: $${this.totalSpent}`);
        } else {
            console.log("Item not found or insufficient total spent.");
        }
    }

    getTotalSpent(): number {
        return this.totalSpent;
    }

    getItems(): string[] {
        return this.items;
    }
}

console.log("Welcome to the Shopping Tracker System");
const trackerId = readlineSync.question("Enter tracker ID: ");
const tracker = new ShoppingTrackerImpl(trackerId);

while (true) {
    console.log("\nMenu:");
    console.log("1. Add Item");
    console.log("2. Remove Item");
    console.log("3. Check Total Spent");
    console.log("4. View Items");
    console.log("5. Exit");
    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
        case '1':
            const itemToAdd = readlineSync.question("Enter item name: ");
            const priceToAdd = parseFloat(readlineSync.question("Enter item price: "));
            tracker.addItem(itemToAdd, priceToAdd);
            break;
        case '2':
            const itemToRemove = readlineSync.question("Enter item name to remove: ");
            const priceToRemove = parseFloat(readlineSync.question("Enter item price: "));
            tracker.removeItem(itemToRemove, priceToRemove);
            break;
        case '3':
            console.log(`Total spent: $${tracker.getTotalSpent()}`);
            break;
        case '4':
            console.log("Items in tracker:", tracker.getItems());
            break;
        case '5':
            console.log("Exiting the system. Goodbye!");
            process.exit(0);
        default:
            console.log("Invalid choice. Please try again.");
    }
}
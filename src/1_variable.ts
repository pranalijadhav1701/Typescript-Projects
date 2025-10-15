// 1. Basic Types
// TypeScript adds type annotations to JavaScript variables.
let id: number = 101;
let name: string = "Pranali";
let isActive: boolean = true;
console.log(`ID: ${id} Name: ${name} Active: ${isActive}`);
// 2. Complex Types
// Arrays
let numbers: number[] = [10, 20, 30];
let fruits: Array<string> = ["Apple", "Banana", "Mango"];
console.log(`Numbers: ${numbers} Fruits: ${fruits}`);

// 3. Tuples
// Tuples allow fixed-size arrays with known types.
let person: [string, number] = ["Pranali", 22];
console.log(`Person: ${person}`);

// 4. Enums : 
// Enums define a set of named constants.
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
console.log(`Move: ${move}`);

// 5. Union Types :
//  A variable can have multiple possible types.
let value: string | number = "Hello";
value = 42;
console.log(`Value: ${value}`);

// 6. Any Type
// Use any when you don’t know the type in advance.
// Avoid using any often — it disables type checking.
let random: any = "Hello";
random = 100;
random = true;
console.log(`Random: ${random}`);

// 7. Unknown Type
// You must check its type before using it.
// Safer alternative to any.
let input: unknown = "TypeScript";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// 8. Functions
// Both parameters and return type are typed.
function add(a: number, b: number): number {
  return a + b;
}
console.log(`Sum: ${add(10, 20)}`);

// 9. Void Type
// Functions that don’t return a value use void.
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}
logMessage("Hello, World!");


// 9. Optional Parameters
// age is optional due to the ?.
function greet(name: string, age?: number): string {
  return `Hello ${name}, Age: ${age ?? "Unknown"}`;
}
console.log(greet("Pranali"));

// 10. Type Alias
// You can create custom reusable types.
type User = {
  id: number;
  name: string;
};

let person1: User = { id: 1, name: "Pranali" };
console.log(`User: ${JSON.stringify(person1)}`);

// 20. Type Narrowing
// Use typeof or other checks to handle multiple types safely.
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Numeric ID:", id);
  }
}
printId("abc123");



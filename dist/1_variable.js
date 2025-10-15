"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic Types
// TypeScript adds type annotations to JavaScript variables.
let id = 101;
let name = "Pranali";
let isActive = true;
console.log(`ID: ${id} Name: ${name} Active: ${isActive}`);
// 2. Complex Types
// Arrays
let numbers = [10, 20, 30];
let fruits = ["Apple", "Banana", "Mango"];
console.log(`Numbers: ${numbers} Fruits: ${fruits}`);
// 3. Tuples
// Tuples allow fixed-size arrays with known types.
let person = ["Pranali", 22];
console.log(`Person: ${person}`);
// 4. Enums : 
// Enums define a set of named constants.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(`Move: ${move}`);
// 5. Union Types :
//  A variable can have multiple possible types.
let value = "Hello";
value = 42;
console.log(`Value: ${value}`);
// 6. Any Type
// Use any when you don’t know the type in advance.
// Avoid using any often — it disables type checking.
let random = "Hello";
random = 100;
random = true;
console.log(`Random: ${random}`);
// 7. Unknown Type
// You must check its type before using it.
// Safer alternative to any.
let input = "TypeScript";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// 8. Functions
// Both parameters and return type are typed.
function add(a, b) {
    return a + b;
}
console.log(`Sum: ${add(10, 20)}`);
// 9. Void Type
// Functions that don’t return a value use void.
function logMessage(message) {
    console.log(`Log: ${message}`);
}
logMessage("Hello, World!");
// 9. Optional Parameters
// age is optional due to the ?.
function greet(name, age) {
    return `Hello ${name}, Age: ${age !== null && age !== void 0 ? age : "Unknown"}`;
}
console.log(greet("Pranali"));
let person1 = { id: 1, name: "Pranali" };
console.log(`User: ${JSON.stringify(person1)}`);
// 20. Type Narrowing
// Use typeof or other checks to handle multiple types safely.
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Numeric ID:", id);
    }
}
printId("abc123");

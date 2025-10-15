// 1. Interfaces
// Used to define object shapes (like Type Alias but extendable).
interface Student {
  name: string;
  rollNo: number;
}

const s1: Student = { name: "Anu", rollNo: 101 };
console.log(`Student: ${JSON.stringify(s1)}`);

// 2. Classes
// TypeScript supports OOP with classes.
// Defines properties, constructor, and methods.

class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  show(): void {
    console.log(`Car: ${this.brand}`);
  }
}

const car1 = new Car("Tesla");
car1.show();
console.log(`Car Brand: ${car1.brand}`);

// 3. Inheritance
// Classes can inherit from other classes.
// Bike inherits methods from Vehicle.
class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Bike extends Vehicle {
  ride() {
    console.log("Bike is riding");
  }
}

const bike = new Bike();
bike.move();
bike.ride();
console.log("Bike instance:", bike);


// 4. Generics
// For reusable functions that work with any type.
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10);
let str = identity<string>("Hello");
console.log(`Number: ${num}, String: ${str}`);

// 5. Access Modifiers
// Control visibility of class members.
// public (default), private, protected
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public greet() {
    console.log(`Hello ${this.name}`);
  }
}

const p = new Person("Pranali");
p.greet(); // ✅
// console.log(p.name); // ❌ Error: 'name' is private

// 6. Readonly Modifier
// Readonly properties cannot be reassigned after initialization.
class Book {
  readonly title: string;
  constructor(title: string) {
    this.title = title;
  }
}

const b = new Book("TS Handbook");
// b.title = "New Title"; ❌ Error

// 7. Type Assertions
// When you know the type better than TypeScript.
let value: unknown = "Hello TS";
let length = (value as string).length;
console.log(`Length: ${length}`);

// Modules (Import/Export)
// You can split code into reusable files.
// math.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// // main.ts
// import { add } from "./math";
// console.log(add(5, 3));

// 9. Interfaces with Inheritance
// this is used to create a new interface by extending an existing one.
// Manager inherits all properties from Employee.
interface Employee {
  id: number;
  name: string;
}

interface Manager extends Employee {
  department: string;
}

let m: Manager = { id: 1, name: "Priya", department: "IT" };
console.log(`Manager: ${JSON.stringify(m)}`);

// 10. Enums
// Define a set of named constants.
enum Direction {
  Up,
  Down,
    Left,
    Right
}
let move: Direction = Direction.Up;
console.log(`Move: ${move}`);

// 11. Abstract Classes
// Cannot be instantiated directly.
// Must be extended by other classes.
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof Woof");
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();
console.log("Dog instance:", dog);

// 12. Static Members
// Belong to the class itself, not instances.
class Counter {
  static count: number = 0;
  static increment() {
    this.count++;
  }
}
    
Counter.increment();
Counter.increment();
console.log(`Counter: ${Counter.count}`);   

// 13. Decorators
// Special kind of declaration that can be attached to a class, method, accessor, property, or parameter.
// Used for meta-programming (e.g., logging, validation).

// 14. Mixins
// A way to compose classes from reusable components.
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date(); 
  };
}

class Message {
  content: string;
  constructor(content: string) {
    this.content = content;
  }
}

const TimestampedMessage = Timestamped(Message);
const msg = new TimestampedMessage("Hello");
console.log(`Message: ${msg.content}, Timestamp: ${msg.timestamp}`);

// 15. Namespaces
// Used to organize code and avoid name collisions.
// Not commonly used in modern TypeScript (prefer modules).
namespace Geometry {
  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
}

console.log(`Area: ${Geometry.areaOfCircle(5)}`);

// 16. Tuples
// Fixed-length arrays with specified types for each element.
let tuple: [string, number] = ["Age", 30];
console.log(`Tuple: ${tuple[0]} - ${tuple[1]}`);

// 17. Literal Types
// Variables can be restricted to specific values.
let direction: "up" | "down" | "left" | "right";
direction = "up"; // ✅
// direction = "forward"; // ❌ Error

console.log(`Direction: ${direction}`);

// 18. Enums with Custom Values
// You can assign custom values to enum members.
enum Status {
  Active = 1,
  Inactive = 0,
  Pending = -1
}

let userStatus: Status = Status.Active;
console.log(`User Status: ${userStatus}`);

// 19. Type Assertions with Angle Bracket Syntax
// Alternative syntax for type assertions.
let someValue: unknown = "This is a string";
let strLength: number = (<string>someValue).length;
console.log(`String Length: ${strLength}`);


const s1 = { name: "Anu", rollNo: 101 };
console.log(`Student: ${JSON.stringify(s1)}`);
// 2. Classes
// TypeScript supports OOP with classes.
// Defines properties, constructor, and methods.
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    show() {
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
function identity(value) {
    return value;
}
let num = identity(10);
let str = identity("Hello");
console.log(`Number: ${num}, String: ${str}`);
// 5. Access Modifiers
// Control visibility of class members.
// public (default), private, protected
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const p = new Person("Pranali");
p.greet(); // ✅
// console.log(p.name); // ❌ Error: 'name' is private
// 6. Readonly Modifier
// Readonly properties cannot be reassigned after initialization.
class Book {
    constructor(title) {
        this.title = title;
    }
}
const b = new Book("TS Handbook");
// b.title = "New Title"; ❌ Error
// 7. Type Assertions
// When you know the type better than TypeScript.
let value = "Hello TS";
let length = value.length;
console.log(`Length: ${length}`);
let m = { id: 1, name: "Priya", department: "IT" };
console.log(`Manager: ${JSON.stringify(m)}`);
// 10. Enums
// Define a set of named constants.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(`Move: ${move}`);
// 11. Abstract Classes
// Cannot be instantiated directly.
// Must be extended by other classes.
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    makeSound() {
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
    static increment() {
        this.count++;
    }
}
Counter.count = 0;
Counter.increment();
Counter.increment();
console.log(`Counter: ${Counter.count}`);
function Timestamped(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
    };
}
class Message {
    constructor(content) {
        this.content = content;
    }
}
const TimestampedMessage = Timestamped(Message);
const msg = new TimestampedMessage("Hello");
console.log(`Message: ${msg.content}, Timestamp: ${msg.timestamp}`);
// 15. Namespaces
// Used to organize code and avoid name collisions.
// Not commonly used in modern TypeScript (prefer modules).
var Geometry;
(function (Geometry) {
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.areaOfCircle = areaOfCircle;
})(Geometry || (Geometry = {}));
console.log(`Area: ${Geometry.areaOfCircle(5)}`);
// 16. Tuples
// Fixed-length arrays with specified types for each element.
let tuple = ["Age", 30];
console.log(`Tuple: ${tuple[0]} - ${tuple[1]}`);
// 17. Literal Types
// Variables can be restricted to specific values.
let direction;
direction = "up"; // ✅
// direction = "forward"; // ❌ Error
console.log(`Direction: ${direction}`);
// 18. Enums with Custom Values
// You can assign custom values to enum members.
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = -1] = "Pending";
})(Status || (Status = {}));
let userStatus = Status.Active;
console.log(`User Status: ${userStatus}`);
// 19. Type Assertions with Angle Bracket Syntax
// Alternative syntax for type assertions.
let someValue = "This is a string";
let strLength = someValue.length;
console.log(`String Length: ${strLength}`);
export {};

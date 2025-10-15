// import * as readlineSync from "realine-sync";
import * as readlineSync from "readline-sync";


const name = readlineSync.question("what is your name? ");
console.log(`Hello, ${name}!`);


let marks: number[] = [];

let count: number = parseInt(readlineSync.questionInt("How many subjects? ") || "0");

for(let i=0;i<count;i++){
    marks[i] = parseInt(readlineSync.questionInt(`Enter marks for subject ${i+1}: `) || "0");
}

for(let i=0;i<count;i++){
    console.log(`Marks for subject ${i+1} is ${marks[i]}`);
}
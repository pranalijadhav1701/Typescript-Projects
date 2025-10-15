import readlineSync from 'readline-sync';
function AverageMarks(marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    let avg = total / marks.length;
    if (avg >= 90) {
        return ["A", avg];
    }
    else if (avg >= 80) {
        return ["B", avg];
    }
    else if (avg >= 70) {
        return ["C", avg];
    }
    else if (avg >= 60) {
        return ["D", avg];
    }
    else {
        return ["F", avg];
    }
}
let s1 = parseFloat(readlineSync.question("Enter marks for subject 1: ") || "0");
let s2 = parseFloat(readlineSync.question("Enter marks for subject 2: ") || "0");
let s3 = parseFloat(readlineSync.question("Enter marks for subject 3: ") || "0");
let s4 = parseFloat(readlineSync.question("Enter marks for subject 4: ") || "0");
let s5 = parseFloat(readlineSync.question("Enter marks for subject 5: ") || "0");
const result = AverageMarks([s1, s2, s3, s4, s5]);
console.log(`Grade: ${result[0]}, Average Marks: ${result[1]}`);

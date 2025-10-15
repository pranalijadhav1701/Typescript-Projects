"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cal_avg(marks) {
    let total = 0;
    let avg;
    // for(let i=0; i<marks.length;i++){
    //     if (marks[i] !== undefined) {
    //         total = total + marks[i];
    //     }
    // }
    for (const mark of marks) {
        total += mark;
    }
    avg = total / marks.length;
    if (avg >= 40) {
        return ["Pass", avg];
    }
    else {
        return ["Fail", avg];
    }
    // return ["Pass" , 100];
}
const result = cal_avg([45, 67, 89, 90, 23]);
console.log(`Result: ${result[0]} with Average: ${result[1]}`);
//# sourceMappingURL=1.js.map
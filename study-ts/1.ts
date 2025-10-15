function cal_avg(marks: number[]) : [string , number] {
    let total: number = 0;
    let avg: number;
    // for(let i=0; i<marks.length;i++){
    //     if (marks[i] !== undefined) {
    //         total = total + marks[i];
    //     }
    // }
    for (const mark of marks) {
        total += mark;
    }
    avg = total / marks.length;
    if(avg >= 40){
        return ["Pass" , avg];
    } else {
        return ["Fail" , avg];
    }
    // return ["Pass" , 100];
}


const result:[string,number] = cal_avg([45, 67, 89, 90, 23]);
console.log(`Result: ${result[0]} with Average: ${result[1]}`);
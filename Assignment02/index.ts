const promptSync = require("prompt-sync")();

// Function to calculate grade

const calculateGrade: (marks:number) => string = function(marks:number):string{
    let grade:string = marks < 33? 'F' : marks >= 33 && marks <= 60 ? 'D' : 
    marks > 60 && marks < 70 ? 'C' : marks >=70 && marks < 80 ? 'B' :
    'A'
    return grade
}

//taking input
const userMarks:number = promptSync("Enter your Marks.. ");

//printing the result
console.log(`Your grade is ${calculateGrade(userMarks)}`)
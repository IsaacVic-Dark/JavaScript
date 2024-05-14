// // Task 3
// Write a JavaScript function that determines a student's grade based on their total marks and the type of examination. The function should return a specific message based on the student's grade.

// Grading Criteria
// For a general examination:

// A+ grade: Total marks are between 89 and 100 inclusive. Return "Excellent job, you got an A+."
// A grade: Total marks are between 80 and 88 inclusive. Return "Good job, you got an A."
// B+ grade: Total marks are between 75 and 79 inclusive. Return "Well done, you got a B+."
// B grade: Total marks are between 70 and 74 inclusive. Return "Nice work, you got a B."
// C grade: Total marks are between 60 and 69 inclusive. Return "You got a C."
// Below C grade: Total marks are below 60. Return "You need to improve."
// For the "Final" examination:

// A+ grade: Total marks are 90 or above. Return "Excellent job, you got an A+."
// The other grade ranges remain the same as for a general examination.
// Function Requirements
// Write a function named checkGrade that takes two parameters:

// totalMarks (a number): The student's total marks.
// examType (a string): The type of examination ("Final" or any other type).
// The function should return a message based on the criteria above.

// function checkGrade(totalMarks, examType) {
// // Your code here
// }

// Examples
// checkGrade(95, 'Final')
// Output: "Excellent job, you got an A+."

// checkGrade(85, 'Final')
// Output: "Good job, you got an A."

// checkGrade(88, 'Midterm')
// Output: "Good job, you got an A."

// checkGrade(77, 'Midterm')
// Output: "Well done, you got a B+."

// checkGrade(65, 'Midterm')
// Output: "You got a C."

// checkGrade(55, 'Final')
// Output: "You need to improve."

// Implementation
// Implement the function to handle the described conditions and return the correct message based on the provided examples.


// let student_result = {final: 92, midterm: 95}
// let totalMarks = 187
// let student = {studentName: "Isaac", student_result}



function checkGrade(totalMarks, examType){
    if(examType === "midterm"){
        if(totalMarks >= 89){
            console.log("yes you have an A")
        }else if(totalMarks <= 88 && totalMarks >= 80){
            console.log("Good job, you got an A.")
        }else if(totalMarks <= 79 && totalMarks >= 75){
            console.log("Well done, you got a B+.")
        }else if (totalMarks <= 79 && totalMarks >= 75){
            console.log("Well done, you got a B+.")
        }else if (totalMarks <= 74 && totalMarks >= 70){
            console.log("Nice work, you got a B")
        }else if (totalMarks <= 60 && totalMarks >= 69){
            console.log("You got a C.")
        }else if (totalMarks <= 60){
            console.log("You need to improve.")
        }else{
            console.log("Invalid input for the midterm exam")
        }
    }else if(examType === "final"){
        if(totalMarks >= 90){
            console.log("Excellent job, you got an A+.")
        }else if(totalMarks <= 89 && totalMarks >= 80){
            console.log("Good job, you got an A.")
        }else if(totalMarks <= 79 && totalMarks >= 75){
            console.log("Well done, you got a B+.")
        }else if (totalMarks <= 79 && totalMarks >= 75){
            console.log("Well done, you got a B+.")
        }else if (totalMarks <= 74 && totalMarks >= 70){
            console.log("Nice work, you got a B")
        }else if (totalMarks <= 60 && totalMarks >= 69){
            console.log("You got a C.")
        }else if (totalMarks <= 60){
            console.log("You need to improve.")
        }else{
            console.log("invalid input for the final exam")
        }
    }else{
        console.log("Invalid exam examType")
    }
}
checkGrade(89,"final")
// 1.
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object
// :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output
// : name,sclass,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

let student_keys = Object.keys(student)
let studentArr = [];
for (let i =0;i<=student_keys.length-1;i++){
    studentArr.push(student_keys[i])
}
console.log(studentArr.join())

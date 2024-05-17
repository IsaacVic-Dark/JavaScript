// 3.
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object
// :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

let obj = {name: "kim", lname: "asd"}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

student_keys = Object.keys(student)

console.log(student_keys.length)
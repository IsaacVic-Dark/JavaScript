// 15.
// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

let studentDetail = {
    fname: "Isaac",
    lname: "Warui"
};
let studentList = Object.entries(studentDetail);
console.log(studentList);
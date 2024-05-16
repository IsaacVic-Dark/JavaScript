// 17.
// Write a JavaScript function to check whether an object contains a given property.

function checkProp(studentDetail, prop){
    return studentDetail.hasOwnProperty(prop);
}

let studentDetail = {
    fname: "Isaac",
    lname: "Warui"
};
console.log(checkProp(studentDetail, "fname"));
console.log(checkProp(studentDetail, "regno"));

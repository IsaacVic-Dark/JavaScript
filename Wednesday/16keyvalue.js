// 16.
// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

let studentDetail = {
    fname: "Isaac",
    lname: "Warui"
};

reversedObj = {};
function reverseObj(){
    for (let key in studentDetail){
        if (studentDetail.hasOwnProperty(key)){
            reversedObj[studentDetail[key]] = key;
        }
    }
    return reversedObj;
}
console.log(reverseObj(studentDetail));
// 13.
// Write a JavaScript function to retrieve all the names of an object's own and inherited properties.


let obj = {
    fname: "Isaac",
    lname: "Warui"
};


function objOwnInheritedProp(obj){

    let ownProp = Object.getOwnPropertyNames(obj);
    let inhProp = Object.getPrototypeOf(obj);
    let properties = [];
    properties = properties.concat(Object.getOwnPropertyNames(inhProp));
    return properties;
}
console.log(objOwnInheritedProp(obj));
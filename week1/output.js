// Question 3: What is the output of the following code. Explain

let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);


// Answer : 
// String One
// String One
// true

// Explain :
// obj[1] 1 is automatically converted to a string which is the same as obj['1']
// obj['1'] takes the One and changes the string to String One and this is why console.log(obj[1] === obj['1']); outputs true 
// write a program that checks for palindrom truthy
// if a string is palindrom , print the string word is a palindrom if not string word is not a palindrom e.g.., cat is not a palindrom / dad is a palindrom 

let animal = "cat"
let animalArr = []

let lowerCaseAnimal = animal.toLowerCase()

for (let i = 0; i < lowerCaseAnimal.length; i++){
    animalArr.push(lowerCaseAnimal[i])
}

// Reverse
let reversedArr = []
for (let y = animalArr.length-1; y >= 0; y--){
    reversedArr.push(animalArr[y])    
}

// concat reversed
let reveresedAnimal = ""
reversedArr.map((element)=>{
    reveresedAnimal = reveresedAnimal.concat(element)
})

// Check if it is a palindrom
if (lowerCaseAnimal === reveresedAnimal){
    console.log(`${animal} is a palindrom`);
}else{
    console.log(`${animal} is not a palindrom`);
}

// check on this methods
// subscript and superscript(string.sup)
// split
// slice
// repeat and replace

// repeat(), return a new string repeated the number of times defined. e.g..,
// let hungry = "hungry"
// console.log(hungry.repeat(3)); // Output: hungryhungryhungry

// replace(), removes a string let say string x and puts another string lets say string y in string x initial position
// syntax 
// replace("string_x", "string_y")
// let sentence = "we won"
// console.log(sentence.replace("we", "Arsenal")); // Output: Arsenal won

// subscript , sub() embeds a string in a <sub> element
// e.g.., 
// let myName = "Isaac"
// console.log(myName.sub());

// superscript, sup() embeds a string in a <sup> element
// e.g.., 
// let myName = "Warui"
// console.log(myName.sup());

// slice(), returns a section of a string and return a new string 
// syntax slice(stratingIndex, endingIndex)
// e.g..,
// let sentence = "I am a student"
// console.log(sentence.slice(3, 10)); // Output: m a stu

// split(), divides a string into an array of substrings based on specified separator string
// syntax split(separator, limit)
// e.g..,
// const sentence = "The quick brown fox jumps over the lazy dog";
// let separatedSentence = sentence.split(" ")
// console.log(separatedSentence); //Output: [    'The',   'quick',    'brown', 'fox',    'jumps', 'over',    'the',   'lazy',    'dog'  ]

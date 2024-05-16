// 7.
// Write a JavaScript program that returns a subset of a string.
// Sample Data:
// dog
// Expected Output:
// ["d", "do", "dog", "o", "og", "g"]

let text = "dog";
let textArr = []

for(i = 0; i < text.length; i++){
    for (let index = i+1; index <= text.length; index++) {
        textArr.push(text.slice(i, index))
    }
}
console.log(textArr)

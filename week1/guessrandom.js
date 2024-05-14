// Quiz One: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays the message "Good Work" if the input matches the guess number otherwise "Not matched".

let randomGuessNumber= Math.floor(Math.random()*10 + 1);
let guessNumber = prompt("Enter the guess number: ")

if(guessNumber <= 10 && guessNumber > 1){
    if(parseInt(guessNumber) === randomGuessNumber){
        alert("Good work")
    }else{
        alert("Not matched")
    }
} else {
    alert("Enter an integer between 1 and 10")
}
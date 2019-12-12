/* WORD GUESS GAME */

// The array of words for our game.
// var words = ['cat', 'dog', 'bird'];

// Keep track of guesses score
var guessRemain = 12;
var score = 0;
// var wordsIndex = 0;

// function renderWords() {
//     // If there are still more questions, render the next one.
//     if (wordsIndex <= (words.length - 1)) {
//       document.querySelector("#question").innerHTML = words[wordsIndex].q;
//     }
//     // If there aren't, render the end game screen.
//     else {
//       document.querySelector("#question").innerHTML = "Game Over!";
//       document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
//     }
//   }

// Event listener for keys
function keyPressGuess() {
    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = event.key.toLowerCase();

    // Only run this code if "e,v,r,l,o,n,g" were pressed.
    if (userInput === 'e') {
        document.querySelector("#letter-e").innerHTML = 'e';
        document.querySelector("#letter-e2").innerHTML = 'e';
        score++
    } if (userInput === 'v') {
        document.querySelector("#letter-v").innerHTML = 'v';
        score++
    } if (userInput === 'r') {
        document.querySelector("#letter-r").innerHTML = 'r';
        score++
    } if (userInput === 'l') {
        document.querySelector("#letter-l").innerHTML = 'l';
        score++
    } if (userInput === 'o') {
        document.querySelector("#letter-o").innerHTML = 'o';
        score++
    } if (userInput === 'n') {
        document.querySelector("#letter-n").innerHTML = 'n';
        score++
    } if (userInput === 'g') {
        document.querySelector("#letter-g").innerHTML = 'g';
        score++
    } if (score === 7) {
        document.querySelector("#results").innerHTML = '<div>You win!</div>';
    } else if (guessRemain === 0) {
        console.log('game over');
        document.querySelector("#score").innerHTML = 'Out of guesses!';
    } else {
        console.log('wrong!');
        guessRemain--
        console.log(guessRemain);
        document.querySelector("#score").innerHTML = guessRemain;
        letterGuessed = document.createElement("span");
        letterGuessed.innerHTML = userInput;
        document.querySelector("#letter-guessed").appendChild(letterGuessed);
    }
}

document.onkeyup = function(event) {
    keyPressGuess();
}

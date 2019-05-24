     // variables holding the number of wins, losses, guesses left, guesses so far, etc.
    var wins = 0;
    var losses = 0;
    var guessLeft = 9;
    var guessedLetters = [];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerGuess = "";

  
    // function for creating a new random number
    function randomNumber() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length -1)];
        console.log(computerGuess);
    }

    // function to reset the game
    function resetGame() {
        guessLeft = 9;
        guessedLetters = [];
        randomNumber();
    }

    // Variables that hold references to ids in HTML where we want to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessLeftText = document.getElementById("guess-left-text");
    var guessSoFarText = document.getElementById("guess-so-far-text");

// created a key press event listener
document.onkeyup = function(event) {
    // stores key the user press in a variable that I created
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

  if (computerChoices.includes(userGuess) && guessedLetters.includes(userGuess) === false){
      guessedLetters.push(userGuess);
      guessLeft--;
//   (alphabet.includes(userGuess)){

    if (userGuess === computerGuess) {
        wins++;
        resetGame();
    }

//   } else {
//         guessLeft--;
//         guessedLetters.push(" " + userGuess);
    
    // }

    else if (guessLeft === 0) {
        losses++;
        resetGame();

    }
}
// sets new text value in HTML and displays on webpage 
winsText.textContent = wins;
guessLeftText.textContent = guessLeft;
lossesText.textContent = losses;
guessSoFarText.textContent = guessedLetters;
   
};

  // create an if statement that checks whether the key is part of our alphabet
  // if (alphabet.includes(userKey)){

    // if the key is part of the alphabet, set the text value of div on our webpage we're 
    // using to display thecurrent key to that key
        // document.getElementById("user-key").textContent = userKey;

    // also store the key into the array we declared at the top of the file
        // userHistory.push(userKey);

    // finally set the text value of the key press history div to the array
  //         // document.getElementById("user-history").textContent = userHistory;
  // wins++;
  // winsText.push(wins);
  // // document.getElementById("wins-text").textContent = "Wins: " + wins;
  // resetGame();


//  if (userGuess !== computerGuess) {
//   guessLeft--;
//   // document.getElementById("guess-so-far-text").textContent = "Guess so far: " + guessSoFar; 
//   // guessLeft.innerHTML(guessSoFar);
//   console.log()
//   guessSoFar.push(userHistory);
//   // console.log(guessSoFar);
// }

// if the key is not part of our alphabet, change the current key div to ask the user to press
    // a key that's a letter within our alphabet
    // document.getElementById("user-key").textContent = "Please press a valid letter";


  // Hide the directions
  // directionsText.textContent = "";

  // Display the user and computer guesses, and wins/losses/ties.
  // winsText.innerHTML(wins);


  // userChoiceText.textContent = "You chose: " + userGuess;
  // computerChoiceText.textContent = "The computer chose: " + computerGuess;
  // winsText.textContent = "wins: " + wins;
  // lossesText.textContent = "losses: " + losses;
  // tiesText.textContent = "ties: " + ties;

    


// Reworked our code from last step to use "else if" instead of lots of if statements.

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

// </script>

// <!-- When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). -->


// declare a variable that is a string of all 26 lowercase letters in the english alphabet
// we can use a string in this situation because we're only checking against individual characters
// if we were to have to validate non-alphanumeric characters, we would have to use an array
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// This function is run whenever the user presses a key.

// Randomly chooses a choice from the options array. This is the Computer's guess.




// <!-- var guessLetter = event.key
// push variable

// userLetter.push(guessLetter) 

// function resetGame();
// everything goes back to zero

// point = push to inner html -->


          //javascript goes here!
          console.log("Hello, world!")

// this will be in a five round game that keeps score over time - each round should be the playRound function
// function playRound(playerSelection, computerSelection) {
    // your code here!
//  }

// this function will report a winner or loser at the end          
// The computer will have a choice of three random variables (rock paper scissors), called computerPlay
// 0 is rock, 1 is paper, 2 is scissors

let computerSelection = Math.floor (Math.random () *3)
console.log(computerSelection);


// Player input to select between three variables, rock paper and scissors, and save var as "playerSelection"
let playerSelection = prompt("Please enter your play");


// The computer will need to randomly choose bw those three variables as well and that value stored as "computerSelection"

// The game will be played (computerPlay) that will set playerSelection against computerSelection and return a string that declares the winner of the round like "You Lose! Paper beats Rock"
// playerSelection param should be case-insensitive
// if win, result will be a win message
//if lose, result will be a lose message

//function computerPlay = 
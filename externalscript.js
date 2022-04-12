// this will be in a five round game that keeps score over time - 

// this function will report a winner or loser at the end   
// we will start with both sides at 0
let playerScore = 0;
let computerScore = 0;       
// The computer will have a choice of three random variables (rock paper scissors), called computerPlay
// 0 is rock, 1 is paper, 2 is scissors


// The computer will need to randomly choose bw those three variables as well and that value stored as "computerSelection"
//    const arrayRPS = ["rock","paper","scissors"]; - moving to just rock to make it easier
function computerSelection() {
    const arrayRPS = ["rock","paper","scissors"];
    const computerChoice = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerChoice;
}

// Player input to select between three variables, rock paper and scissors, and save var as "playerSelection"
let playerSelection = prompt("Please make your play: rock, paper, or scissors!");
console.log(playerSelection);

// The game will be played (playRound) that will set playerSelection against computerSelection and return a string that declares the winner of the round like "You Lose! Paper beats Rock"
//for some reason everything is now "it's a tie"...
function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock") && (computerSelection === "rock")) {
    console.log("A Tie!");
  } 
  
  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!");
  } 
  
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Computer Wins!");
  } 
  
}

// playerSelection param should be case-insensitive

// if win, result will be a win message
// if lose, result will be a lose message

//function computerPlay = 
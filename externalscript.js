// this will be in a five round game that keeps score over time - 

// this function will report a winner or loser at the end   
    
// The computer will have a choice of three random variables (rock paper scissors), called computerPlay
// 0 is rock, 1 is paper, 2 is scissors


// The computer will need to randomly choose bw those three variables as well (computerPlay) and that value stored as "computerSelection"
// AT LEAST WE KNOW THIS WORKS!!!
function computerPlay() {
    let arrayRPS = ["rock", "paper", "scissors"];
    let computerChoice = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerChoice;
}

// The game will be played (playRound) that will set playerSelection against computerSelection and return a string that declares the winner of the round like "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
      return("tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
	  return("lose");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
	  return("win");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
	  return("win");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
	  return("tie");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
	  return("lose");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
	  return("lose");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
	  return("win");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
	  return("tie");
    } 
  } 

// we will start with both sides at 0
function game() {
  let playerScore = 0;
  let computerScore = 0;   
}

// Player input to select between three variables, rock paper and scissors, and save var as "playerSelection"
let playerSelection = prompt("Please make your play: rock, paper, or scissors!");
console.log(playerSelection);

//value stored as "computerSelection"
let computerSelection = computerPlay();


// console.log(playRound());


/* playerSelection param should be case-insensitive

// if win, result will be a win message
// if lose, result will be a lose message

// function computerPlay */
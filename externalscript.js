          //javascript goes here!
          console.log("Hello, world!")

// this will be in a five round game that keeps score over time - 

// this function will report a winner or loser at the end          
// The computer will have a choice of three random variables (rock paper scissors), called computerPlay
// 0 is rock, 1 is paper, 2 is scissors


// The computer will need to randomly choose bw those three variables as well and that value stored as "computerSelection"

function computerPlay() {
    const arrayRPS = ["rock","paper","scissors"];
    const computerSelection = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerSelection;
}

// Player input to select between three variables, rock paper and scissors, and save var as "playerSelection"
const playerSelection = prompt("Please make your play: rock, paper, or scissors!");


// The game will be played (computerPlay) that will set playerSelection against computerSelection and return a string that declares the winner of the round like "You Lose! Paper beats Rock"
// each round should be the playRound function
function playRound(playerSelection, computerSelection) {
  if (computerSelection == "0" &&  playerSelection == "Paper") {
      alert("Computer won :(");
  } else if (computerSelection == "1" &&  playerSelection == "Paper") {
      alert("Tie!");
  } else if (computerSelection == "2" &&  playerSelection == "Paper") {
     alert("You won!");
  } else {
     alert("how did you get this message???");
  }
}

// playerSelection param should be case-insensitive

// if win, result will be a win message
// if lose, result will be a lose message

//function computerPlay = 
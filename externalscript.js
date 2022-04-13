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


//prompt player to choose their selection
// let playerSelection = prompt("Choose your fighter: rock, paper, or scissors!")


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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

/* we will start with both sides at 0
function game() {
  let playerScore = 0;
  let computerScore = 0;   
  
  for (let i = 0; i < 1; i++) { */
  


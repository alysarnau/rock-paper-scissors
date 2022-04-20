
// The computer will need to randomly choose bw those three variables as well (computerPlay) and that value stored as "computerSelection"
function computerPlay() {
    let arrayRPS = ["rock", "paper", "scissors"];
    let computerChoice = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerChoice;
}


// the game function will nest the play Round for 5 times
function game () {
  let playerScore = 0;
  let computerScore = 0;  
// five rounds
//  for (let i = 0; i < 5; i++) {
// conditions for win lose tie
    function playRound(playerSelection, computerSelection) {
      if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return("tie");
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return("lose");
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return("win");
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return("win");
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return("tie");
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return("lose");
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return("lose");
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return("win");
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return("tie");
      } 
//    } 

    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors!")
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    switch (playRound(playerSelection, computerSelection)) {
      case "win":
        alert("Congrats, you won!");
        ++playerScore;
        console.log('Your score:' + playerScore);
        console.log('CPU score:' + computerScore);
        break;
      case "tie":
        alert("It's a tie!");
        console.log('Your score:' + playerScore);
        console.log('CPU score:' + computerScore);
        break;
      case "lose":
        alert("Boo, you lost!");
        ++computerScore;
        console.log('Your score:' + playerScore);
        console.log('CPU score:' + computerScore);
        break;
      default:
        alert("oops");
        }
    }

  if (playerScore > computerScore) {
    alert("You won! Woooooo!!!!!");
  } else if (computerScore > playerScore) {
    alert("You lose, booooooooo!");
  } else {
    alert("You got a somewhat statistically improbable tie. Well done, I guess!")
  }
}  

// const buttons, link all buttons to play a round of RPS
// const rock, link rock button to select rock
// const paper, link paper button to select paper
// const scissors, link scissors button to select scissors

// create div for Result section
// append this div to below .btns div
// this section should display the running score

// and at end of 5 rounds, display win lose tie message
// play audio cue?


  



// The computer will need to randomly choose bw those three variables as well (computerPlay) and that value stored as "computerSelection"
function computerPlay() {
    let arrayRPS = ["rock", "paper", "scissors"];
    let computerChoice = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerChoice;
}


// the game function will nest the play Round for 5 times
function game () {
  let playerScore = 0;
  let computerScore = 0;  }
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
    } 

    const computerSelection = computerPlay();
//    console.log(playRound(playerSelection, computerSelection));
/*
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
  } */
// }  


// assign consts for buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// see if basic event handlers work
rockBtn.addEventListener('click', function(e) {
    let playerSelection = "rock";
    console.log(playerSelection);
    
});

paperBtn.addEventListener('click', function(e) {
    let playerSelection = "paper";
    console.log(playerSelection);
});

scissorsBtn.addEventListener('click', function(e) {
    let playerSelection = "scissors";
    console.log(playerSelection);
})

/* create div for Result section
append this div to below .btns div
this section should display the running score
  
and at end of 5 rounds, display win lose tie message
*/
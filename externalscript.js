
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
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
});

paperBtn.addEventListener('click', function(e) {
    const playerSelection = "paper";
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    console.log(playRound);
});

scissorsBtn.addEventListener('click', function(e) {
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    console.log(playRound);
})

/* create div for Result section
append this div to below .btns div
this section should display the running score
  
and at end of 5 rounds, display win lose tie message
*/
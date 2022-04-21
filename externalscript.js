
// The computer will need to randomly choose bw those three variables as well (computerPlay) and that value stored as "computerSelection"
function computerPlay() {
    let arrayRPS = ["rock", "paper", "scissors"];
    let computerChoice = arrayRPS [Math.floor (Math.random () * arrayRPS.length)]
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

// the game function will nest the play Round for 5 times
function game () {
  let playerScore = 0;
  let computerScore = 0;  }
// conditions for win lose tie
    function whoWins(playerSelection, computerSelection) {
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

//updates player score display
function playRound(playerSelection,computerSelection) { 
  switch (whoWins(playerSelection, computerSelection)) {
      case "win":
        desc.textContent ="Congrats, you won!";
        ++playerScore;
        score.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
        break;
      case "tie":
        desc.textContent = "It's a tie!";
        score.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
        break;
      case "lose":
        desc.textContent = "Boo, you lost!";
        ++computerScore;
        score.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
        break;
      default:
        alert("oops");
        }

        let result = (`${computerScore} + ${playerScore}`)

        if (result = 5) {
          if (playerScore >= 3) {
              alert("Congrats, you won!");
          } else if (computerScore >= 3) {
              alert("Boo, you lost!");
          } else return;
      }
    };



// assign consts for buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const reset = document.querySelector('#reset');

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
});

scissorsBtn.addEventListener('click', function(e) {
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
})


reset.addEventListener('click', function (e) {
  location.reload();
})

const buttons = document.querySelector(".buttons");
// create desc for win lose per match
const desc = document.createElement('div');
buttons.appendChild(desc);
desc.setAttribute('class','desc');
// NEED TO SET THIS TO RESET?
// create div for score section
const score = document.createElement('div');
//append this div to below .btns div
buttons.appendChild(score);
//this section should display the running score
score.textContent = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
// CREATE DIV FOR FINAL RESULT
// REPLACE ALERT IN RESULT

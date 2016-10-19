

var userChoice = prompt("Do you choose lizard, spock, rock, paper or scissors?");
var computerChoice = Math.random();
var winnerText = "";


if (computerChoice <= 0.2) {
  computerChoice = "rock";
} else if (computerChoice <= 0.4) {
  computerChoice = "paper";
} else if (computerChoice <= 0.6) {
  computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
  computerChoice = "lizard";
} else {
  computerChoice = "spock";
}

var compare = function(userChoice, computerChoice) {
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" || userChoice === "spock" || userChoice === "lizard") {
    if (userChoice === computerChoice) {
      winnerText = "The result is a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        winnerText = "You Win! Rock beats Scissors.";
      } else if (computerChoice === "lizard") {
        winnerText = "You win! Rock crushes Lizard."
      } else if (computerChoice === "spock") {
        winnerText = "You lose! Spock vaporizes Rock."
      }
      else {
        winnerText = "You Lose! Paper beats Rock.";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        winnerText = "You Lose! Scissors beat Paper.";
      } else if (computerChoice === "lizard") {
        winnerText = "You lose! Lizard eats Paper."
      } else if (computerChoice === "spock") {
        winnerText = "You win! Paper disapproves of Spock."
      }
      else {
        winnerText = "You win! Paper beats Rock.";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        winnerText = "You win! Scissors beat Paper.";
      } else if (computerChoice === "lizard") {
        winnerText = "You win! Scissors decapitate Lizard."
      } else if (computerChoice === "spock") {
        winnerText = "You lose! Spock smashes Scissors."
      }
      else {
        winnerText = "You lose! Rock beats Scissors.";
      }
    } else if (userChoice === "lizard") {
      if (computerChoice === "paper") {
        winnerText = "You win! Lizard eats Paper.";
      } else if (computerChoice === "scissors") {
        winnerText = "You lose! Scissors decapitate Lizard."
      } else if (computerChoice === "spock") {
        winnerText = "You win! Lizard poisons Spock."
      }
      else {
        winnerText = "You lose! Rock crushes Lizard.";
      }
      // userChoice === spock
    } else {
      if (computerChoice === "paper") {
        winnerText = "You lose! Paper disapproves of Spock.";
      } else if (computerChoice === "lizard") {
        winnerText = "You lose! Lizard poisons Spock."
      } else if (computerChoice === "scissors") {
        winnerText = "You win! Spock smashes Scissors."
      }
      else {
        winnerText = "You win! Spock vaporizes Rock.";
      }
    }
  } else {
    alert("u dun goofd, enter either rock, paper, scissors, spock, or lizard");
  }
  document.getElementById('answer').innerHTML = winnerText;
  console.log(computerChoice + " " + userChoice);
}

function reset(){
  userChoice = prompt("Do you choose lizard, spock, rock, paper or scissors?");
  computerChoice = Math.random();


  if (computerChoice <= 0.2) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// reset();

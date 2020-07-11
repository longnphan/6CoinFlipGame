const outcomeOptions = ["heads", "tails"];
var playerScore = 0;
var computerScore = 0;

/// When player selects heads
function heads() {
  document.querySelector(".coin-outcome").innerHTML = "";
  document.querySelector("#coin-flip").classList.add("animate");
  let x = setInterval(randomOutcome, 2000);

  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());
    document.querySelector(".coin-outcome").innerHTML = `The outcome is ${outcomeOptions[random]}`;
    clearInterval(x);
       if (outcomeOptions[random] === "heads") {
        document.querySelector("#coin-flip").style.background = `url("./images/heads.png")`
         playerScore++;
       } else {
         document.querySelector("#coin-flip").style.background = `url("./images/tails.png")`;
         computerScore++;
       }
       updateScore();
  }
}
/// When player selects tails
function tails() {
  document.querySelector(".coin-outcome").innerHTML = "";
  document.querySelector("#coin-flip").classList.add("animate");
  let x = setInterval(randomOutcome, 2000);

  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());
    document.querySelector(".coin-outcome").innerHTML = `The outcome is ${outcomeOptions[random]}`;
    clearInterval(x);
       if (outcomeOptions[random] === "tails") {
        document.querySelector("#coin-flip").style.background = `url("./images/tails.png")`;
        playerScore++;;
       } else {
        document.querySelector("#coin-flip").style.background = `url("./images/heads.png")`
        computerScore++;
       }
       updateScore();
    }
}

// Updates the scoreboard after coin toss.
function updateScore() {
  document.querySelector(".player-score").innerHTML = playerScore;
  document.querySelector(".computer-score").innerHTML = computerScore;
  if (playerScore === 3) {
    alert("You Won!!!");
    reset();
  } else if (computerScore === 3) {
    alert("The Computer Won");
    reset();
  }
  }

// Reset scoreboard after game ends.
function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  document.querySelector(".coin-outcome").innerHTML = "";
}

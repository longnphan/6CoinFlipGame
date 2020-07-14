const outcomeOptions = ["heads", "tails"];
var playerScore = 0;
var computerScore = 0;

/// When player selects heads
function heads() {
  document.querySelector("#coin-flip").classList.add("animate");
  let pause = setInterval(randomOutcome, 2000);

  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());
    clearInterval(pause);
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
  document.querySelector("#coin-flip").classList.add("animate");
  let pause = setInterval(randomOutcome, 2000);

  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());

    clearInterval(pause);
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
    ///Set Timeout to allow the final score to update to three before alert is displayed.
    setTimeout(function () {
      alert("You Won!!!");
      reset();
    }, 100);

  } else if (computerScore === 3) {
    setTimeout(function () {
      alert("The Computer Won");
      reset();
    }, 100);
  }
}

// Reset scoreboard after game ends.
function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

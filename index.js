const outcomeOptions = ["heads", "tails"];
var playerScore = 0;
var computerScore = 0;

function heads() {
  document.querySelector("#coin-flip").classList.add("animate");
  let x = setInterval(randomOutcome, 2000);
  
  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());
    document.querySelector(".user-pick").innerHTML = `The outcome is ${outcomeOptions[random]}`;
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

function tails() {
  document.querySelector("#coin-flip").classList.add("animate");
  let x = setInterval(randomOutcome, 2000);
  
  function randomOutcome() {
    document.querySelector("#coin-flip").classList.remove("animate");
    let random = Math.round(Math.random());
    document.querySelector(".user-pick").innerHTML = `The outcome is ${outcomeOptions[random]}`;
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
}
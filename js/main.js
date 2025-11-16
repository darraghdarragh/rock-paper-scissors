// Hide popup when game loads
document.getElementById("winnerPopup").classList.add("hidden");
document.getElementById("resultBox").classList.add("hidden");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "You Lose!";
    computerScore++;
  }

  // Update new result UI
  document.getElementById("playerChoiceBox").textContent = `${playerChoice}`;
  document.getElementById("computerChoiceBox").textContent = `${computerChoice}`;
  document.getElementById("outcomeBox").textContent = result;

  document.getElementById("resultBox").classList.remove("hidden");

  // Update score UI
  document.getElementById("playerScore").textContent = `Player: ${playerScore}`;
  document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;

  checkWinner();
}

function checkWinner() {
  if (playerScore === 5) {
    showWinner("🎉 You Win the Game!");
  } else if (computerScore === 5) {
    showWinner("💀 Computer Wins the Game!");
  }
}

function showWinner(message) {
  document.getElementById("winnerMessage").textContent = message;
  document.getElementById("winnerPopup").classList.remove("hidden");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("playerScore").textContent = "Player: 0";
  document.getElementById("computerScore").textContent = "Computer: 0";

  document.getElementById("winnerPopup").classList.add("hidden");
  document.getElementById("resultBox").classList.add("hidden");
}

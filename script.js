// Script
// Variables For Buttons 👇
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let startGame = document.getElementById("start");
let endGame = document.getElementById("end");

// Variables For Points 👇
let computerPtn = document.getElementById("computerPtn");
let userPtn = document.getElementById("userPtn");
let computer_points = 0;
let user_points = 0;

// Variables for DOM 👇
let random_Guess_hai = document.getElementById("random_Guess_hai");
let result = document.getElementById("result");
let user_guess_hai = document.getElementById("user_guess_hai");

// StartGame Function 👇
startGame.addEventListener("click", () => {
  enableButtons();
  result.innerText = "Game Started";
});

// Variable Declaration 👇
let randomGuess;
let computerGuess;

// This helps the randomGuess to randomize the strings using computerGuess 👇
let randomGuessArray = ["rock", "paper", "scissor"];

rock.addEventListener("click", () => {
  randomGuess = Math.floor(Math.random() * 3);
  computerGuess = randomGuessArray[randomGuess];
  random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
  user_guess = "rock";
  user_guess_hai.innerText = `User Guess: ${user_guess}`;
  playGame(user_guess);
});

paper.addEventListener("click", () => {
  randomGuess = Math.floor(Math.random() * 3);
  computerGuess = randomGuessArray[randomGuess];
  random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
  user_guess = "paper";
  user_guess_hai.innerText = `User Guess: ${user_guess}`;
  playGame(user_guess);
});

scissor.addEventListener("click", () => {
  randomGuess = Math.floor(Math.random() * 3);
  computerGuess = randomGuessArray[randomGuess];
  random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
  user_guess = "scissor";
  user_guess_hai.innerText = `User Guess: ${user_guess}`;
  playGame(user_guess);
});

function playGame(user_guess) {
  if (user_guess == "rock" && computerGuess == "rock") {
    result.innerText = "It's a Draw";
  } else if (user_guess == "rock" && computerGuess == "paper") {
    result.innerText = "Computer Wins";
    computer_points++;
    computerPtn.innerText = `Computer Points: ${computer_points}`;
  } else if (user_guess == "rock" && computerGuess == "scissor") {
    result.innerText = "User Wins";
    user_points++;
    userPtn.innerText = `User Points: ${user_points}`;
  } else if (user_guess == "paper" && computerGuess == "rock") {
    result.innerText = "User Wins";
    user_points++;
    userPtn.innerText = `User Points: ${user_points}`;
  } else if (user_guess == "paper" && computerGuess == "paper") {
    result.innerText = "It's a draw";
  } else if (user_guess == "paper" && computerGuess == "scissor") {
    result.innerText = "Computer Wins";
    computer_points++;
    computerPtn.innerText = `Computer Points: ${computer_points}`;
  } else if (user_guess == "scissor" && computerGuess == "rock") {
    result.innerText = "Computer wins";
    computer_points++;
    computerPtn.innerText = `Computer Points: ${computer_points}`;
  } else if (user_guess == "scissor" && computerGuess == "paper") {
    result.innerText = "User Wins";
    user_points++;
    userPtn.innerText = `User Points: ${user_points}`;
  } else if (user_guess == "scissor" && computerGuess == "scissor") {
    result.innerText = "Draw";
  }
}

function enableButtons() {
  rock.addEventListener("click", () => {});
  paper.addEventListener("click", () => {});
  scissor.addEventListener("click", () => {});
}

function disableButtons() {
  rock.removeEventListener("click", () => {});
  paper.removeEventListener("click", () => {});
  scissor.removeEventListener("click", () => {});
}

endGame.addEventListener("click", () => {
  disableButtons();
  result.innerText = "Game Ended";
});

// Initially disable buttons
disableButtons();

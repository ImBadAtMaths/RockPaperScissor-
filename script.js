// Variables For Buttons 👇
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let startGame = document.getElementById("start");
let endGame = document.getElementById("end");

// Variables For Points 👇
let computerPtn = document.getElementById("computerPtn");
let userPtn = document.getElementById("userPtn");

// Variables for DOM 👇
let random_Guess_hai = document.getElementById("random_Guess_hai");
let result = document.getElementById("result");
let user_guess_hai = document.getElementById("user_guess_hai");

startGame.addEventListener("click", () => {
  let randomGuess;
  let user_guess;
  let randomGuessArray = ["rock", "paper", "scissor"];
  let computerGuess;
  let computer_points = 0;
  let user_points = 0;

  rock.addEventListener("click", () => {
    randomGuess = Math.floor(Math.random() * 3);
    computerGuess = randomGuessArray[randomGuess];
    random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
    user_guess = "rock";
    user_guess_hai.innerText = `User Guess: ${user_guess}`;
    if (user_guess && computerGuess == "rock") {
      result.innerText = "It's a Draw";
    } else if (user_guess && computerGuess == "paper") {
      result.innerText = "Computer Wins";
      computer_points++;
      computerPtn.innerText = `Computer Points: ${computer_points}`
    } else if (user_guess && computerGuess == "scissor") {
      result.innerText = "User Wins";
      user_points++;
      userPtn.innerText = `User Points: ${user_points}`
    }
  });

  paper.addEventListener("click", function () {
    randomGuess = Math.floor(Math.random() * 3);
    computerGuess = randomGuessArray[randomGuess];
    random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
    user_guess = "paper";
    user_guess_hai.innerText = `User Guess: ${user_guess}`;
    if (user_guess && computerGuess == "rock") {
      result.innerText = "User Wins";
      user_points++;
      userPtn.innerText = `User Points: ${user_points}`
    } else if (user_guess && computerGuess == "paper") {
      result.innerText = "It's a draw";
    } else if (user_guess && computerGuess == "scissor") {
      result.innerText = "Computer Wins";
      computer_points++;
      computerPtn.innerText = `Computer Points: ${computer_points}`
    }
  });

  scissor.addEventListener("click", function () {
    randomGuess = Math.floor(Math.random() * 3);
    computerGuess = randomGuessArray[randomGuess];
    random_Guess_hai.innerText = `Computer Guess: ${computerGuess}`;
    user_guess = "scissor";
    user_guess_hai.innerText = `User Guess: ${user_guess}`;
    if (user_guess && computerGuess == "rock") {
      result.innerText = "Computer wins";
      computer_points++;
      computerPtn.innerText = `Computer Points: ${computer_points}`
    } else if (user_guess && computerGuess == "paper") {
      result.innerText = "User Wins";
      user_points++;
      userPtn.innerText = `User Points: ${user_points}`

    } else if (user_guess && computerGuess == "scissor") {
      result.innerText = "Draw";
    }
  });
});

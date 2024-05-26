// DOM Manipulation Variables

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let randomGuess = document.getElementById("randomGuess")
let result = document.getElementById("result")

let startGame = document.getElementById('start');
let endGame = document.getElementById('end');

startGame.addEventListener("click", () => {

    let randomGuess;
    let user_guess;
    let randomGuessArray = ["rock", "paper", "scissor"];
    let computerGuess;


    rock.addEventListener("click", () => {
        randomGuess = Math.floor(Math.random() * 3);
        computerGuess = randomGuessArray[randomGuess]
        user_guess = "rock";
        if (user_guess && computerGuess == "rock") {
            result.innerText = "It's a Draw"
        }
        else if (user_guess && computerGuess == "paper") {
            result.innerText = "Computer Wins"
        }
        else if (user_guess && computerGuess == "scissor") {
            result.innerText = "User Wins"
        }
    });

    paper.addEventListener("click", function () {
        randomGuess = Math.floor(Math.random() * 3);
        computerGuess = randomGuessArray[randomGuess]
        user_guess = "paper";
        if (user_guess && computerGuess == "rock") {
            result.innerText = "User Wins"
        }
        else if (user_guess && computerGuess == "paper") {
            result.innerText = "It's a draw"
        }
        else if (user_guess && computerGuess == "scissor") {
            result.innerText = "Computer Wins"
        }
    });

    scissor.addEventListener("click", function () {
        randomGuess = Math.floor(Math.random() * 3);
        computerGuess = randomGuessArray[randomGuess]
        user_guess = "scissor";
        if (user_guess && computerGuess == "rock") {
            result.innerText = "Computer wins"
        }
        else if (user_guess && computerGuess == "paper") {
            result.innerText = "User Wins"
        }
        else if (user_guess && computerGuess == "scissor") {
            result.innerText = "Draw"
        }
    });
})


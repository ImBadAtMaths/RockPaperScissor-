        // DOM Manipulation Variables

        var rock = document.getElementById("rock")
        var paper = document.getElementById("paper")
        var scissor = document.getElementById("scissor")
        var randomGuess = document.getElementById("randomGuess")
        var result = document.getElementById("result")
        
        // assigning variables! 👇

        var randomGuess = Math.floor(Math.random() * 3);
        var randomGuessArray = ["rock", "paper", "scissor"];
        var userGuessArray = [];
        var computerGuess = randomGuessArray[randomGuess];
        console.log(computerGuess)

        // EventListeners For The Buttons! 👇

        rock.addEventListener("click", function () {
            playGame("rock")
        });

        paper.addEventListener("click", function () {
            playGame("paper")
        });

        scissor.addEventListener("click", function () {
            playGame("scissor")
        });

        // Function Required To Play The Game! 👇

        function playGame (userGuess){

            randomGuess.innerText = "Computer has chosen" + computerGuess

            if (userGuess == computerGuess){
                result.innerText = "Its a Draw 😑"
            } else if (userGuess == "paper" && computerGuess == "rock"){
                result.innerText = "Congratulations! You won! 😍"
            }
             else if (userGuess == "scissor" && computerGuess == "paper"){
                result.innerText = "Congratulations! You won! 😍"
            }
             else if (userGuess == "rock" && computerGuess == "scissor"){
                result.innerText = "Congratulations! You won! 😍"
            } 
             else if (userGuess == "rock" && computerGuess == "paper"){
                result.innerText = "You Lost! Your a failuer 🤣"
            } 
             else if (userGuess == "scissor" && computerGuess == "rock"){
                result.innerText = "You Lost! Your a failuer 🤣"
            } 
             else if (userGuess == "paper" && computerGuess == "scissor"){
                result.innerText = "You Lost! Your a failuer 🤣"
            } 
        };

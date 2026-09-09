function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let playerSelection;
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const endMessage = document.querySelector("#end-message")

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let random = getRandomInt(3);
    let computerChoice = "";
   switch(random) {
        case 0:
            computerChoice = "rock";
            break;

        case 1:
            computerChoice = "paper";
            break;

        case 2:
            computerChoice = "scissors";
            break;    
    } 
    return computerChoice;
}

function playRound() {
    let computerChoice = getComputerChoice();

    if (
        (playerSelection == "rock" && computerChoice == "scissors") ||
        (playerSelection == "paper" && computerChoice == "rock") ||
        (playerSelection == "scissors" && computerChoice == "paper")
        ) {
            results.textContent = `You win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
            
        } else if (playerSelection == computerChoice) {
            results.textContent = `It's a tie!`;

        } else {
            results.textContent = `You lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
    button.addEventListener("click", (event) => {
        switch (button.textContent) {
            case "Rock":
                playerSelection = "rock";
                break;
            case "Paper":
                playerSelection = "paper";
                break;
            case "Scissors":
                playerSelection = "scissors"
                break;
        }
        if (computerScore != 5 && playerScore != 5) {
            playRound()
            score.textContent = `SCORE: ${playerScore} : ${computerScore}`
        }

        if (computerScore === 5) {
            endMessage.textContent = "You lose! The CPU won."
        } else if (playerScore === 5) {
            endMessage.textContent = "You win! You beat the CPU!"
        }
    }))





// Implement 5 rounds
// Implement score
// Implement win-lose game
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    personChoice = prompt("Enter your choice: ");
    personChoice = personChoice.toLowerCase(); 
    return personChoice;
}

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

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            return 1;
            
        } else if (humanChoice == computerChoice) {
            console.log(`It's a tie!`);
            return 0;

        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            return 2;
        }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result === 1){
            humanScore++;
        } else if (result === 2) {
            computerScore++;
        }
        console.log(`Score: ${humanScore} : ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game :(")
    } 
}


playGame();
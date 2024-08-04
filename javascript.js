let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let ans = prompt("Please enter your choice from Rock, Paper, or Scissors: ");
    return ans;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else {
            console.log("You draw! Both played Rock!");
        }
    } else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "paper") {
            console.log("You draw! Both played Paper!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
    } else {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else if (computerChoice == "scissors") {
            console.log("You draw! Both played Scissors!");
        } else {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        }
    }
}

function playGame() {
    while (humanScore != 5 && computerScore != 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore == 5) {
        console.log("You win the game!!!");
    } else {
        console.log("You lost the game.");
    }
}

playGame();

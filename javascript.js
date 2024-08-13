let humanScore = 0;
let computerScore = 0;
let humanChoice="";

const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

const gameInfo = document.createElement("div");
const comScorePara = document.createElement("p");
const humanScorePara = document.createElement("p");
const computerPlayed = document.createElement("p");
const whoWonTheRound = document.createElement("p");

gameInfo.appendChild(comScorePara);
gameInfo.appendChild(humanScorePara);

gameInfo.style.fontFamily = "fantasy, Geneva, Tahoma, sans-serif";
gameInfo.style.display = "flex";
gameInfo.style.gap = "20px";
gameInfo.style.justifyContent = "space-around";

computerPlayed.style.textAlign = "center";
whoWonTheRound.style.textAlign = "center";

comScorePara.textContent = `Computer's Score: ${computerScore}`;
humanScorePara.textContent = `Your Score: ${humanScore}`;

container.insertBefore(gameInfo, buttons);
container.insertBefore(computerPlayed, buttons);
container.insertBefore(whoWonTheRound, buttons);

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => humanChoice = "rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => humanChoice = "paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => humanChoice = "scissors");
scissors.addEventListener("click", playRound);

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

function playRound() {
    let computerChoice = getComputerChoice();
    
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerPlayed.textContent = "Computer played Paper!";
            whoWonTheRound.textContent = "You lose! Paper beats Rock!";
            computerScore++;
        } else if (computerChoice == "scissors") {
            computerPlayed.textContent = "Computer played Scissors!";
            whoWonTheRound.textContent = "You win! Rock beats Scissors!";
            humanScore++;
        } else {
            computerPlayed.textContent = "Computer played Rock!";
            whoWonTheRound.textContent = "You draw! Both played Rock!";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            computerPlayed.textContent = "Computer played Paper!";
            whoWonTheRound.textContent = "You draw! Both played Paper!";
        } else if (computerChoice == "scissors") {
            computerPlayed.textContent = "Computer played Scissors!";
            whoWonTheRound.textContent = "You lose! Scissors beats Paper!";
            computerScore++;
        } else {
            computerPlayed.textContent = "Computer played Rock!";
            whoWonTheRound.textContent = "You win! Paper beats Rock!";
            humanScore++;
        }
    } else {
        if (computerChoice == "paper") {
            computerPlayed.textContent = "Computer played Paper!";
            whoWonTheRound.textContent = "You win! Scissors beats Paper!";
            humanScore++;
        } else if (computerChoice == "scissors") {
            computerPlayed.textContent = "Computer played Scissors!";
            whoWonTheRound.textContent = "You draw! Both played Scissors!";
        } else {
            computerPlayed.textContent = "Computer played Rock!";
            whoWonTheRound.textContent = "You lose! Rock beats Scissors!";
            computerScore++;
        }
    }

    comScorePara.textContent = `Computer's Score: ${computerScore}`;
    humanScorePara.textContent = `Your Score: ${humanScore}`;

    if(computerScore === 5) {
        computerPlayed.textContent = "The computer got the better of you!";
        whoWonTheRound.textContent = "Better luck next time!!!";
    }
    if(humanScore === 5) {
        computerPlayed.textContent = "The computer could not win against you!!!";
        whoWonTheRound.textContent = "You won the game!!! GREAT JOB!!!";
    }
}

// function playGame() {
//     while (humanScore != 5 && computerScore != 5) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if (humanScore == 5) {
//         console.log("You win the game!!!");
//     } else {
//         console.log("You lost the game.");
//     }
// }


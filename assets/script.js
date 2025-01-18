const buttonContainer = document.querySelector(".button-container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const userChoicePara = document.querySelector("#user-choice-para");
const computerChoicePara = document.querySelector("#computer-choice-para");
const winLosePara = document.querySelector("#win-lose-para")
const userScorePara = document.querySelector("#user-score-para");
const computerScorePara = document.querySelector("#computer-score-para");


const game = {
    userScore: 0,
    computerScore: 0,
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        computerChoice = "ROCK";
    } else if(randomNumber === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    };
    computerChoicePara.textContent = `COMPUTER CHOICE: ${computerChoice}`
    return computerChoice;
}

function compare(userChoice, computerChoice) {
    let winLose;
    if (userChoice === computerChoice) {
        winLose = "DRAW";
    } else if (userChoice === "ROCK" && computerChoice === "SCISSORS"
                ||
                userChoice === "PAPER" && computerChoice === "ROCK"
                ||
                userChoice === "SCISSORS" && computerChoice === "PAPER"
                ) {
                    ++game.userScore;
                    winLose = "WIN";
                } else {
                    ++game.computerScore;
                    winLose = "LOSS";
                }
    winLosePara.textContent = winLose;
    userScorePara.textContent = `USER SCORE: ${game.userScore}`;
    computerScorePara.textContent = `COMPUTER SCORE: ${game.computerScore}`;
}


function play(event) {
    let userChoice;
    if(event.target === rockBtn) {
        userChoice = "ROCK";
    } else if(event.target === paperBtn) {
        userChoice = "PAPER"
    } else if(event.target === scissorsBtn) {
        userChoice = "SCISSORS";
    }
    userChoicePara.textContent = `USER CHOICE: ${userChoice}`;
    const computerChoice = getComputerChoice();
    compare(userChoice, computerChoice);
}

buttonContainer.addEventListener("click", play);


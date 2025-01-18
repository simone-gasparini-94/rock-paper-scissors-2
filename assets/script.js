const container = document.querySelector(".container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

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
    console.log(`computer choice: ${computerChoice}`)
    return computerChoice;
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("DRAW");
    } else if (userChoice === "ROCK" && computerChoice === "SCISSORS"
                ||
                userChoice === "PAPER" && computerChoice === "ROCK"
                ||
                userChoice === "SCISSORS" && computerChoice === "PAPER"
                ) {
                    ++game.userScore;
                    console.log("WIN");
                } else {
                    ++game.computerScore;
                    console.log("LOSS");
                }
    console.log(`USER SCORE: ${game.userScore}`)
    console.log(`COMPUTER SCORE: ${game.computerScore}`)
}


function play(event) {
    let userChoice;
    if(event.target === rockBtn) {
        console.log("user choice: ROCK");
        userChoice = "ROCK";
    } else if(event.target === paperBtn) {
        console.log("user choice: PAPER");
        userChoice = "PAPER"
    } else if(event.target === scissorsBtn) {
        console.log("user choice: SCISSORS");
        userChoice = "SCISSORS";
    }
    const computerChoice = getComputerChoice();
    compare(userChoice, computerChoice);
}

container.addEventListener("click", play);


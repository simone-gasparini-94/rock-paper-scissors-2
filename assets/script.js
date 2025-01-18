const container = document.querySelector(".container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");


let userScore = 0;
let computerScore = 0;

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
                    ++userScore;
                    console.log("WIN");
                } else {
                    ++computerScore;
                    console.log("LOSS");
                }
    console.log(`USER SCORE: ${userScore}`)
    console.log(`COMPUTER SCORE: ${computerScore}`)
}


function play(event) {
    let userChoice;
    let computerChoice;
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
    computerChoice = getComputerChoice();
    compare(userChoice, computerChoice);
}

container.addEventListener("click", play);


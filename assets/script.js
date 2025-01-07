let userScore = 0;
let computerScore = 0;

let computerChoice;
let userChoice;

function getUserChoice() {
    let answer = prompt("your choice:");
    userChoice = answer.toUpperCase();
    console.log(`user choice: ${userChoice}`);
    return userChoice;
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

function playRound(userChoice, computerChoice) {
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

function playGame() {
    getUserChoice();
    if(userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
        console.log("wrong input");
        return;
    }
    getComputerChoice();
    playRound();
}

playGame();



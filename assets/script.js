let userScore = 0;
let computerScore = 0;


function getUserChoice() {
    let answer = prompt("your choice:");
    let userChoice = answer.toUpperCase();
    if(userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
        console.log("wrong input");
        getUserChoice();
    } else {
    console.log(`user choice: ${userChoice}`);
    return userChoice;
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        let computerChoice = "ROCK";
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
    getComputerChoice();
    playRound();
}

playGame();



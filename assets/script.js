let computerChoice;
let userChoice;

function getUserChoice() {
    let answer = prompt("your choice:");
    userChoice = answer.toUpperCase();
    console.log("your choice:")
    console.log(userChoice);
    getComputerChoice();
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
    console.log("computer choice:")
    console.log(computerChoice);
}

getUserChoice();


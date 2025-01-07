let computerChoice;
let humanChoice;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        computerChoice = "ROCK";
    } else if(randomNumber === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    };
    console.log(computerChoice);
}



function getHumanChoice() {
    let answer = prompt("YOUR CHOICE:");
    humanChoice = answer.toUpperCase();
    console.log(humanChoice);
}

getComputerChoice();
getHumanChoice();
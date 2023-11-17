const computerChoiceDisplay = document.getElementById("computer-choice");

const userChoiceDisplay = document.getElementById("user-choice");

const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;

let computerChoice;

let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCopmuterChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    generateResult();
    resultDisplay.innerHTML = result;
}))

function generateCopmuterChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if (randomNumber === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}

function generateResult() {
    if (userChoice === computerChoice) {

        result = 'Draw!'

    } else if ((userChoice === "Rock") ) {

        (computerChoice === "Scissors") ? result = "You won! :)" : result = "You lost! :("

    } else if (userChoice === "Scissors") {
        (computerChoice === "Paper") ? result = "You won! :)" : result = "You lost! :("

    } else if (userChoice === "Paper") {
        (computerChoice === "Rock") ? result = "You won! :)" : result = "You lost! :("
    }
}

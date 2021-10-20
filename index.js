
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
}

const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return 'paper'
    } else if (computerChoice === 1) {
        return 'rock'
    } else {
        return 'scissors'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It is a tie! Try again!'
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose! Try again!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'You lose! Try again!';
    } else if (userChoice === 'scissor' && computerChoice === 'rock') {
        return 'You lose! Try again!';
    } else if (userChoice === 'bomb') {
        return 'You blew up the opponent! You win!'
    } else {
        return 'You win! Congratulations!';
    }
}

const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();


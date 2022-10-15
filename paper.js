
const getComputerChoice = () => {
    let pcChoice = 0;
    pcChoice = Math.floor(Math.random() * 3);

    switch (pcChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'scissors';
        case 2:
            return 'paper';
    }
}
function playRound(playerSelection, computerSelection) {
    console.log(`Program choose ${computerSelection}`);
    console.log(`User choose ${playerSelection}`);
    if (playerSelection == computerSelection) {
        console.log(`its a draw, refresh the page and try again. ${playerSelection} equals ${computerSelection}`);
        uScore++;
        pcScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Congrats user, you won! ${playerSelection} beats ${computerSelection}`);
        uScore++;
    }
    else {
        console.log(`nah user, you lost! ${computerSelection} beats ${playerSelection}`);
        pcScore++;
    }
}

let playerSelection;
let computerSelection;
let uScore = 0, pcScore = 0;
const game = () => {

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Input your choice');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (uScore > pcScore) console.log(`Its over. Finally you won against pc in a tough match. its ${uScore} : ${pcScore} for you`);
    else if (uScore < pcScore) console.log(`Its over. Finally you lost against pc in a tough match. its ${uScore} : ${pcScore} for pc`);
    else console.log(`Its over. Finally you draw against pc in a tough match. its ${uScore} : ${pcScore}`);
    uScore = 0;
    pcScore = 0;
}
game();
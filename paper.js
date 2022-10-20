const info = document.querySelector('.info');
const info2 = document.querySelector('.info2');
const score = document.querySelector('.output');
const button = document.querySelector('.startButton');
const buttonRock = document.querySelector('.but1');
const buttonPaper = document.querySelector('.but2');
const buttonScissors = document.querySelector('.but3');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

let uScore = 0, pcScore = 0;

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

const playRound = (playerSelection, computerSelection) => {

    info2.textContent = `Program choose ${computerSelection}, User choose ${playerSelection}`;
    if (playerSelection == computerSelection) {
        info.textContent = `its a draw. ${playerSelection} equals ${computerSelection}`;
        uScore++;
        pcScore++;
        showScore(uScore, pcScore);

    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') {
        info.textContent = `Congrats user, you won! ${playerSelection} beats ${computerSelection}`;
        uScore++;
        showScore(uScore, pcScore);
    }
    else {
        info.textContent = `nah user, you lost! ${computerSelection} beats ${playerSelection}`;
        pcScore++;
        showScore(uScore, pcScore);
    }
    if (uScore == 5 || pcScore == 5) {
        evaluateGame(uScore, pcScore);
        uScore = 0;
        pcScore = 0;
        showScore(uScore, pcScore);
    }
    showScore(uScore, pcScore);

}

const evaluateGame = (uScore, pcScore) => {
    if (uScore > pcScore) info.textContent = `Its over. Finally you won against pc in a tough match. its ${uScore} : ${pcScore} for you`;
    else if (uScore < pcScore) info.textContent = `Its over. Finally you lost against pc in a tough match. its ${uScore} : ${pcScore} for pc`;
    else info.textContent = `Its over. Finally you draw against pc in a tough match. its ${uScore} : ${pcScore}`;
}

const showScore = (uScore, pcScore) => {

    score.textContent = `${uScore} : ${pcScore}`;
}
const showImages = (img1, img2, img3) => {

    img1.src = 'images/rock.jpg';
    document.querySelector('.rock').appendChild(img1);

    img2.src = 'images/paper.jpg';
    document.querySelector('.paper').appendChild(img2);

    img3.src = 'images/scissors.jpg';
    document.querySelector('.scissors').appendChild(img3);

}
const rockChoice = () => {

    playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
const paperChoice = () => {

    playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}
const scissorsChoice = () => {

    playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

const game = () => {
    showImages(img1, img2, img3);
    showScore(uScore, pcScore);

}

const disappearButton = () => { //disappear button and shows score
    button.style.display = 'none';
    game();
}

button.addEventListener('click', disappearButton);
buttonRock.addEventListener('click', rockChoice);
buttonPaper.addEventListener('click', paperChoice);
buttonScissors.addEventListener('click', scissorsChoice);
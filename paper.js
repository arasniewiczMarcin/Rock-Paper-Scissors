let info = document.querySelector('.info');
let info2 = document.querySelector('.info2');
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
    let score = document.querySelector('.output');
    score.textContent = `${uScore} : ${pcScore}`;
}
const showImages = (img1, img2, img3) => {

    img1.src = 'images/rock.jpg';
    document.getElementById('rock').appendChild(img1);

    img2.src = 'images/paper.jpg';
    document.getElementById('paper').appendChild(img2);

    img3.src = 'images/scissors.jpg';
    document.getElementById('scissors').appendChild(img3);

}
const userChoice = (img1, img2, img3) => {

    img1.onclick = () => {
        playerSelection = 'rock';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    img2.onclick = () => {
        playerSelection = 'paper';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    img3.onclick = () => {
        playerSelection = 'scissors';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

const game = () => {

    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    userChoice(img1, img2, img3);
    showImages(img1, img2, img3);
    showScore(uScore, pcScore);

}

const disappearButton = () => { //disappear button and shows score
    button.style.display = 'none';
    game();
}

const button = document.querySelector('#startButton');

button.addEventListener('click', disappearButton);

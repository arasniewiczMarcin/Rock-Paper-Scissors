

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

const evaluateGame = (uScore, pcScore) => {
    if (uScore > pcScore) console.log(`Its over. Finally you won against pc in a tough match. its ${uScore} : ${pcScore} for you`);
    else if (uScore < pcScore) console.log(`Its over. Finally you lost against pc in a tough match. its ${uScore} : ${pcScore} for pc`);
    else console.log(`Its over. Finally you draw against pc in a tough match. its ${uScore} : ${pcScore}`);
}

let uScore = 0, pcScore = 0;
const game = () => {

    while (uScore != 5 && pcScore != 5) {
        let playerSelection = prompt('Input your choice').toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    evaluateGame(uScore, pcScore);
    uScore = 0;
    pcScore = 0;
}

const disappearButton = () => { //disappear button and shows score
    button.style.display = 'none';
    score.style.display = 'block'
}
//game();
const button = document.querySelector('#startButton');

button.addEventListener('click', disappearButton);

let score = document.querySelector('.output');
let userChoice = document.createElement("div");
let compChoice = document.createElement("div");

score.style.display = 'none';
score.textContent = `${uScore} : ${pcScore}`;







/*Button start game
Input na stronce (daj placeholder input your choice) czy cos takiego
Daj 4 divy ktore populuje js 
User score (daj 0 w html js textcontent polacz z uscore)
PC score jak wyzej
User choice: rock (zamiast console logować daj w text content tego diva to co wybral)
PC choice jak wyzej
Do tych 4 divow najlepiej zrób funkcje oddzielne zeby nie robić 1 dużej funkcji (SRP) ktora bedzie populować te divy np const changeUserscore(uscore) => {..} moze overkill ale mnie bolal dlugo nawyk ogromnych funkcji
Jak gra sie skonczy mozesz te divy z choice wyjebac w jsie w sensie textcontent = ‘’ pusty string i dać final score czy coś winner
Generalnie zeby pocwiczyc sobie DOM Manipulation, addEventListener
*/
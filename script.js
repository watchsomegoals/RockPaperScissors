let rounds = 0;
let compWins = 0;
let humanWins = 0;

const round = document.querySelector('.rounds');
round.textContent = `Round: ${rounds}`;

const cpWins = document.querySelector('.compWins');
cpWins.textContent = `Computer wins: ${compWins}`;

const plWins = document.querySelector('.humanWins');
plWins.textContent = `Human wins: ${humanWins}`;

const container = document.querySelector('#container');
const content = document.createElement('div');
content.style.textAlign = "center";
container.appendChild(content);

function computerPlay(){
    let sign = ['Rock', 'Paper', 'Scissors'];
    return sign[Math.floor(Math.random() * 10) % sign.length];
}

function checkWinner(){
    if(compWins === 5){
        content.textContent = `Computer wins! ${compWins}-${humanWins}`;
        resetScore();
    }else if(humanWins === 5){
        content.textContent = `Human wins! ${humanWins}-${compWins}`;
        resetScore();
    }
}

function resetScore() {
    rounds = 0;
    compWins = 0;
    humanWins = 0;
    round.textContent = `Round: ${rounds}`;
    cpWins.textContent = `Computer wins: ${compWins}`;
    plWins.textContent = `Human wins: ${humanWins}`;
}

function playRoundRock(){
    let player = 'ROCK';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        humanWins++;
        plWins.textContent = `Human wins: ${humanWins}`;
        content.textContent = 'Computer chooses scissors! You win!';
    }else if(computer === 'PAPER'){
        compWins++;
        cpWins.textContent = `Computer wins: ${compWins}`;
        content.textContent = 'Computer chooses paper! Computer wins!';
    }else if(computer === 'ROCK'){
        content.textContent = 'Computer chooses rock! Draw!';
    }
    rounds++;
    round.textContent = `Round: ${rounds}`;
    checkWinner();
}

function playRoundPaper(){
    let player = 'PAPER';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        compWins++;
        cpWins.textContent = `Computer wins: ${compWins}`;
        content.textContent = 'Computer chooses scissors! Computer wins!';
    }else if(computer === 'PAPER'){
        content.textContent = 'Computer chooses paper! Draw!';
    }else if(computer === 'ROCK'){
        humanWins++;
        plWins.textContent = `Human wins: ${humanWins}`;
        content.textContent = 'Computer chooses rock! You win!';
    }
    rounds++;
    round.textContent = `Round: ${rounds}`;
    checkWinner();
}

function playRoundScissors(){
    let player = 'SCISSORS';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        content.textContent = 'Computer chooses scissors! Draw!';
    }else if(computer === 'PAPER'){
        humanWins++;
        plWins.textContent = `Human wins: ${humanWins}`;
        content.textContent = 'Computer chooses paper! You win!';
    }else if(computer === 'ROCK'){
        compWins++;
        cpWins.textContent = `Computer wins: ${compWins}`;
        content.textContent = 'Computer chooses rock! Computer wins!'; 
    }
    rounds++;
    round.textContent = `Round: ${rounds}`;
    checkWinner();
}

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', playRoundRock);

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', playRoundPaper);

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click',playRoundScissors);
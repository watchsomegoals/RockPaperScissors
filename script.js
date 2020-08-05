let rounds = 0;

function computerPlay(){
    let sign = ['Rock', 'Paper', 'Scissors'];
    return sign[Math.floor(Math.random() * 10) % sign.length];
}

function playRoundRock(){
    let player = 'ROCK';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        console.log('human');
    }else if(computer === 'PAPER'){
        console.log('computer');
    }else if(computer === 'ROCK'){
        console.log('draw'); 
    }
}

function playRoundPaper(){
    let player = 'PAPER';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        console.log('computer');
    }else if(computer === 'PAPER'){
        console.log('draw');
    }else if(computer === 'ROCK'){
        console.log('human'); 
    }
}

function playRoundScissors(){
    let player = 'SCISSORS';
    let computer = computerPlay().toUpperCase();
    if(computer === 'SCISSORS'){
        console.log('draw');
    }else if(computer === 'PAPER'){
        console.log('human');
    }else if(computer === 'ROCK'){
        console.log('computer'); 
    }
}





function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(i = 0; i < 5; i++){
        let player = window.prompt('Choose Paper, Rock or Scissors!');
        let computer = computerPlay();
        let winner = playRound(player, computer);
        if(winner === 0){
            console.log(`You win! ${player} beats ${computer}!`);
            playerWins++;
        }else if(winner === 1){
            console.log(`You lose! ${computer} beats ${player}!`);
            computerWins++;
        }else if(winner === 2){
            console.log(`Draw! ${player} against ${computer}!`);
        }
    }
    if(playerWins > computerWins){
        console.log(`You won! ${playerWins} against ${computerWins}.`);
    }else if(playerWins < computerWins){
        console.log(`You lost! ${playerWins} against ${computerWins}.`);
    }else if(playerWins === computerWins){
        console.log(`Draw! ${playerWins} against ${computerWins}.`);
    }
}

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', playRoundRock);

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', playRoundPaper);

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click',playRoundScissors);




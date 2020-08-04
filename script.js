function computerPlay(){
    let sign = ['Rock', 'Paper', 'Scissors'];
    return sign[Math.floor(Math.random() * 10) % sign.length];
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if(player === 'ROCK'){
        if(computer === 'SCISSORS'){
            return 0;
        }else if(computer === 'PAPER'){
            return 1;
        }else if(computer === 'ROCK'){
            return 2; 
        }
    }else if(player === 'PAPER'){
        if(computer === 'SCISSORS'){
            return 1;
        }else if(computer === 'PAPER'){
            return 2;
        }else if(computer === 'ROCK'){
            return 0; 
        }
    }else if(player === 'SCISSORS'){
        if(computer === 'SCISSORS'){
            return 2;
        }else if(computer === 'PAPER'){
            return 0;
        }else if(computer === 'ROCK'){
            return 1; 
        }
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
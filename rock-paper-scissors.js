let score = JSON.parse(localStorage.getItem('score'))

if (score === null) /* !score */ { 
    score = {
        Wins: 0,
        Losses: 0,
        Ties: 0
    };
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

updateScore();



function compMoves() {
    let randNum = Math.random();
    let compMove = '';

    if (randNum >= 0 && randNum < 1/3) {
        compMove = 'rock';
    } else if (randNum >= 1/3 && randNum < 2/3) {
        compMove = 'paper';
    } else if (randNum >= 2/3 && randNum < 1) {
        compMove = 'scissors'
    }

    return compMove;
}

function moves(move) {
    if (move === 'rock') {
        I = emojis/rock-emoji.png;
    } else if (move === 'paper') {
        I = emojis/paper-emoji.png;
    } else if (move === 'scissors') {
        I = emojis/scissors-emoji.png;
    }
}

function game(playerMove) {
    const compMove = compMoves();

    result = '';


    if (playerMove === 'rock') {
        if(compMove === 'rock') {
        result = 'Tie.';
        } else if (compMove === 'paper') {
            result = 'You lose.';
        } else if (compMove === 'scissors') {
            result = 'You win!';
        }
    } else if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'You win!';
        } else if (compMove === 'paper') {
            result = 'Tie.';
        } else if (compMove === 'scissors') {
            result = 'You lose.'
        }
    } else if (playerMove === 'scissors') {
        if (compMove === 'rock') {
        result = 'You lose.';
        } else if (compMove === 'paper') {
            result = 'You win!';
        } else if (compMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You win!') {
        score.Wins++;
    } else if (result === 'You lose.') {
        score.Losses++;
    } else {
        score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-moves').innerHTML = 
    `You 
    <img class="emoji" src="emojis/${playerMove}-emoji.png">
    <img class="emoji" src="emojis/${compMove}-emoji.png"> Computer`

    document.querySelector('.js-result').innerHTML = result;
}
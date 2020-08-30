var scores, roundScore, activePlayer, gamePlaying, dice1;

init();

document.querySelector('.btn-roll').addEventListener('click', function( ) {
    if(gamePlaying) {
     //1.Random Number
    var dice = Math.floor(Math.random()*6) + 1;
        
    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3.Updating the score IF the rolled number was not a 1 
    
    if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;    
    } else {
        
        nextPlayer();
    }
    dice1 = dice;
}});

document.querySelector('.btn-hold').addEventListener('click', function( ){
    if(gamePlaying) {
        
        //1.add current score to global score
        scores[activePlayer] += roundScore;
        
        //2.upadte the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //3. Check if a player won the game
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        if(scores[activePlayer] >= winningScore ) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer( );
        }
        
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
        
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Esha';
    document.getElementById('name-1').textContent = 'Chaitanya';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

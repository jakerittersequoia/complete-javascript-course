'use strict';

// select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameOn = true;

const newGame = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
  gameOn = true;
  activePlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
};

const newTurn = function(){
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};


// Roll Dice:
btnRoll.addEventListener('click',function(){
  if (gameOn){
    // generate a random dice roll
    var dice = Math.trunc(Math.random() * 6) + 1;
    // display the dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check for a 1
    if (dice === 1){
      // if true, switch to next Player
      newTurn();
    } else {
      // if false, add to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
  }
});

btnHold.addEventListener('click',function(){
  if (gameOn){
    // add active player's currentScore to score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check if it's 100
    if (scores[activePlayer] >= 20) {
      //if so, end the game
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      gameOn = false;
    } else {
      //if not, switch player
      newTurn();
    }
  }
});

btnNew.addEventListener('click', newGame());

newGame();

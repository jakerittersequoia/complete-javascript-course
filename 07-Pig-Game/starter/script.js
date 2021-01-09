'use strict';

// select elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const newGame = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll Dice:
btnRoll.addEventListener('click',function(){
  // generate a random dice roll
  var dice = Math.trunc(Math.random() * 6) + 1;
  // display the dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check for a 1
  if (dice === 1){
    // if true, switch to next Player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

  } else {
    // if false, add to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }


});

// Switch Player:

newGame();

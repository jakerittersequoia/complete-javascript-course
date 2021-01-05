'use strict';

const startText = 'Start guessing...'
const noGuessText = 'You must guess a number!';
const guessTooLowText = 'Too low! Guess again...';
const guessTooHighText = 'Too high! Guess again...';
const guessCorrectText = 'You guessed the correct number!';
const youLoseText = 'You lost the game!';
const upperLimit = 20;
let score = upperLimit;
let highScore = 0;
const betweenText = `(Between 1 and ${upperLimit})`;

// select a secret number:
const selectSecretNumber = function(upperLimit){
  return Math.trunc(Math.random()*upperLimit)+1
};

let secretNumber = selectSecretNumber(upperLimit);

const displayElementText = function(element, message){
  document.querySelector(`${element}`).textContent = message;
};

const showWin = function(){
  displayElementText('.message', guessCorrectText);
  displayElementText('.number', secretNumber);
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if(score > highScore) {
    highScore = score;
    displayElementText('.highscore', highScore);
  };
};

const showGame = function(){
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // player doesn't guess
    displayElementText('.message', noGuessText);
  } else if (guess === secretNumber) {
    // player wins
    showWin();
  } else if (guess !== secretNumber) {
    // guess is too high
    if (guess > secretNumber) {
      displayElementText('.message', guessTooHighText);
    } else {
      displayElementText('.message', guessTooLowText);
    }
    score--;
    displayElementText('.score', score);
  }

  if (score === 1){
    displayElementText('.message', youLoseText);
  }
});

document.querySelector('.again').addEventListener('click',function(){
  secretNumber = Math.trunc(Math.random()*upperLimit)+1;
  score = upperLimit;
  displayElementText('.between', betweenText);
  displayElementText('.message', startText);
  displayElementText('.score', score);
  displayElementText('.number', '?');
  showGame();
});

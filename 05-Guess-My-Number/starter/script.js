'use strict';

const noGuessText = 'You must guess a number!';
const guessTooLowText = 'Too low! Guess again...';
const guessTooHighText = 'Too high! Guess again...';
const guessCorrectText = 'You guessed the correct number!';
const youLoseText = 'You lost the game!';
const upperLimit = 20;
let score = upperLimit;

// select a secret number:
const secretNumber = Math.trunc(Math.random()*upperLimit)+1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // player doesn't guess
    document.querySelector('.message').textContent = noGuessText;
  } else if (guess === secretNumber) {
    // layer wins
    document.querySelector('.message').textContent = guessCorrectText;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    // guess is too high
    document.querySelector('.message').textContent = guessTooHighText;
    score--;
    if (score > 1) {
      document.querySelector('.message').textContent = noGuessText;
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    // guess is too low
    document.querySelector('.message').textContent = guessTooLowText;
    score--;
    document.querySelector('.score').textContent = score;
  }
});

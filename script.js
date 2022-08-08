'use strict';
// global variables
let secretNumber = Math.trunc(Math.random()*100) + 1;
let score = 100;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const changeStyle = function(bodyBackgroundStyle, numberStyle) {
  document.querySelector('body').style.backgroundColor = bodyBackgroundStyle;
  document.querySelector('.number').style.width = numberStyle;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input or bigger than 100
  if (!guess) {
    displayMessage('⛔ No Number !');
  } else if (guess > 100)  {
    displayMessage('⛔ Number bigger than 100 !');
  
  // when player wins
  } else if(guess === secretNumber){
    displayMessage('🎉 Correct Number, You Win !');
    document.querySelector('.number').textContent = secretNumber;
    changeStyle('#60b347', '30rem');
    
    // high score
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if(guess !== secretNumber){
    if(score > 1){
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You lost the game !');
      score = 0;
      document.querySelector('.score').textContent = score;
    } 
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random()*100) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  changeStyle('#222', '15rem');
});
const rockBtn = document.getElementById('option1');
const paperBtn = document.getElementById('option2');
const scissorsBtn = document.getElementById('option3');
const compScoreElem = document.querySelector('.comp_Score .zero');
const yourScoreElem = document.querySelector('.your_Score .zero');
const resultMessage = document.getElementById('resultMessage');
const rulesBtn = document.querySelector('.Rule_btn');
const rulesPopup = document.querySelector('.rules-popup');
const closeBtn = document.querySelector('.close-button, .rules-popup');

let playerScore = parseInt(sessionStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(sessionStorage.getItem('computerScore')) || 0;

yourScoreElem.textContent = playerScore;
compScoreElem.textContent = computerScore;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return (choices[Math.floor(Math.random() * choices.length)]); 

}



function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  let result = '';
  if (playerChoice === computerChoice) {
    result='tie'
    navigateToResultPage('tie');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    sessionStorage.setItem('playerScore', playerScore);
    yourScoreElem.textContent = playerScore;
    result = 'Win';
    navigateToResultPage('Win');
    celebrateWin();
  } else {
    computerScore++;
    sessionStorage.setItem('computerScore', computerScore);
    compScoreElem.textContent = computerScore;
    result = 'Loose';
    navigateToResultPage('Loose');
  }
  
  resultMessage.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Function to navigate to the result page based on the outcome
function navigateToResultPage(result) {
  if (result === 'Win') {
      window.location.href = 'win.html'; // Replace with your win page URL
  } else if (result === 'Loose') {
      window.location.href = 'loose.html'; // Replace with your lose page URL
  } else if (result === 'tie') {
      window.location.href = 'tie.html'; // Replace with your tie page URL
  }
}

function celebrateWin() {
  // Add your celebration animation here (e.g., confetti, sound, etc.)
  document.body.classList.add('celebrate');
  setTimeout(() => {
    document.body.classList.remove('celebrate');
  }, 2000);
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

rulesBtn.addEventListener('click', () => {
  rulesPopup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  rulesPopup.style.display = 'none';
});

// Get the rules from the image
const rulesText = document.querySelector('.rules .popup-content').textContent;

// Set the rules text in the rules popup
rulesPopup.querySelector('.popup-content p').textContent = rulesText;





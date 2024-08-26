// Add an event listener to the "Next" button
const nextButton = document.getElementById('nextButton');

// nextButton.addEventListener('click', function() {
//     // Navigate to the hurray.html page
//     window.location.href = 'home.html';
// });

// const line3 = document.getElementById('line3');
// line3.addEventListener('click', function() {
//     // Navigate to the hurray.html page
//     window.location.href = 'home.html';
// });

// document.getElementById('playerScore').textContent = localStorage.getItem('playerScore');
// document.getElementById('computerScore').textContent = localStorage.getItem('computerScore');



// document.addEventListener("DOMContentLoaded", function() {
//     // Set default values if not already set
//     if (!localStorage.getItem('playerChoice')) {
//         localStorage.setItem('playerChoice', 'rock');
//     }
//     if (!localStorage.getItem('computerChoice')) {
//         localStorage.setItem('computerChoice', 'rock');
//     }
//     if (!localStorage.getItem('playerScore')) {
//         localStorage.setItem('playerScore', '0');
//     }
//     if (!localStorage.getItem('computerScore')) {
//         localStorage.setItem('computerScore', '0');
//     }

//     // Get the player's and computer's choices and scores from localStorage
//     const playerChoice = localStorage.getItem('playerChoice');
//     const computerChoice = localStorage.getItem('computerChoice');
//     const playerScore = localStorage.getItem('playerScore');
//     const computerScore = localStorage.getItem('computerScore');

//     // Update the score display
//     document.querySelector('.playerScore').textContent = playerScore;
//     document.querySelector('.computerScore').textContent = computerScore;

//     // Map choices to the corresponding image paths
//     const choiceImages = {
//         'rock': 'icons/icons8-fist-67 1.png',
//         'paper': 'icons/icons8-hand-64 1.png',
//         'scissors': 'icons/icons8-peace-hand-67 1.png'
//     };

//     // Update the images based on the player's and computer's choices
//     const playerImage = document.querySelector('.opt1 img');
//     const computerImage = document.querySelector('.opt2 img');

//     if (playerChoice && computerChoice) {
//         playerImage.src = choiceImages[playerChoice];
//         computerImage.src = choiceImages[computerChoice];
//     }

//     // Event listener for the "Play Again" button
//     document.getElementById('line3').addEventListener('click', function() {
//         window.location.href = 'home.html'; // Redirect to the main game page
//     });

//     // Event listener for the "Next" button
//     document.getElementById('nextButton').addEventListener('click', function() {
//         window.location.href = 'hurray.html'; // Redirect to the next page
//     });

//     // Event listener for the "Rules" button
//     document.querySelector('.rules').addEventListener('click', function() {
//         alert('Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.');
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Get the player's and computer's choices from localStorage
    let playerChoice = sessionStorage.getItem('playerChoice');
    let computerChoice = sessionStorage.getItem('computerChoice');
    let playerScore = sessionStorage.getItem('playerScore');
    let computerScore = sessionStorage.getItem('computerScore');

    // Update the score display
    document.querySelector('.playerScore').textContent = playerScore;
    document.querySelector('.computerScore').textContent = computerScore;

    // Map choices to the corresponding image paths
   let choiceImages = {
        'rock': 'icons/icons8-fist-67 1.png',
        'paper': 'icons/icons8-hand-64 1.png',
        'scissors': 'icons/icons8-peace-hand-67 1.png'
    };

    // Update the images based on the player's and computer's choices
    let playerImage = document.querySelector('.opt1 img');
   let computerImage = document.querySelector('.opt2 img');

    if (playerChoice && computerChoice) {
        playerImage.src = choiceImages[playerChoice];
        computerImage.src = choiceImages[computerChoice];
    }

// document.getElementById('playerChoiceIcon').src = getIconSrc(playerChoice);
// document.getElementById('computerChoiceIcon').src = getIconSrc(computerChoice);

// function getIconSrc(choice) {
//     switch (choice) {
//         case 'rock':
//             return 'icons/icons8-fist-67 1.png'; // Replace with actual path to rock icon
//         case 'paper':
//             return 'icons/icons8-hand-64 1.png'; // Replace with actual path to paper icon
//         case 'scissors':
//             return 'icons/17911 1.png'; // Replace with actual path to scissors icon
//         default:
//             return ''; // Fallback if no choice
//     }
// }

    // Event listener for the "Play Again" button
    document.getElementById('line3').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to the main game page
    });

    // Event listener for the "Next" button
    document.getElementById('nextButton').addEventListener('click', function() {
        window.location.href = 'loose.html'; // Redirect to the next page, specific to a loss scenario
    });

    // Event listener for the "Rules" button
    document.querySelector('.rules').addEventListener('click', function() {
        alert('Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.');
    });
});

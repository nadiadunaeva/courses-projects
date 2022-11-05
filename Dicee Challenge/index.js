//players
let player1 = 'Player 1';
let player2 = 'Player 2';
document.querySelector('p.Player1').innerHTML = localStorage.getItem('player1');
document.querySelector('p.Player2').innerHTML = localStorage.getItem('player2');

function editNames() {
  player1 = prompt('Change Player1 name', 'Player 1');
  player2 = prompt('Change player2 name', 'Player 2');

  while (!player1) {
    player1 = prompt('Player1, Please enter your name!', '');
  }
  while (!player2) {
    player2 = prompt('Player2,Please enter your name!', '');
  }

  localStorage.setItem('player1', player1);
  localStorage.setItem('player2', player2);
}

function isRandom() {
  let randomLength = [1, 2, 3, 4, 5, 6];
  let randomNumber1 = Math.floor(Math.random() * randomLength.length) + 1;
  return randomNumber1;
}

let random = isRandom();
let random2 = isRandom();

let randomDiceImg = 'dice' + random + '.png'; //dice1.png - dice6.png
let randomImgSource = 'images/' + randomDiceImg; //images/dice1.png -
let img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src', randomImgSource);

let randomDiceImg2 = 'dice' + random2 + '.png';
let randomImgSource2 = 'images/' + randomDiceImg2;
let img2 = document.querySelectorAll('img')[1];
img2.setAttribute('src', randomImgSource2);

let dice = document.querySelectorAll('img');

if (random > random2) {
  document.querySelector('h1').innerHTML = `🏆 ${localStorage.getItem(
    'player1'
  )} Wins!`;
} else if (random2 > random) {
  document.querySelector('h1').innerHTML = `🏆 ${localStorage.getItem(
    'player2'
  )} Wins!`;
} else {
  document.querySelector('h1').innerHTML = 'Draw! 🏆';
}

document.querySelector('#total').innerHTML = `Your total score is: ${
  random + random2
}`;

function refreshPage() {
  window.location.reload();
}

dice.forEach(function (dicee) {
  dicee.classList.add('shake');
});

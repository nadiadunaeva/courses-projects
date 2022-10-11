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

if (random > random2) {
  document.querySelector('h1').innerHTML = '🏆 Player 1 Wins!';
} else if (random2 > random) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins! 🏆';
} else {
  document.querySelector('h1').innerHTML = 'Draw! 🏆';
}

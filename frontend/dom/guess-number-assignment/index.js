/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let randomNumber = Math.trunc(Math.random() * 10) + 1;
let message = document.querySelector('.message');
let displayScore = document.querySelector('.number');
let input = document.querySelector('.input');
let score = document.querySelector('.score');
score.innerHTML = 10;

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);

let newGameBtn = document.querySelector('.new-game');
newGameBtn.addEventListener('click', resetGame)

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  displayScore.innerHTML = "?";
  input.value = '';
  message.innerHTML = 'Lets start guessing...';
  score.innerHTML = 10;
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  // kalo inputnya kurang dari 1
  if(score.innerHTML > 0){
    if(input.value === '' || input.value == 0 || input.value < 0 || input.value > 10){
      displayMessage("Guess any number between 1 and 10");
    } else if(input.value == randomNumber) {
      displayMessage('You are correct!');
      displayScore.innerHTML = randomNumber;
    } else if(input.value > randomNumber) {
      displayMessage("Oww... that's too big!");
      score.innerHTML--;
    } else if(input.value < randomNumber) {
      displayMessage("Too small, buddy!");
      score.innerHTML--;
    }
  } if (score.innerHTML == 0) {
      displayMessage('You lose!');
    }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber
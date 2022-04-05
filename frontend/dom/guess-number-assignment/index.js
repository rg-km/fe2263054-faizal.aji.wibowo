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
const displayScore = document.querySelector('.score');
let score = 10;

const input = document.querySelector('.input');

const message = document.querySelector('.message');

let randomNumber = Math.trunc(Math.random() * 10) + 1;

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkNumber);

let newGameBtn = document.querySelector('.new-game');
newGameBtn.addEventListener('click', resetGame)

function displayMessage(msg) {
  // TODO: answer here

}

function resetGame() {
  // TODO: answer here
  score = 10;
  randomNumber = Math.trunc(Math.random() * 10) + 1;
  displayScore.textContent = 'Ayo tebak...';
  document.querySelector('.number').textContent = '?';
  score.textContent = score;
  input.value = '';
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  // kalo inputnya kurang dari 1
  if(input.value < 1 || input.value > 10) {
    message.textContent = 'Tebak angka diantara 1 sampai 10';

    // kalo inputnya sama dengan randomNumber
  } else if(input.value == randomNumber){
    document.querySelector('.number').textContent = randomNumber;
    message.textContent = 'Wow you got it man!';

    // kalo inputnya lebih tinggi dari randomNumber
  } else if(input.value > randomNumber){
    if (score < 1){
      message.textContent = 'Sorry, Kamu kalah';
    } else{
      message.textContent = 'Opps terlalu tinggi';
      score--;
      displayScore.textContent = score;
    }

    // kalo inputnya kurang dari randomNumber
  } else if (input.value < randomNumber){
    if(score < 1){
      message.textContent = 'Sorry, Kamu kalah';
    } else{
      message.textContent = 'Opps terlalu rendah';
      score--;
      displayScore.textContent = score;
    }
  }

}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber
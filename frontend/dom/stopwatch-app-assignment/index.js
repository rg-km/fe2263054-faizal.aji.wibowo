/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
const stopwatch = document.getElementById('stopwatch');

let startbtn = document.getElementById('start');
startbtn.addEventListener('click', start);

let stopbtn = document.getElementById('stop');
stopbtn.addEventListener('click', stop);

let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);


let hour = 0;
let minute = 0;
let second = 0;
let stoptime = true;

function start() {
  // TODO: answer here
  stoptime = false;
  runTime();
}

function stop() {
  // TODO: answer here
  stoptime = true;
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML = "00:00:00";
  stoptime = true;
  hour = 0;
  minute = 0;
  second = 0;
}

function runTime() {
  // TODO: answer here
  if (stoptime == false){
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second = second + 1;

    if (second == 60){
      minute = minute + 1;
      second = 0;
    }

    if (minute == 60){
      hour = hour + 1;
      minute = 0;
      second = 0;
    }

    if (second < 10 || second == 0){
      second = "0" + second;
    }
    if (minute < 10 || minute == 0){
      minute = "0" + minute;
    }
    if (hour < 10 || hour == 0){
      hour = "0" + hour;
    }

    stopwatch.innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(runTime, 1000);
  }
}
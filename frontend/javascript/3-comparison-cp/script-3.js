// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
// const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here

const prompt = require("prompt-sync")();
let nilai = parseInt(prompt("Masukan nilai: "));
let huruf;

switch (true) {
    case nilai >= 91 && nilai <= 100 : huruf = "A";
        break;
    case nilai >= 71 && nilai <= 90 : huruf = "B";
        break;
    case nilai >= 61 && nilai <= 70 : huruf = "C";
        break;
    case nilai >= 51 && nilai <= 60 : huruf = "D";
        break;
    case nilai >= 0 && nilai <= 50 : huruf = "E";
        break;
    default:
        huruf = "tidak ada";
}
console.log(huruf);

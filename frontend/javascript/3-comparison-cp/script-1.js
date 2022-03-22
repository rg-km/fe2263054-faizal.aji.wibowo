// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
// const x = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here

const prompt = require("prompt-sync")();
let x = parseInt(prompt('Masukkan bilangan : '));

if (x >= 0) {
    if (x == 0) {
        console.log("bilangan nol");
    } else {
        console.log("bilangan negatif");
    }
} else {
    console.log("bilangan positif");
}

// Menukar variabel a dan b dengan operator matematika
// * ALGORITMA
const prompt = require("prompt-sync")();
let a = prompt('Masukan variabel pertama: ');
let b = prompt('Masukan variabel kedua: ');

// TODO: answer here
[a, b] = [b, a];

console.log(`Nilai a setelah ditukar: ${a}`);
console.log(`Nilai b setelah ditukar: ${b}`);

// * PSEUDOCODE
// * LET a DISPLAY('Masukan variabel pertama: ')
// * LET b DISPLAY('Masukan variabel pertama: ')

// * SWAP A,B TO B,A

// * DISPLAY(`Nilai a setelah ditukar: ${a}`)
// * DISPLAY(`Nilai b setelah ditukar: ${b}`)
// Menukar variabel a dan b dengan operator matematika
const prompt = require("prompt-sync")();
let a = prompt('Masukan variabel pertama: ');
let b = prompt('Masukan variabel kedua: ');

// TODO: answer here
[a, b] = [b, a];

console.log(`Nilai a setelah ditukar: ${a}`);
console.log(`Nilai b setelah ditukar: ${b}`);
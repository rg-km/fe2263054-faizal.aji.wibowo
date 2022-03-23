// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
// const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
const prompt = require("prompt-sync")();
const n = parseInt(prompt("Masukan jumlah baris: "));

    let hasil = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            hasil += "*";
        }
        hasil += "\n";
        
    }
console.log(hasil);
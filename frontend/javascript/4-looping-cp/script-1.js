// Mengembalikan urutan bilangan, dan mengetahui bilangan kelipatan 3 dan kelipatan 5
// contoh:
// baris = 5
// hasil:
// 1
// 2
// 3 merupakan kelipatan 3
// 4
// 5 merupakan kelipatan 5
//
// catatam: ingat, 15 merupakan kelipatan 3 dan 5.


// Masukan jumlah bilangan yang ingin dicek, iterasi dari angka 1
// const prompt = require("prompt-sync")();
// const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

// TODO: answer here
const prompt = require("prompt-sync")();
const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

function kelipatan(counter){
    let hasil = '';
    for(let i=1; i<=counter; i++){
        if(i % 3 == 0 && i % 5 == 0){
        hasil = counter + ' merupakan kelipatan 3 dan 5';
      } else if(i % 3 == 0) {
        hasil = counter + ' merupakan kelipatan 3';
      } else if(i % 5 == 0) {
        hasil = counter + ' merupakan kelipatan 5';
      } else {
        hasil = counter + ' bukan merupakan kelipatan 3 ataupun 5';
        }
    }
    return hasil;
}
console.log(kelipatan(counter));

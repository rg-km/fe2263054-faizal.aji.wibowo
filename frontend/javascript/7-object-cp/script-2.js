// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

const angka1 = 10;
const angka2 = 5;

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  angka1: 0,
  angka2: 0,
  read(a, b){
    this.angka1 = a;
    this.angka2 = b;
  },
  // Penjumlahan
  sum() {
    return angka1 + angka2;
  },
  // Pengurangan
  substract() {
    return angka1 - angka2;
  },
  
  // Perkalian
  multiply() {
    return angka1 * angka2;
  },
  
  // Pembagian
  division() {
    return angka1 / angka2;
  }
};

calculator.read(angka1, angka2);
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());
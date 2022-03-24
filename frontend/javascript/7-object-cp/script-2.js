// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
  // Tulis kode di sini
  // TODO: answer here

  // Penjumlahan
  sum(angka1, angka2) {
    let hasil = angka1 + angka2;
    return `${hasil}`;
  },
  
  // Pengurangan
  substract(angka1, angka2) {
    let hasil = angka1 - angka2;
    return `${hasil}`;
  },
  
  // Perkalian
  multiply(angka1, angka2) {
    let hasil = angka1 * angka2;
    return `${hasil}`;
  },
  
  // Pembagian
  division(angka1, angka2) {
    let hasil = angka1 / angka2;
    return `${hasil}`;
  }
};
  
// calculator.read();
console.log(calculator.sum(3, 7));
console.log(calculator.substract(7, 3));
console.log(calculator.multiply(3, 3));
console.log(calculator.division(10, 2));
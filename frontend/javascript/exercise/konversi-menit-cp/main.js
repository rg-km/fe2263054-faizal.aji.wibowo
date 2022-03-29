/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal:
 * - 10 menjadi "0:10"
 * - 65 menjadi "1:05"
 * - 700 menjadi "11:40"
 *
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */

function konversiMenit(minutes) {
  // TODO: answer here
  let jam = Math.floor(minutes / 60);
  let menit = minutes % 60;

  if (menit < 10){
    menit = '0' + menit; 
  }
  return jam + ':' + menit;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;

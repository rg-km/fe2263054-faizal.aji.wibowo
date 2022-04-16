/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  return numbers.reduce((a, b) => {
    return a + b;
  });

  // cara lain:
  // return numbers.reduce((a, b) => a + b);
};

module.exports = sumTotalArray

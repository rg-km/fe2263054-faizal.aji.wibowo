/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  return max = numbers.reduce((arr, value) => {
    if (arr < value) {
      arr = value;
    }
    return arr;
  });
};

module.exports = maxFromArray
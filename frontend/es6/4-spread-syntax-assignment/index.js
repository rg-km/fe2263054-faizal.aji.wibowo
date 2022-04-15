/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
  let object = {};
  for (let key in firstObject) {
    object[key] = firstObject[key];
  }
  for (let key in secondObject) {
    object[key] = secondObject[key];
  }
  return object;
};

module.exports = mergeTwoObjects
/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
  const newObject = {...firstObject, ...secondObject};
  for (let key in firstObject) {
    newObject[key] = firstObject[key];
  }
  for (let key in secondObject) {
    newObject[key] = secondObject[key];
  }
  return newObject;
};

module.exports = mergeTwoObjects
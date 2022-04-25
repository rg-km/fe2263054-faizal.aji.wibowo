// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
  const str1Map = new Map();
  for (letter of str1) {
    if (str1Map.has(letter)) {
      str1Map.set(letter, str1Map.get(letter) + 1);
    } else {
      str1Map.set(letter, 1);
    }
  }

  const str2Map = new Map();
  for (letter of str2) {
    if (str2Map.has(letter)) {
      str2Map.set(letter, str2Map.get(letter) + 1);
    } else {
      str2Map.set(letter, 1);
    }
  }

  if (str1Map.size !== str2Map.size) {
    return false;
  } else if (str1Map.size === str2Map.size) {
    for (let [key, value] of str1Map) {
      if (str2Map.get(key) !== value) {
        return false;
      }
    }
    return true;
  }

  console.log(str1Map);
  console.log(str2Map);
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
  anagramChecker,
};

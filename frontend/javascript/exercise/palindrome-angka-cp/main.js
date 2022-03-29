/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

 function angkaPalindrome(num) {
  // TODO: answer here
  let angka1 = 1;
  let angka2 = 2;
  
  while (angka1 !== angka2) {
    num++
    let string = num.toString();
    angka1 = string.slice(0, Math.ceil(string.length/2));
    angka2 = string.slice(Math.floor(string.length/2), string.length).split('').reverse().join('');
  }
  return num;
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome
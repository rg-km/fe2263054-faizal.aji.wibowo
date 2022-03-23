// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

// masukan teks
const prompt = require("prompt-sync")();
const string = prompt('Enter a string: ');
// memanggil fungsi palindrom
const value = checkPalindrome(string);

function checkPalindrome(string) {
    // TODO: answer here
    const len = string.length;
    // loop melalui setengah dari string
    for (let i = 0; i < len / 2; i++) {
        // periksa apakah string pertama dan terakhir sama
        if (string[i] !== string[len - 1 - i]) {
            return 'Bukan teks palindrome';
        }
    }
    return 'Merupakan teks palindrome';
}
console.log(value);

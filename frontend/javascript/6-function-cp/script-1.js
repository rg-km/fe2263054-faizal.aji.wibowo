// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh
const prompt = require("prompt-sync")();
// take input from the user
const string = prompt('Masukan teks: ');
const result = reverseString(string);

function reverseString(str) {
    // TODO: answer here
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(result);

// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
  
  // cara lain:
  // return str.split("").map((char) => char + char).join("");
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += cb(str[i]).repeat(num);
  }
  return result;
  
  // cara lain:
  // return cb(str).split("").map((char) => char.repeat(num)).join("");
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}
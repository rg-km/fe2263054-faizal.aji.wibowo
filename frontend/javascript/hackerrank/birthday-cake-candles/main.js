// Birthday Cake Candles
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here
	// TODO: answer here
  let max = Math.max(...candles); 
  // three dot notation diatas buat ngambil semua value dari array 
  // console.log(max);

  let result = candles.filter(c => {
      return c === max;  
  });
  // menggunakan method filter 
  // untuk mengambil element array dengan return c === max (merupakan value tertinggi di array tsb)
  // array function di atas agar penulisan menjadi lebihh singkat
  
  return result.length;
}

function main() {
  //var n = parseInt(readLine());
  //ar = readLine().split(' ');
  //ar = ar.map(Number);
  var ar = [3, 2, 1, 3]; // override input
  var result = birthdayCakeCandles(ar);
  console.log(result);

}

main(); // execute program

module.exports = birthdayCakeCandles

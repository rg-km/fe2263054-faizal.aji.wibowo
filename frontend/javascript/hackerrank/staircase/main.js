// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let pattern = "";
  for (let i = 1; i <= n; i++) {
      // untuk spasi
      for (let j = 0; j < n-i; j++) {
          pattern += " ";
      }
      // untuk pattern #
      for (let k = 0; k < i; k++) {
          pattern += "#";
      }
      pattern += "\n";
  }
  return pattern;
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase
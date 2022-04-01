// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let min = 0;
  let max = 0;
  let sum = 0;

  for(let i=0; i<arr.length; i++){
    if(i < arr.length-1){
      min += arr[i];
    }
  }

  for(let j= arr.length-1; j > 0; j--){
      max += arr[j];
  }
  sum = min + " " + max;
  return sum;
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum
// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
    let format = s.substring(s.length - 2);
    let hours = s.substring(0, 2);
    let minutes = s.substring(2, 8);

    if (format == 'AM'){
        hours = hours == 12 ? '00' : hours;
    }
    if (format == 'PM'){
        hours = +hours + 12 < 24 ? +hours + 12 : '12';
    }
    return hours + '' + minutes;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion
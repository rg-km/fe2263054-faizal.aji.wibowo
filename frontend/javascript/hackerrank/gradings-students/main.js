// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  let result = [];
  
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade < 38) {
      result.push(grade);
      console.log("hasil grade < 38 yg gaboleh dirounding = " + grade);
    } else {
      let rounding = grade + (5 - grade % 5);
      if (rounding - grade < 3) {
        result.push(rounding);
        console.log("hasil rounding grade > 38 = " + rounding)
      } else {
        result.push(grade);
        console.log("hasil grade yg gaboleh dirounding (karna selisihnya 3 or lebih tinggi) = " + grade)
      }
    }
  }
  return result;
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents
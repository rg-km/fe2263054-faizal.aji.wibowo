/**
 * Kali ini kalian akan mengimplementasikan Method Chaining pada OOP dengan membuat sebuah Advance Calculator.
 * Class Calculator memiliki properti operand
 * Terdapat beberapa method yang perlu kalian buat diantaranya:
 * - `add` : untuk menambahkan operand yang diterima
 * - `subtract` : untuk mengurangi operand yang diterima
 * - `multiply` : untuk mengaklikan operand yang diterima
 * - `divide` : untuk membagi operand yang diterima
 * - `square` : untuk mencari pangkat dari operand yang diterima
 * - `squareRoot` : untuk mencari akar dari operand yang diterima
 * setiap method yang dibuat akan menerima argumen berupa integer
 */

class Calculator {
  constructor (operand) {
    this.operand = operand;
  }
  // TODO: answer here
  add(num) {
    this.operand += num;
    return this;
  }

  subtract(num) {
    this.operand -= num;
    return this;
  }

  multiply(num) {
    this.operand *= num;
    return this;
  }

  divide(num) {
    this.operand /= num;
    return this;
  }

  square(num) {
    this.operand = Math.pow(this.operand, num);
    return this;
  }

  squareRoot() { 
    this.operand = Math.sqrt(this.operand);
    return this;
  }
}
  const result = new Calculator(4);
  console.log(result.add(5));
  // console.log(result.subtract(2));
  // console.log(result.multiply(3));
  // console.log(result.divide(2));
  // console.log(result.square(2));
  // console.log(result.squareRoot(2));

module.exports = Calculator

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

  getValue() {
    return this.operand;
  }
}
  const calc = new Calculator(5);
  console.log(calc.add(5).subtract(2).multiply(3).divide(2).square(2).squareRoot());
  console.log(calc.getValue());
  // console.log(calc.subtract(2));
  // console.log(calc.multiply(3));
  // console.log(calc.divide(2));
  // console.log(calc.square(2));
  // console.log(calc.squareRoot(2));

module.exports = Calculator

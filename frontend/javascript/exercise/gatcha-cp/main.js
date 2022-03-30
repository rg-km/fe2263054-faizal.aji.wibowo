/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
// TODO: answer here
// START Function gatcha
//   IF button === 1
//     RETURN 'coba lagi ya'
//   ELSE IF button === 2
//     RETURN 'selamat kamu mendapatkan kupon sebanyak 5'
//   ELSE IF button === 3
//     RETURN 'selamat kamu mendapatkan kupon sebanyak 15'
//   ELSE IF button === 4
//     RETURN 'selamat kamu mendapatkan kupon sebanyak 50'
//   ELSE IF button === 5
//     RETURN 'selamat kamu mendapatkan kupon sebanyak 100'
// END Function gatcha

function gatcha(button) {
  // TODO: answer here
  // cara 1
  if (button === 1) {
    return 'coba lagi ya';
  } else if (button === 2) {
    return 'selamat kamu mendapatkan kupon sebanyak 5';
  } else if (button === 3) {
    return 'selamat kamu mendapatkan kupon sebanyak 15';
  } else if (button === 4) {
    return 'selamat kamu mendapatkan kupon sebanyak 50';
  } else if (button === 5) {
    return 'selamat kamu mendapatkan kupon sebanyak 100';
  }

  // cara 2
  // switch (button) {
  //   case 1: {
  //     return 'coba lagi ya';
  //   }
  //   case 2: {
  //     return 'selamat kamu mendapatkan kupon sebanyak 5';
  //   }
  //   case 3: {
  //     return 'selamat kamu mendapatkan kupon sebanyak 15';
  //   }
  //   case 4: {
  //     return 'selamat kamu mendapatkan kupon sebanyak 50';
  //   }
  //   case 5: {
  //     return 'selamat kamu mendapatkan kupon sebanyak 100';
  //   }
  // }

}

// Create variable button here
// TODO: answer here
let button = Math.floor(Math.random() * 5) + 1;
console.log(gatcha(button));
// console.log(button);

module.exports = gatcha

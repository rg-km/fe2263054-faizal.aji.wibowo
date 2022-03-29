// Buatlah fungsi yang mengembalikan nama bulan dari array berdasarkan nilai bilangan yang dikirim ke fungsi tersebut. 
// Jika nilainya tidak sesuai dengan bulan (1-12), kembalikan error 'Masukan salah. Input bulan antara 1-12'.
//
// Contoh 1
// Input: 3
// Output: "Bulan ke-3 adalah Maret"
//
// Contoh 2
// Input: 15
// Output: "Masukan salah. Input bulan antara 1-12"

  // TODO: answer here
  const prompt = require("prompt-sync")();
  const month = prompt('Masukan bulan (angka): ');
  const result = getMonth(month);

  function getMonth(number) {
    let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (number < 1 || number > 12) {
      return "Masukan salah. Input bulan antara 1-12";
    } else {
      return "Bulan ke-" + number + " adalah " + monthNames[number - 1];
    }
  }

  console.log(result);
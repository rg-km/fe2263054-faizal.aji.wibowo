// Deklarasikan nama variabel didalam block scope menggunakan let.
// Ubah nilai kota pada fungsi berikut ini, tanpa membuat variabel baru

function constantNoChange() {
  const kota = "Tanggerang";
  // TODO: answer here
  kota = "Tegal";
  {
    let kota = "Bandung";
    console.log(kota);
  }
  console.log(kota);
}

module.exports = constantNoChange


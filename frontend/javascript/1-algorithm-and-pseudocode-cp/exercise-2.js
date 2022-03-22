// Buatlah pseudocode untuk mengecek apakah seseorang dapat membuat SIM atau tidak.
// Seseorang diperbolehkan membuat SIM jika usianya lebih besar atau sama dengan 17 tahun.

// TODO: answer here
// * ALGORITMA
const prompt = require("prompt-sync")();
let usia = parseInt(prompt('Masukkan: '));

if (usia >= 17) {
    console.log("Umur "+ usia + " tahun" +" bisa membuat SIM");
} else {
    console.log("Umur "+ usia + " tahun" +" tidak bisa membuat SIM");
}

// * PSEUDOCODE

// * LET usia;
// * DISPLAY ("Masukkan Usia: ");
// * IF (usia >= 17)
// 	*	  	DISPLAY ("Umur "+ usia + " tahun" +" bisa membuat SIM");
// 	*  ELSE
// 	*		DISPLAY ("Umur "+ usia + " tahun" +" tidak bisa membuat SIM");

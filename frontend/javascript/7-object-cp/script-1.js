// Dari kode di bawah ini

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// buat kode untuk manipulasi data dalam objek berdasarkan instruksi berikut

// 1. Tulis perintah untuk menambahkan bahasa "Go" ke akhir array languages.
// 2. Ubah difficulty menjadi 7.
// 3. Menggunakan kata kunci delete, tulis perintah untuk menghapus key jokes dari objek programming.
// 4. Tulis perintah untuk menambahkan key baru yang disebut isFun dan nilai true ke objek programming.
// 5. Menggunakan loop, iterasi array languages dan console.log semua bahasa.
// 6. Menggunakan loop, console.log semua key dalam objek pemrograman.
// 7. Menggunakan loop, console.log semua value dalam objek pemrograman.

// TODO: answer here
console.log("\n nomor 1-4");
programming.languages.push('GO'); //nomor 1
programming.difficulty = 7; //nomor 2
delete programming.jokes; //nomor 3
programming.isFun = true; //nomor 4

console.log(programming);

// *************************************************** \\
console.log("\n nomor 5");
for (let i in programming.languages) {
    console.log(programming.languages[i]);
} //nomor 5

// *************************************************** \\
console.log("\n nomor 6");
for (let i in programming) {
    console.log(i);
} //nomor 6

console.log(" ");
// *************************************************** \\
console.log("\n nomor 7");
for (let i in programming) {
    console.log(programming[i]);
} //nomor 7
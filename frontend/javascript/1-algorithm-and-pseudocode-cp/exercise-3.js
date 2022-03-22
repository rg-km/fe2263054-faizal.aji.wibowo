// Buatlah pseudocode untuk menjumlahkan bilangan genap yang ada di antara 1 sampai 10

// TODO: answer here
// * ALGORITMA
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlah = 0; 
let genap = [];

for (let i = 0; i < angka.length; i++) {
    if(angka[i] % 2 == 0){
        genap.push(angka[i]); 
        jumlah += angka[i];
    }
}
console.log(genap);
console.log(jumlah);

// * PSEUDOCODE

// * VARIABLE angka ARRAY 1 TO 10 
// * VARIABLE jumlah 0
// * VARIABLE genap []

// * FOR LOOP (let i = 0; i < angka.length; i++)
// *    IF angka[i] % 2 == 0
// *       VARIABLE genap PUSH TO ARRAY angka
// *       VARIABLE jumlah SUM WITH ARRAY angka

// * DISPLAY VARIABLE genap
// * DISPLAY VARIABLE jumlah

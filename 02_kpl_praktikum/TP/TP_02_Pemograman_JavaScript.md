Soal

Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

const arr1 = [2, 0, 26, 28, -2];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {  
           result = result * arr[i];
       }
    }
    return result;
}

const arr1Result = mulOfArray(arr1);
console.log(arr1Result);

ada array bernama arr1 yang berisikan list angka [2, 0, 26, 28, -2]. kemudian saya membuat func, saya menginisiasi hasilnya pertamanya adalah 1, lalu agar mendapatkan hasil yang sesuai (1456), saya membuat perulangan yang didalamnya terdapat conditional dimana jika index arr[i] > 0 maka result = result * arr[i].

arr[i] > 0, mengartikan bahwa angka tidak boleh 0. yang menghasilkan 2 * 26 * 28 = 1456.
const arr1Result = mulOfArray(arr1) -> adalah variabel untuk menampung hasil func.
console.log(arr1Result) -> adalah untuk menampilkan hasil di terminal
# TUUGAS MANDIRI: LIBRARY CONTRUCTION

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Cobalah untuk menangkap kecacatan dalam kode berikut.

```javascript
function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  const str = data.toLowerCase();
  const num = parseInt(str);

  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }

  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();
```

## KODE SUMBER

Tersedia di [index.js](./index.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dilakukan analisis terhadap sebuah program JavaScript yang memiliki beberapa kecacatan dalam pengolahan data. Program mencoba memproses data dengan tipe yang berbeda seperti string, number, dan boolean.

Kecacatan utama terdapat pada fungsi processData, khususnya pada penggunaan method toLowerCase() yang hanya dapat digunakan pada tipe data string. Ketika program menerima data bertipe number atau boolean, program akan menghasilkan error karena method tersebut tidak tersedia pada tipe data selain string.

Selain itu, penggunaan parseInt() juga kurang tepat karena hanya membaca angka bulat dan mengabaikan nilai desimal. Sebagai contoh, nilai 78.9 akan diproses menjadi 78 sehingga menyebabkan perubahan data yang tidak sesuai.

Untuk memperbaiki masalah tersebut dilakukan pengecekan tipe data menggunakan typeof sebelum data diproses. Program juga menggunakan Number() agar dapat membaca angka desimal dengan benar. Dengan perbaikan tersebut, program menjadi lebih aman, fleksibel, dan dapat menangani berbagai tipe data tanpa menyebabkan error.

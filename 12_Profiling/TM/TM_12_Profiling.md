# TUUGAS MANDIRI: PROFILING

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Tambah dan tambah!

Fungsi di bawah ini melakukan penjumlahan pada penghitung (counter), yang sesederhana menambah jumlah jika menekan tombol.

### hitung.js

```javascript
function tambahPengitung(terkini, jumlah) {
  terkini = terkini + jumlah;
  return terkini;
}
```

### hitung.test.js

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import { tambahPengitung } from './hitung.js';

test('5 tambah 3 sama dengan 8', () => {
  assert.strictEqual(tambahPengitung(5, 3), 8);
});

test('0 tambah 10 sama dengan 10', () => {
  assert.strictEqual(tambahPengitung(0, 10), 10);
});
```

Bisakah kamu tunjukkan apakah kode sudah benar atau bagian mana yang perlu diperbaiki beserta alasannya?

## KODE SUMBER

Tersedia di [hitung.js](./hitung.js) dan [hitung.test.js](./hitung.test.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dilakukan analisis terhadap fungsi penjumlahan sederhana bernama tambahPengitung. Fungsi tersebut digunakan untuk menambahkan nilai jumlah ke nilai terkini dan mengembalikan hasil penjumlahan.

Secara logika, kode sudah berjalan dengan benar karena fungsi berhasil menghasilkan nilai sesuai dengan pengujian yang diberikan. Pada pengujian pertama, nilai 5 ditambah 3 menghasilkan 8. Pada pengujian kedua, nilai 0 ditambah 10 menghasilkan 10. Hal tersebut menunjukkan bahwa fungsi dasar penjumlahan sudah bekerja dengan baik.

Namun, terdapat beberapa bagian yang masih dapat diperbaiki. Salah satunya adalah fungsi belum menggunakan export sehingga fungsi tidak dapat diimpor pada file pengujian. Agar kode dapat digunakan pada hitung.test.js, fungsi perlu diekspor menggunakan export.

Perbaikan yang dilakukan:

```javascript
export function tambahPengitung(terkini, jumlah) {
  return terkini + jumlah;
}
```

Selain itu, penulisan:

```javascript
terkini = terkini + jumlah;
return terkini;
```

dapat disederhanakan menjadi:

```javascript
return terkini + jumlah;
```

karena nilai terkini tidak perlu diubah terlebih dahulu sebelum dikembalikan.

Dengan perbaikan tersebut, kode menjadi lebih ringkas, mudah dibaca, dan dapat digunakan pada proses pengujian menggunakan Node.js test runner.

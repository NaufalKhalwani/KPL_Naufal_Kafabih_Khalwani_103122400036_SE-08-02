# TUUGAS MANDIRI: API

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Buatlah satu endpoint lagi beserta dokumentasi OpenAPI-nya, yaitu GET /menu yang menampilkan daftar semua nama kategori menu yang ada.

## KODE SUMBER

Tersedia di [index.js](./index.js) dan [swagger.js](./swagger.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dilakukan pengembangan API sederhana menggunakan Express JS serta dokumentasi otomatis menggunakan Swagger (OpenAPI). Endpoint tambahan yang dibuat adalah GET /menu yang berfungsi untuk menampilkan seluruh kategori menu yang tersedia.

Data menu disimpan dalam sebuah objek JavaScript bernama menuData, yang berisi beberapa kategori seperti bakmi dan rames. Untuk mengambil daftar kategori, digunakan fungsi bawaan JavaScript yaitu Object.keys(), yang akan mengembalikan semua nama properti dari objek tersebut dalam bentuk array.

Endpoint /menu kemudian mengembalikan data dalam format JSON dengan properti kategori_tersedia yang berisi daftar kategori menu. Hal ini memudahkan client untuk mengetahui kategori apa saja yang tersedia sebelum mengakses endpoint yang lebih spesifik seperti /menu/:category.

Selain itu, endpoint ini juga didokumentasikan menggunakan Swagger dengan menambahkan anotasi komentar di atas fungsi endpoint. Dokumentasi ini memungkinkan API dapat diuji dan dipahami dengan lebih mudah melalui tampilan antarmuka Swagger UI pada endpoint /docs.

Dengan demikian, tugas ini menunjukkan penerapan konsep REST API, penggunaan Express JS, serta dokumentasi API menggunakan OpenAPI secara otomatis.

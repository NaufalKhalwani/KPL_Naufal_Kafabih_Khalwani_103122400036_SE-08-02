# TUUGAS MANDIRI: PEMOGRAMAN JAVA SCRIPT

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Buatlah pustaka JavaScript yang menyediakan utilitas berupa dua fungsi untuk menghitung jumlah huruf dan jumlah kata. Hanya alfabet A-Z yang dihitung (besar dan kecil), dan spasi tidak dihitung. Pustaka harus bisa diimpor.

## KODE SUMBER

Tersedia di [index.js](./index.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dibuat sebuah pustaka JavaScript sederhana yang menyediakan dua fungsi utilitas, yaitu untuk menghitung jumlah huruf dan jumlah kata dalam sebuah string.

Fungsi pertama adalah hitungHuruf, yang bertugas menghitung jumlah huruf alfabet (A-Z dan a-z). Fungsi ini menggunakan ekspresi reguler /[a-zA-Z]/g untuk mengambil semua karakter yang termasuk huruf, kemudian menghitung jumlahnya. Karakter selain huruf seperti angka, simbol, dan spasi tidak akan dihitung.

Fungsi kedua adalah hitungKata, yang digunakan untuk menghitung jumlah kata dalam string. Fungsi ini menggunakan ekspresi reguler /[a-zA-Z]+/g untuk mengambil kelompok huruf yang dianggap sebagai kata. Dengan demikian, hanya kata yang terdiri dari huruf saja yang akan dihitung.

Program ini juga menerapkan validasi input dengan memastikan bahwa parameter yang diberikan harus berupa string. Jika tidak, maka akan menghasilkan error.

Pustaka ini menggunakan sistem modul ES Module (ESM) dengan keyword export sehingga dapat diimpor ke file lain menggunakan import. Hal ini sesuai dengan konsep pustaka, yaitu kode yang dapat digunakan kembali oleh program lain.

Dengan demikian, pustaka ini memenuhi kriteria sebagai library sederhana yang reusable, modular, dan sesuai dengan kebutuhan pengolahan teks dasar.
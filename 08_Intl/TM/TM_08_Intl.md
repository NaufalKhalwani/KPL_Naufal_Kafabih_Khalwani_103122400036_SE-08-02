# TUUGAS MANDIRI: INTL

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Buat program yang menampilkan kurs rupiah (IDR) terhadap renminbi (CNY) dan euro (EUR) dengan mengambil data dari API. Simpan URL API ke dalam file .env sebagai BASE_API. Gunakan Intl untuk memformat nilai mata uang dan waktu saat pengambilan data kurs, serta hilangkan pesan promosi dari dotenv.

## KODE SUMBER

Tersedia di [index.js](./index.js) dan [.env](./.env)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada program ini dibuat sebuah sistem untuk menampilkan nilai tukar mata uang dari rupiah ke renminbi (CNY) dan euro (EUR). Program mengambil data kurs secara langsung dari API yang URL-nya disimpan di dalam file .env menggunakan variabel BASE_API. Hal ini merupakan penerapan konsep runtime configuration agar data sensitif atau konfigurasi tidak ditulis langsung di dalam kode.

Untuk membaca file .env digunakan library dotenv, yang kemudian mengisikan nilai variabel ke dalam process.env. Data kurs diambil menggunakan fetch, lalu diproses untuk mendapatkan nilai konversi dari rupiah ke mata uang tujuan.

Selain itu, program menggunakan fitur Intl pada JavaScript. Intl.NumberFormat digunakan untuk memformat angka menjadi format mata uang sesuai dengan standar masing-masing negara, seperti CNY dan EUR. Sedangkan Intl.DateTimeFormat digunakan untuk menampilkan tanggal sesuai format Indonesia.

Program juga dilengkapi dengan penanganan error menggunakan try...catch agar lebih aman ketika terjadi kesalahan saat mengambil data dari API.

Dengan demikian, program ini telah menerapkan konsep runtime configuration, penggunaan API, serta internationalization sehingga menghasilkan output yang rapi, fleksibel, dan sesuai standar lokal.
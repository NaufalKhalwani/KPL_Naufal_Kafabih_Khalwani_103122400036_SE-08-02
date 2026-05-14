# TUUGAS MANDIRI: PEMOGRAMAN JAVA SCRIPT

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Buatlah sebuah pustaka JavaScript bernama mtk-gampang yang memiliki struktur terpisah dan berisi tiga fungsi, yaitu pangkat(x, y), bulat(x), dan kuadrat(x). Fungsi harus berada di dalam folder lib dan hanya dapat diakses melalui index.js sebagai entry point.

## KODE SUMBER

Tersedia di [index.js](./index.js) dan folder [lib](./lib)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dibuat sebuah pustaka JavaScript bernama mtk-gampang yang berisi beberapa fungsi matematika sederhana. Struktur proyek dipisahkan menjadi beberapa file untuk menjaga kerapihan dan modularitas kode.

Terdapat tiga fungsi utama, yaitu pangkat, bulat, dan kuadrat. Masing-masing fungsi ditempatkan dalam file terpisah di dalam folder lib. Fungsi pangkat digunakan untuk menghitung perpangkatan suatu bilangan, fungsi bulat digunakan untuk mengubah bilangan desimal menjadi bilangan bulat dengan menghilangkan bagian desimal, dan fungsi kuadrat digunakan untuk menghitung akar kuadrat dari suatu bilangan.

Agar pustaka dapat digunakan dengan baik, semua fungsi diekspor melalui file index.js sebagai entry point utama. Dengan cara ini, pengguna pustaka hanya perlu mengimpor dari satu file tanpa harus mengakses file dalam folder lib secara langsung.

Pustaka ini menggunakan sistem modul ES Module (ESM) dengan keyword export dan import, sehingga dapat digunakan kembali pada proyek lain. Selain itu, pustaka ini juga dapat diinstal secara lokal menggunakan npm dengan menyebutkan direktori proyek.

Dengan pendekatan ini, kode menjadi lebih terstruktur, mudah dipelihara, dan sesuai dengan konsep pembuatan pustaka dalam pengembangan perangkat lunak.
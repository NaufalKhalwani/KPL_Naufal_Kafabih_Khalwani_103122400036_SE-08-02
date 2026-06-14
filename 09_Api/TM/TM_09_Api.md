# TUUGAS MANDIRI: API

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Buatlah sebuah API dengan satu endpoint POST / yang menerima input nama dan tebakan angka. API akan memberikan respon apakah tebakan benar, terlalu tinggi, atau terlalu rendah. Angka yang dihasilkan harus tetap untuk setiap nama, berada dalam rentang 1-100, dan bersifat case-sensitive.

## KODE SUMBER

Tersedia di [index.js](./index.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dibuat sebuah API sederhana menggunakan Express JS yang berfungsi sebagai permainan tebak angka. API hanya memiliki satu endpoint yaitu POST / yang menerima input berupa nama dan angka tebakan.

Program menggunakan pendekatan deterministik untuk menghasilkan angka yang konsisten berdasarkan nama yang diberikan. Hal ini dilakukan dengan menjumlahkan nilai ASCII dari setiap karakter pada nama, kemudian hasilnya dimodulo 100 dan ditambah 1 agar berada dalam rentang 1 sampai 100.

Dengan pendekatan ini, setiap nama akan selalu menghasilkan angka yang sama meskipun dilakukan permintaan berkali-kali. Selain itu, karena menggunakan nilai ASCII, sistem menjadi case-sensitive, sehingga nama "Hamid" dan "hamid" akan menghasilkan angka yang berbeda.

Setelah angka dihasilkan, program akan membandingkan nilai tebakan dengan angka tersebut. Jika sama, maka akan menampilkan pesan bahwa tebakan benar. Jika lebih besar, maka akan dianggap terlalu tinggi, dan jika lebih kecil maka dianggap terlalu rendah.

Program ini tidak menggunakan pustaka tambahan selain Express dan sepenuhnya mengandalkan logika perhitungan sederhana, sehingga sesuai dengan ketentuan tugas. Pendekatan ini juga menunjukkan penerapan konsep API, request-response, serta pengolahan data input secara langsung.

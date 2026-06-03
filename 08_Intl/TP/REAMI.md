# TUGAS PENDAHULUAN: INTL

Naufal Kafabih Khalwani  
103122400036  
SE-08-02  

Dosen Pengampu: Yudah Islami Sulistiya  

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown, Hammid Khaeruman  

---

## SOAL

Tampilkan tanggal sekarang dengan format seperti berikut:

Sabtu, 18 April 2026

Gunakan `Intl.DateTimeFormat` (tidak boleh menggunakan format string manual).

---

## KODE SUMBER

Tersedia di [index.js](./index.js)

---

## OUTPUT

Contoh hasil:

Sabtu, 18 April 2026

(Tanggal menyesuaikan waktu saat program dijalankan)

---

## DESKRIPSI

Pada tugas ini digunakan fitur Internationalization (i18n) di JavaScript, yaitu `Intl.DateTimeFormat`, untuk memformat tanggal sesuai dengan lokal tertentu.

Objek `Intl.DateTimeFormat` memungkinkan kita menampilkan tanggal dan waktu dalam format yang sesuai dengan bahasa dan wilayah tertentu. Dalam kasus ini, digunakan lokal `id-ID` agar hasil format mengikuti bahasa Indonesia.

Beberapa opsi yang digunakan dalam formatter:
- `weekday: 'long'` → menampilkan nama hari lengkap (misalnya: Sabtu)
- `day: 'numeric'` → menampilkan tanggal dalam angka
- `month: 'long'` → menampilkan nama bulan lengkap (misalnya: April)
- `year: 'numeric'` → menampilkan tahun

Pendekatan ini lebih baik dibandingkan format manual karena:
1. Menyesuaikan otomatis dengan bahasa dan wilayah
2. Menghindari kesalahan format
3. Lebih fleksibel dan scalable untuk aplikasi global

Selain itu, penggunaan Intl merupakan bagian dari konsep internasionalisasi (i18n), yaitu kemampuan aplikasi untuk mendukung berbagai bahasa dan format regional.

Dengan demikian, program ini dapat menampilkan tanggal dalam format yang benar dan konsisten di berbagai lingkungan tanpa perlu melakukan manipulasi string secara manual.

# TUUGAS MANDIRI: CLEAN CODE

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown, Hammid Khaeruman

## SOAL

Dari dua kode di bawah ini, mana yang kamu ingin cari masalahnya dan perbaiki di tengah-tengah malam, katakanlah jam 1 malam? Mengapa?

```javascript
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user)
      }
    }
  }
  return null
}
```

```javascript
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```

## KODE SUMBER

Tersedia di [index.js](./index.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dilakukan analisis terhadap dua implementasi fungsi `processUser` yang memiliki tujuan yang sama, yaitu memproses pengguna yang memenuhi syarat tertentu sebelum menjalankan fungsi `doSomething()`.

Kode pertama menggunakan beberapa kondisi `if` yang bersarang (nested if). Meskipun secara fungsi berjalan dengan benar, struktur tersebut membuat alur logika menjadi lebih sulit dibaca karena pengembang harus menelusuri beberapa tingkat kondisi untuk memahami syarat yang harus dipenuhi oleh pengguna.

Sebaliknya, kode kedua memisahkan proses validasi ke dalam fungsi `isValidCandidate()`. Dengan pendekatan ini, fungsi `processUser()` menjadi lebih ringkas dan fokus pada satu tanggung jawab, yaitu menentukan apakah proses dapat dilanjutkan atau tidak. Seluruh aturan validasi ditempatkan pada fungsi yang memiliki nama yang jelas sehingga maksud program lebih mudah dipahami.

Apabila harus mencari dan memperbaiki bug pada pukul 1 malam ketika kondisi sudah lelah dan konsentrasi berkurang, maka kode kedua lebih dipilih. Alasannya karena kode tersebut memiliki tingkat keterbacaan (readability) yang lebih baik dan lebih mudah dipahami dalam waktu singkat.

Selain itu, apabila di masa mendatang terdapat aturan baru, misalnya pengguna harus berusia minimal 18 tahun, perubahan cukup dilakukan pada fungsi `isValidCandidate()` tanpa perlu menambah tingkat nested yang membuat kode semakin kompleks.

Pendekatan pada kode kedua juga lebih sesuai dengan prinsip clean code, khususnya Single Responsibility Principle (SRP), karena fungsi validasi dipisahkan dari fungsi pemrosesan. Hal ini membuat kode lebih mudah diuji (testing), lebih mudah dirawat (maintainability), dan lebih mudah dikembangkan pada masa mendatang.

Berdasarkan analisis tersebut, kode kedua merupakan pilihan yang lebih baik untuk dipelihara dan diperbaiki karena lebih sederhana, lebih modular, dan lebih jelas dalam mengkomunikasikan tujuan program kepada pengembang lain maupun kepada diri sendiri di masa depan.

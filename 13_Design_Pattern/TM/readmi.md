# TUUGAS MANDIRI: PEMOGRAMAN JAVA SCRIPT

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Jelaskan dengan kemampuanmu apa itu event delegation dalam design pattern JavaScript.

## KODE SUMBER

```javascript
<ul id="menu">
  <li>Home</li>
  <li>Profile</li>
  <li>Logout</li>
</ul>
```

```javascript
const menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Menu dipilih:", event.target.textContent);
  }
});
```

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Event delegation adalah teknik dalam JavaScript yang digunakan untuk menangani banyak event dengan cara menempatkan event listener pada elemen parent, bukan pada setiap elemen child secara satu per satu.

Konsep ini memanfaatkan mekanisme bubbling pada JavaScript. Ketika sebuah elemen child diklik, event akan naik ke parent sehingga parent dapat menangkap event tersebut. Dengan cara ini, parent dapat mengetahui elemen mana yang memicu event melalui event.target.

Pada contoh kode di atas, event click tidak dipasang pada setiap tag li, melainkan hanya dipasang pada elemen ul dengan id menu. Ketika salah satu menu diklik, event akan diterima oleh ul lalu dicek apakah elemen yang diklik adalah tag LI.

Jika menggunakan cara biasa, setiap li harus diberi event listener sendiri seperti:

```javascript
const items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
```

Pendekatan tersebut sebenarnya dapat berjalan, namun kurang efisien jika jumlah elemen sangat banyak atau elemen dibuat secara dinamis.

Event delegation memiliki beberapa keuntungan, antara lain:

1. Mengurangi jumlah event listener sehingga penggunaan memori lebih hemat.
2. Kode menjadi lebih singkat dan mudah dirawat.
3. Dapat menangani elemen baru yang ditambahkan secara dinamis tanpa perlu menambahkan event listener lagi.
4. Cocok digunakan pada aplikasi yang memiliki banyak komponen interaktif.

Sebagai contoh, pada aplikasi todo list, item baru yang ditambahkan pengguna tetap dapat menerima event klik atau hapus tanpa perlu membuat event listener baru untuk setiap item.

Namun, event delegation juga perlu digunakan dengan hati-hati karena tidak semua event mendukung bubbling. Selain itu, developer perlu memastikan elemen target diperiksa dengan benar agar event tidak salah diproses.

Dapat disimpulkan bahwa event delegation merupakan teknik penting dalam JavaScript untuk membuat pengelolaan event menjadi lebih efisien, terstruktur, dan fleksibel, terutama pada aplikasi web yang memiliki banyak elemen dinamis.

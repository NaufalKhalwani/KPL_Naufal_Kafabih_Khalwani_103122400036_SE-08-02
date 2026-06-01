# Tugas Pendahuluan - Analisis Kecacatan Kode JavaScript

## Deskripsi Tugas

Pada tugas ini dilakukan analisis terhadap sebuah program JavaScript yang memiliki beberapa kecacatan (bug) dalam pengolahan data. Program awal mencoba memproses data campuran seperti string, number, dan boolean, namun terdapat kesalahan logika yang menyebabkan program error ketika dijalankan.

---

# Kode Awal

```javascript
function processData(data) {
  const str = data.toLowerCase();
  const num = parseInt(str);

  if (!isNaN(num) && str === String(num)) {
    return `Number: ${num * 2}`;
  }

  return `Teks: ${str} (panjangnya: ${str.length})`;
}
```

---

# Analisis Kecacatan

## 1. Tidak Ada Validasi Tipe Data

Kode langsung menggunakan:

```javascript
data.toLowerCase()
```

Padahal method `.toLowerCase()` hanya dapat digunakan pada tipe data string.

Ketika data berupa:

```javascript
456
true
```

program akan menghasilkan error:

```bash
TypeError: data.toLowerCase is not a function
```

---

## 2. Penggunaan `parseInt()` Kurang Tepat

Fungsi `parseInt()` hanya membaca angka bulat.

Contoh:

```javascript
parseInt("78.9")
```

hasil:

```javascript
78
```

Bagian desimal `.9` hilang sehingga data berubah.

---

## 3. Validasi Angka Kurang Fleksibel

Kondisi:

```javascript
str === String(num)
```

hanya cocok untuk angka bulat sederhana seperti:

```javascript
"123"
```

Namun beberapa data seperti:

```javascript
"001"
"78.9"
```

tidak diproses dengan baik.

---

# Perbaikan Kode

Perbaikan dilakukan dengan:

1. Menambahkan pengecekan tipe data menggunakan `typeof`
2. Menggunakan `Number()` agar dapat membaca angka desimal
3. Menangani tipe data yang tidak didukung

Kode hasil perbaikan:

```javascript
function processData(data) {

  if (typeof data === "number") {
    return `Number: ${data * 2}`;
  }

  if (typeof data === "string") {
    const str = data.toLowerCase();
    const num = Number(str);

    if (!isNaN(num)) {
      return `Number: ${num * 2}`;
    }

    return `Teks: ${str} (panjangnya: ${str.length})`;
  }

  return `Tipe data tidak didukung`;
}
```

---

# Hasil Program

```bash
Item 1: 123 -> Number: 246
Item 2: 456 -> Number: 912
Item 3: hello -> Teks: hello (panjangnya: 5)
Item 4: 78.9 -> Number: 157.8
Item 5: true -> Tipe data tidak didukung
```

---

# Kesimpulan

Kecacatan utama pada program adalah tidak adanya validasi tipe data sebelum pemrosesan dilakukan. Hal ini menyebabkan program gagal ketika menerima input selain string.

Perbaikan dilakukan dengan menambahkan pengecekan tipe data dan memperbaiki metode konversi angka sehingga program menjadi lebih aman dan fleksibel dalam menangani berbagai jenis input data.

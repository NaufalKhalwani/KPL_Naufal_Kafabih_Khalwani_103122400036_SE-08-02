# TUGAS MANDIRI: Parsing robots.txt

Naufal Kafabih Khalwani  
103122400036  
SE-08-02  

Dosen Pengampu: Yudah Islami Sulistiya  

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown, Hammid Khaeruman  

---

## SOAL

Buatlah fungsi untuk menguraikan isi file robots.txt menjadi objek JavaScript (POJO).

Properti yang harus diambil:
- User-agent → nama robot
- Allow → daftar halaman yang diperbolehkan
- Disallow → daftar halaman yang dilarang
- Sitemap → daftar URL sitemap

---


---

## KODE SUMBER

Tersedia di [index.js](./index.js)

---

## OUTPUT

Hasil parsing berupa objek JavaScript:

```json
{
  "userAgents": {
    "*": {
      "allow": ["/public"],
      "disallow": ["/admin"]
    }
  },
  "sitemap": ["https://example.com/sitemap.xml"]
}

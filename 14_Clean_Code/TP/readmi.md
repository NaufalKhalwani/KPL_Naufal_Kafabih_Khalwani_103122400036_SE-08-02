# TUUGAS MANDIRI: PEMOGRAMAN JAVA SCRIPT

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Kode berikut tampak baik dan bagus, tetapi menyalahi beberapa prinsip kode bersih. Lakukan refaktorisasi pada kode berikut.

```javascript
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const confirmBtn = modal.querySelector('#confirmOrderBtn');
        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

## KODE SUMBER

Tersedia di [index.js](./index.js)

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas ini dilakukan refaktorisasi terhadap kode JavaScript yang digunakan untuk mengambil detail pesanan dan menampilkan data pada modal.

Secara fungsi, kode awal sebenarnya sudah berjalan dengan baik. Namun, kode tersebut masih melanggar beberapa prinsip clean code karena memiliki fungsi yang terlalu panjang dan menangani terlalu banyak tanggung jawab dalam satu tempat.

Fungsi fetchOrderDetails melakukan beberapa pekerjaan sekaligus seperti mengambil data dari API, mengatur tampilan modal, membuat elemen HTML, menangani tombol close, dan menangani tombol konfirmasi. Hal tersebut menyebabkan kode menjadi sulit dibaca, sulit dirawat, dan sulit dikembangkan.

Untuk memperbaiki masalah tersebut, kode dipecah menjadi beberapa fungsi kecil sesuai tanggung jawab masing-masing. Proses pengambilan data dipindahkan ke fungsi getOrderDetails, tampilan modal dipisahkan ke displayOrderModal, dan rendering elemen dibuat menjadi fungsi terpisah seperti renderOrderHeader dan renderOrderStatus.

Selain itu, penggunaan .then() diubah menjadi async/await agar alur asynchronous lebih mudah dipahami dan terlihat lebih rapi.

Refaktorisasi juga memperbaiki penggunaan event listener. Pada kode awal, addEventListener dipanggil setiap modal dibuka sehingga berpotensi menyebabkan event listener menumpuk. Pada kode hasil refaktorisasi digunakan onclick agar event sebelumnya digantikan dan tidak terjadi duplikasi.

Dengan refaktorisasi tersebut, kode menjadi lebih modular, lebih mudah dibaca, lebih mudah dipelihara, dan lebih sesuai dengan prinsip clean code seperti single responsibility principle dan readability.

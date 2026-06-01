# TUUGAS PENDAHULUAN: DESIGN PATTERN

Naufal Kafabih Khalwani

103122400036

SE-08-02

Dosen Pengampu: Yudah Islami Sulistiya

Asisten Praktikum: Adhiansyah Muhammad Pradana Frawown. Hammid Khaeruman

## SOAL

Bukalah repository kode tugas besar dan carilah satu design pattern yang digunakan di dalamnya. Sertakan kode dan jelaskan desainnya.

## KODE SUMBER

Tersedia di repository GitHub berikut:

https://github.com/NaufalKhalwani/Food-Waste

Contoh kode yang menggunakan design pattern:

### user.controller.js

```javascript
const UserServices = require('../services/user.services')

exports.register = async(req,res,next)=>{
    try {
         const {email,password,nama} = req.body;

         const successRes = await UserServices.registerUser(email,password,nama);

         res.json({
            status:true,
            success:"User berhasil diregistrasi"
         });

    } catch (error) {
        throw error;
    }
}
```

### user.services.js

```javascript
const UserModel = require('../model/user.model');

class UserService {
    static async registerUser(email,password,nama){
        try {
            const createUser = new UserModel({email,password,nama});
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;
```

## OUTPUT

![Gambar yang menunjukan code sumber dan pratampil Markdown](image.png)

## DESKRIPSI

Pada tugas besar Food-Waste ditemukan penggunaan design pattern berupa Service Pattern. Pattern ini digunakan untuk memisahkan logika bisnis dari controller agar kode menjadi lebih terstruktur dan mudah dikelola.

Pada file user.controller.js, controller hanya bertugas menerima request dari pengguna, mengambil data dari req.body, kemudian memanggil fungsi yang terdapat pada UserServices. Controller tidak langsung menangani proses penyimpanan data ke database.

Proses bisnis dipindahkan ke file user.services.js. Pada file tersebut terdapat class UserService yang memiliki fungsi registerUser untuk melakukan proses pembuatan user baru dan menyimpan data ke database menggunakan UserModel.

Dengan pendekatan ini, controller menjadi lebih sederhana karena hanya menangani alur request dan response. Sementara itu, logika bisnis ditempatkan pada service sehingga lebih mudah digunakan kembali pada bagian lain aplikasi.

Design pattern ini memiliki beberapa keuntungan, seperti kode lebih rapi, mempermudah maintenance, mengurangi duplikasi kode, dan membuat pengembangan aplikasi menjadi lebih scalable. Selain itu, pemisahan tanggung jawab antara controller dan service juga membuat proses debugging dan testing menjadi lebih mudah dilakukan.

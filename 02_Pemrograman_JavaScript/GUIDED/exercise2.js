/**
 * Buatlah sebuah array berisi 3 minuman favorit dan simpan dalam variabel bernama minuman, 
 * setelah itu, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan, 
 * lalu tambahkan minuman baru kedepan array
 */

const minuman = [
    "Aqua", "Lemineral", "Cleo"
]

minuman[0] = "Coca Cola"
minuman[1] = "Es Teh"

minuman.unshift("Teh Gelas")

// for (let i = 0; i < minuman.length; i++) {
//     minuman[i] = i <= 0 
//         ? "Coca Cola" 
//         : minuman[i] == minuman[1] 
//             ? "Es Teh" 
//             : minuman[i]
// }

console.log(minuman)
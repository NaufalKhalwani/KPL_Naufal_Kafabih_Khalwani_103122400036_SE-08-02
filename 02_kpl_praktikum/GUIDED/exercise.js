// Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penju
// mlahan dari 1 hingga N. Contohnya, jika N adalah 5, maka fngsi akan 
// mencetak 15 (1+2+3+4+5).

function penjumlahan(N){
    let total = 0;
    for (i = 0; i <= N; i++){
        total += i
    }

    return total
}

console.log(penjumlahan(5))
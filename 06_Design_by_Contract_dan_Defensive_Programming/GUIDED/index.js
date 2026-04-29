let print = console.log;

function div(a, b){

    if (typeof a !== 'number' || typeof b !== 'number'){
        return print("Input harus angka!");
    }

    if (b === 0) {
        return print("Tidak bisa dibagi 0!");
    }

    const hasil = a / b;

    if (hasil * b === a){
        return hasil
    }

    return 0;
}

print(div(10, 5));
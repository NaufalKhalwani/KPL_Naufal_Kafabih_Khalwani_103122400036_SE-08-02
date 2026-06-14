function ganjilGenap(input){
    if (input % 2 == 0){
        return true;
    } else {
        console.log(input + " bukan bilangan genap")
    }
}

function nilaiAbsolut(input){
    if (input < 0){
        return -input
    } else {
        console.log(input + " bukan nilai absolute")
    }
}

function nilaiPositif(input){
    return input > 0 
        ? "positif"
        : input < 0 
            ? "negatif"
            : "nilai 0";
}

let nama = "naufal"
console.log(nama)


const user = {
    "first name" : "Naufal",
    "last name" : "Khalwani",
    "age" : 17
};
console.log(user["first name"])


console.log(ganjilGenap(21))
console.log(nilaiAbsolut(-500))
console.log(nilaiPositif(-10))
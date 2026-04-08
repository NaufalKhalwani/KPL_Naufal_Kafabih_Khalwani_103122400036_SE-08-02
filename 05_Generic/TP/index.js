function hitung(str, mode) {
    let count = 0;

    for (let c of str) {
        if (mode === "semua") {
            count++;
        } 
        else if (mode === "huruf") {
            if (c !== " ") {
                count++;
            }
        }
    }

    return count;
}

const str = "Bar bar bar";

console.log(hitung(str, "semua")); // 11
console.log(hitung(str, "huruf")); // 9

hitung(str, "huruf"); // tidak terjadi apa-apa (karena tidak di-log)
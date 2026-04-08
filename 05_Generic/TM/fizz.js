/**
 * Mengubah sebuah bilangan menjadi "Fizz", "Buzz", "FizzBuzz", atau angka itu sendiri.
 * @param {number} value - Bilangan bulat tunggal
 * @returns {number | string}
 * @throws {TypeError} - Jika input bukan number atau bukan bilangan bulat
 */
function zzzzOrNum(value) {
    if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new TypeError("Input harus bilangan bulat");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    }
    if (value % 3 === 0) {
        return "Fizz";
    }
    if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * Mengubah array angka menjadi array FizzBuzz
 * @param {number[]} sequence - Array berisi bilangan bulat
 * @returns {(number | string)[]}
 * @throws {TypeError} - Jika input bukan array atau elemennya tidak valid
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new TypeError("Input harus array");
    }

    sequence.forEach((e) => {
        if (typeof e !== "number" || !Number.isInteger(e)) {
            throw new TypeError("Semua elemen harus bilangan bulat");
        }
    });

    return sequence.map((e) => zzzzOrNum(e));
}

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};
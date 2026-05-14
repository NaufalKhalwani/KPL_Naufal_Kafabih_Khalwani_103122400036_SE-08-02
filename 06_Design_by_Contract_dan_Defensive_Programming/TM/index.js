function is_not_fizzbuzz(number) {
  // Validasi (Defensive Programming)
  if (typeof number !== 'number' || !Number.isFinite(number) || !Number.isInteger(number)) {
    throw new TypeError('Input harus berupa bilangan bulat yang valid');
  }

  // Cek fizzbuzz (kelipatan 3 atau 5)
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}

// Fungsi untuk testing agar tidak menghentikan program
function test(input) {
  try {
    console.log(`Input: ${input} ->`, is_not_fizzbuzz(input));
  } catch (e) {
    console.log(`Input: ${input} -> ERROR: ${e.message}`);
  }
}

// TEST CASES
test(1)        // true
test(3)        // false
test(5)        // false
test(30)       // false
test(7)        // true
test(null)     // error
test(NaN)      // error
test(Infinity) // error
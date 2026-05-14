function toNumberArray(input) {
  let result = [];

  // Jika input string
  if (typeof input === 'string') {
    result = input
      .split(',')              // pisah berdasarkan koma
      .map(item => item.trim()) // hilangkan spasi
      .map(item => Number(item)) // ubah ke number
      .filter(num => !isNaN(num)); // ambil yang valid saja
  }

  // Jika input array
  else if (Array.isArray(input)) {
    result = input
      .map(item => Number(item))
      .filter(num => !isNaN(num));
  }

  // Jika bukan keduanya
  else {
    throw new TypeError('Input harus berupa string atau array');
  }

  return result;
}

// TEST
console.log(toNumberArray("1, 2"))              // [1, 2]
console.log(toNumberArray(["1", "2"]))          // [1, 2]
console.log(toNumberArray(" 11,55,33   "))      // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]
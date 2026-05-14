export function hitungHuruf(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input harus string');
  }

  // Ambil hanya huruf A-Z (case insensitive)
  const huruf = str.match(/[a-zA-Z]/g);

  return huruf ? huruf.length : 0;
}

export function hitungKata(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input harus string');
  }

  // Ambil kata yang hanya terdiri dari huruf
  const kata = str.match(/[a-zA-Z]+/g);

  return kata ? kata.length : 0;
}
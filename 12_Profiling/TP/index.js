function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {

  // Jika number
  if (typeof data === "number") {
    return `Number: ${data * 2}`;
  }

  // Jika string
  if (typeof data === "string") {
    const str = data.toLowerCase();
    const num = Number(str);

    // Cek apakah string berisi angka
    if (!isNaN(num)) {
      return `Number: ${num * 2}`;
    }

    return `Teks: ${str} (panjangnya: ${str.length})`;
  }

  // Jika boolean atau tipe lain
  return `Tipe data tidak didukung`;
}

main();
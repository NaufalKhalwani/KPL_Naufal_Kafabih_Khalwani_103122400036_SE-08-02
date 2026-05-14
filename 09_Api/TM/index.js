const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Fungsi untuk menghasilkan angka dari nama (deterministik)
function generateNumberFromName(name) {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }

  return (hash % 100) + 1; // range 1-100
}

// Endpoint POST /
app.post('/', (req, res) => {
  const { nama, tebakan } = req.body;

  if (!nama || typeof tebakan !== 'number') {
    return res.status(400).json({
      error: "Input tidak valid"
    });
  }

  const angkaBenar = generateNumberFromName(nama);

  if (tebakan === angkaBenar) {
    return res.json({
      jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
    });
  } else if (tebakan > angkaBenar) {
    return res.json({
      jawaban: "Tebakanmu terlalu tinggi!"
    });
  } else {
    return res.json({
      jawaban: "Tebakanmu terlalu rendah!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
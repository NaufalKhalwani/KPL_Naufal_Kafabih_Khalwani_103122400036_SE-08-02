require('dotenv').config();

const BASE_API = process.env.BASE_API;

// Ambil data kurs
async function getRate() {
  const res = await fetch(BASE_API);
  const data = await res.json();
  return data.rates;
}

// Format tanggal Indonesia
function formatDate(date) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

// Format mata uang
function formatCurrency(value, currency, locale = 'id-ID') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(value);
}

// Program utama
async function main(amountIDR) {
  try {
    const rates = await getRate();

    const cny = amountIDR * rates.CNY;
    const eur = amountIDR * rates.EUR;

    const today = formatDate(new Date());

    const rupiah = new Intl.NumberFormat('id-ID').format(amountIDR);
    const cnyFormatted = formatCurrency(cny, 'CNY', 'zh-CN');
    const eurFormatted = formatCurrency(eur, 'EUR', 'de-DE');

    console.log(
      `Kurs Rp${rupiah} pada ${today} adalah ${cnyFormatted} dan ${eurFormatted}`
    );
  } catch (err) {
    console.error('Terjadi error:', err.message);
  }
}

// TEST
main(25000);
main(50000);
main(100000);
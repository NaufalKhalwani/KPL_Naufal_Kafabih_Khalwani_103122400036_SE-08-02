const now = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',   // Sabtu
  day: 'numeric',    // 18
  month: 'long',     // April
  year: 'numeric'    // 2026
});

console.log(formatter.format(now));
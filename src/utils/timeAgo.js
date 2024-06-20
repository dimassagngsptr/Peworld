export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);

  const nowUTC = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const pastUTC = new Date(past.toLocaleString("en-US", { timeZone: "UTC" }));

  const secondsAgo = Math.floor((nowUTC - pastUTC) / 1000);

  const positiveSecondsAgo = Math.abs(secondsAgo);
  console.log(pastUTC, nowUTC);
  const units = [
    { name: "tahun", seconds: 60 * 60 * 24 * 365 },
    { name: "bulan", seconds: 60 * 60 * 24 * 30 },
    { name: "hari", seconds: 60 * 60 * 24 },
    { name: "jam", seconds: 60 * 60 },
    { name: "menit", seconds: 60 },
    { name: "detik", seconds: 1 },
  ];

  for (const unit of units) {
    const amount = Math.floor(positiveSecondsAgo / unit.seconds);
    if (amount > 0) {
      return `${amount} ${unit.name} yang lalu`;
    }
  }

  return "baru saja";
}

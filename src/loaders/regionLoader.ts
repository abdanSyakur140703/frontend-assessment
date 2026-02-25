export async function regionLoader() {
  const res = await fetch('/data/indonesia_regions.json');
  if (!res.ok) {
    throw new Error('Gagal memuat data wilayah');
  }
  const data = await res.json();
  return data;
}
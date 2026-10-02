/*
 * PENGATURAN PORTAL
 *
 * Repo GitHub ini PUBLIK. Jangan menaruh kunci tiket, kunci API, PIN,
 * password, atau rahasia apa pun di file ini maupun file lain.
 *
 * HUB_URL : alamat web app Hub (berakhiran /exec).
 *           Salin dari Hub → Portal → Login & tiket.
 */
window.PORTAL_KONFIG = {
  HUB_URL: 'https://script.google.com/macros/s/GANTI_DENGAN_ID_HUB/exec',

  NAMA: 'Sahabat PPDS',          // nama portal (ubah juga "name" di manifest.webmanifest)
  VERSI: '2.0.0',

  MUAT_ULANG_MENIT: 15,          // data dari Hub dimuat ulang tiap sekian menit
  BATAS_TAMPIL_DETIK: 15         // setelah ini, tawarkan "Buka di tab baru"
};

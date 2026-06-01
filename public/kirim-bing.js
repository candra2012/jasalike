// File: kirim-bing.js

const dataIndexNow = {
  "host": "jasalike.com",
  "key": "8176943294884eabb5eb73ebb2b54810",
  "keyLocation": "https://jasalike.com/8176943294884eabb5eb73ebb2b54810.txt",
  "urlList": [
    "https://jasalike.com/",
    "https://jasalike.com/like-tiktok",
    "https://jasalike.com/like-instagram/",
    "https://jasalike.com/jasa-repost-tiktok",
    "https://jasalike.com/like-komentar-instagram",
    "https://jasalike.com/like-tiktok",
    "https://jasalike.com/like-komentar-tiktok",
    "https://jasalike.com/like-facebook",
    "https://jasalike.com/like-komentar-facebook",
    "https://jasalike.com/like-twitter",
    "https://jasalike.com/like-komentar-twitter",
    "https://jasalike.com/like-linkedin",
    "https://jasalike.com/like-komentar-linkedin",
    "https://jasalike.com/like-threads",
    "https://jasalike.com/like-komentar-threads",
    "https://jasalike.com/like-marketplace",
    "https://jasalike.com/like-ulasan-marketplace",
    "https://jasalike.com/like-reddit",
    "https://jasalike.com/like-komentar-reddit",
    "https://jasalike.com/like-pinterest",
    "https://jasalike.com/like-komentar-pinterest",
    "https://jasalike.com/jasa-livestreaming-tiktok",
    "https://jasalike.com/jasa-repost-tiktok",
    "https://jasalike.com/jasa-report-akun-tiktok",
    "https://jasalike.com/jasa-save-tiktok",
    "https://jasalike.com/jasa-share-video-tiktok",
    "https://jasalike.com/jasa-tambah-komentar-tiktok",
    "https://jasalike.com/jasa-tambah-view-tiktok",
    "https://jasalike.com/jasa-tambah-follower-tiktok",
    "https://jasalike.com/layanan",
    "https://jasalike.com/direktori-layanan",
    "https://jasalike.com/tentang-kami",
    "https://jasalike.com/blog",
    "https://jasalike.com/kontak"
  ]
};

console.log("Memulai pengiriman URL ke server Bing IndexNow...");

fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(dataIndexNow)
})
.then(response => {
  console.log("Status Kode HTTP:", response.status);
  
  if (response.status === 200) {
    console.log("✅ SUKSES! (200 OK) URL berhasil dikirim ke Bing.");
  } else if (response.status === 403) {
    console.log("❌ GAGAL! (403 Forbidden) File .txt belum terbaca di server. Pastikan sudah Push ke Vercel.");
  } else if (response.status === 422) {
    console.log("❌ GAGAL! (422) Format salah atau URL bukan milik jasalike.com.");
  } else {
    console.log("⚠️ Respon lainnya:", response.statusText);
  }
})
.catch(error => console.error("Terjadi kesalahan sistem:", error));

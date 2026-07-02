const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(process.cwd(), 'src/pages');

const mapping = {
  'like-instagram.astro': 'instagram',
  'like-komentar-instagram.astro': 'instagram',
  'jasa-tambah-follower.astro': 'instagram',
  'jasa-komen-instagram.astro': 'instagram',
  'jasa-tambah-view.astro': 'instagram',
  'jasa-share-instagram.astro': 'instagram',
  'jasa-save-instagram.astro': 'instagram',
  'jasa-vote-ig-private.astro': 'instagram',
  'jaringan-instagram.astro': 'instagram',

  'like-tiktok.astro': 'tiktok',
  'like-komentar-tiktok.astro': 'tiktok',
  'jasa-tambah-follower-tiktok.astro': 'tiktok',
  'jasa-tambah-view-tiktok.astro': 'tiktok',
  'jasa-tambah-komentar-tiktok.astro': 'tiktok',
  'jasa-share-video-tiktok.astro': 'tiktok',
  'jasa-save-video-tiktok.astro': 'tiktok',
  'jasa-repost-tiktok.astro': 'tiktok',
  'jasa-report-akun-tiktok.astro': 'tiktok',
  'jasa-livestreaming-tiktok.astro': 'tiktok',

  'like-youtube.astro': 'youtube',
  'like-komentar-youtube.astro': 'youtube',
  'jasa-subscribe-youtube.astro': 'youtube',
  'jasa-save-video-youtube.astro': 'youtube',
  'jual-jasa-view-youtube.astro': 'youtube',
  'jasa-komen-youtube-aktif.astro': 'youtube',
  'jasa-live-youtube.astro': 'youtube',
  'jasa-report-youtube.astro': 'youtube',

  'like-facebook.astro': 'facebook',
  'like-komentar-facebook.astro': 'facebook',
  'jasa-tambah-follower-facebook.astro': 'facebook',
  'jasa-tambah-komentar-facebook.astro': 'facebook',
  'jasa-share-facebook.astro': 'facebook',
  'jasa-tambah-view-facebook.astro': 'facebook',
  'jasa-live-facebook.astro': 'facebook',
  'jasa-polling-facebook.astro': 'facebook',

  'jasa-tambah-member-telegram.astro': 'telegram',
  'jasa-invite-member-telegram.astro': 'telegram',
  'jasa-view-telegram.astro': 'telegram',
  'jasa-reaction-telegram.astro': 'telegram',
  'jasa-komentar-telegram.astro': 'telegram',
  'jasa-polling-telegram.astro': 'telegram',

  'jasa-tambah-follower-shopee.astro': 'shopee',
  'jasa-fake-order-shopee.astro': 'shopee',
  'jasa-live-shopee.astro': 'shopee',
  'jasa-komen-live-shopee.astro': 'shopee',
  'jasa-view-video-shopee.astro': 'shopee',
  'jasa-tambah-komen-shopee.astro': 'shopee',
  'jasa-report-toko-shopee.astro': 'shopee',
  'jasa-vote-produk-shopee.astro': 'shopee',

  'like-marketplace.astro': 'marketplace',
  'like-ulasan-marketplace.astro': 'marketplace',

  'like-twitter.astro': 'twitter',
  'like-komentar-twitter.astro': 'twitter',
  'jasa-komen-twitter.astro': 'twitter',
  'jasa-tambah-follower-twitter.astro': 'twitter',

  'like-threads.astro': 'threads',
  'like-komentar-threads.astro': 'threads',

  'like-pinterest.astro': 'pinterest',
  'like-komentar-pinterest.astro': 'pinterest',

  'like-linkedin.astro': 'linkedin',
  'like-komentar-linkedin.astro': 'linkedin',
};

const importLine = "import RelatedServices from '../components/RelatedServices.astro'";

let updated = 0;
let skipped = 0;
let errors = [];

for (const [file, category] of Object.entries(mapping)) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) {
    errors.push(`File not found: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('RelatedServices')) {
    skipped++;
    continue;
  }

  if (!content.includes('FaqJasaLike')) {
    errors.push(`No FaqJasaLike found in ${file}`);
    continue;
  }

  content = content.replace(
    /import FaqJasaLike from ['"]\.\.\/components\/FaqJasaLike\.astro['"]/,
    `import FaqJasaLike from '../components/FaqJasaLike.astro'\n${importLine}`
  );

  const componentLine = `<RelatedServices category="${category}" current={Astro.url.pathname} />`;
  content = content.replace(
    /(\n\s*<FaqJasaLike)/,
    `\n  ${componentLine}\n\n  <FaqJasaLike`
  );

  fs.writeFileSync(filePath, content);
  updated++;
}

console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
if (errors.length) {
  console.log('Errors:');
  errors.forEach(e => console.log(` - ${e}`));
}

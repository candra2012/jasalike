const fs = require('fs');
const path = require('path');

const distDir = path.resolve(process.cwd(), 'dist');
const errors = [];
const selfLinks = [];

function getAllHtmlFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function pathExists(urlPath) {
  if (urlPath.startsWith('/')) {
    urlPath = urlPath.slice(1);
  }
  if (urlPath.includes('?')) {
    urlPath = urlPath.split('?')[0];
  }
  if (urlPath.includes('#')) {
    urlPath = urlPath.split('#')[0];
  }
  if (!urlPath || urlPath === '') {
    return fs.existsSync(path.join(distDir, 'index.html'));
  }
  const filePath = path.join(distDir, urlPath);
  return fs.existsSync(filePath) || fs.existsSync(path.join(filePath, 'index.html'));
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Checking ${htmlFiles.length} HTML files...`);

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const relativePath = '/' + path.relative(distDir, file).replace(/\\/g, '/');

  const hrefRegex = /href=["'](\/[^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];

    if (/\.(png|jpg|jpeg|gif|svg|webp|css|js|pdf|zip)$/i.test(href)) continue;

    const currentDir = path.dirname(relativePath);
    const currentExpected = currentDir === '/' ? '/' : currentDir.replace(/\/index\.html$/, '/');
    const normalizedHref = href.replace(/\/$/, '') || '/';
    const normalizedCurrent = currentExpected.replace(/\/$/, '') || '/';

    if (normalizedHref === normalizedCurrent) {
      selfLinks.push({ file: relativePath, href });
    }

    if (!pathExists(href)) {
      errors.push({ file: relativePath, href });
    }
  }
}

if (selfLinks.length) {
  console.log(`\n⚠️  Self-links found: ${selfLinks.length}`);
  selfLinks.slice(0, 10).forEach(({ file, href }) => {
    console.log(`  - ${file} -> ${href}`);
  });
} else {
  console.log('\n✓ No self-links found.');
}

if (errors.length) {
  console.log(`\n❌ Broken internal links found: ${errors.length}`);
  errors.slice(0, 20).forEach(({ file, href }) => {
    console.log(`  - ${file} -> ${href}`);
  });
  process.exit(1);
} else {
  console.log('\n✓ All internal links are valid.');
}

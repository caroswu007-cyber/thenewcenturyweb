/**
 * One-off: collect Unsplash image URLs from src + index.css, dedupe, download to public/replacement-images/
 * Run: node scripts/collect-and-download-images.mjs
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcRoot = path.join(root, 'src');
const outDir = path.join(root, 'public', 'replacement-images');

/** Include `?auto=format&…` — do not exclude `?` or it breaks Unsplash URLs. */
const re = /https:\/\/images\.unsplash\.com\/[^\s'"`)]+/g;

function walkFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist') continue;
      walkFiles(p, acc);
    } else if (/\.(tsx?|jsx?|css|html)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const files = [...walkFiles(srcRoot), path.join(root, 'index.html')];
const seen = new Set();
const ordered = [];
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  const m = txt.matchAll(re);
  for (const x of m) {
    const u = x[0].replace(/\)$/, '');
    if (!seen.has(u)) {
      seen.add(u);
      ordered.push(u);
    }
  }
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const f = fs.createWriteStream(dest);
    https
      .get(url, res => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          f.close();
          fs.unlinkSync(dest);
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          f.close();
          fs.unlinkSync(dest);
          reject(new Error(`${res.statusCode} ${url}`));
          return;
        }
        res.pipe(f);
        f.on('finish', () => {
          f.close(resolve);
        });
      })
      .on('error', err => {
        f.close();
        try {
          fs.unlinkSync(dest);
        } catch {
          /* */
        }
        reject(err);
      });
  });
}

const lines = ['# Number | filename | URL', ''];

for (let i = 0; i < ordered.length; i++) {
  const n = i + 1;
  const url = ordered[i];
  const base = `${String(n).padStart(3, '0')}.jpg`;
  const dest = path.join(outDir, base);
  process.stdout.write(`[${n}/${ordered.length}] ${base} ... `);
  try {
    await download(url, dest);
    console.log('ok');
  } catch (e) {
    console.log('FAIL', e.message);
  }
  lines.push(`${n} | ${base} | ${url}`);
}

lines.push('', '# Replace: overwrite files 001.jpg, 002.jpg, ... keeping the same names, then point code to /replacement-images/NNN.jpg as needed.');
fs.writeFileSync(path.join(outDir, 'MANIFEST.txt'), lines.join('\n'), 'utf8');
console.log(`Done. ${ordered.length} files. MANIFEST.txt written.`);

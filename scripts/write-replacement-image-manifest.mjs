import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcRoot = path.join(root, 'src');
const outDir = path.join(root, 'public', 'replacement-images');

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
  for (const x of txt.matchAll(re)) {
    const u = x[0].replace(/\)$/, '');
    if (!seen.has(u)) {
      seen.add(u);
      ordered.push(u);
    }
  }
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const lines = [
  'Site images — numbered exports',
  '=============================',
  '',
  'Files: 001.jpg … NNN.jpg (same order as below). Replace your asset with the same filename and update',
  'the project to use `/replacement-images/NNN.jpg` or swap URLs in source using this table.',
  '',
  'Note: Some Unsplash URLs may return 404 if removed upstream; export those slots manually.',
  '',
];

ordered.forEach((url, i) => {
  const n = String(i + 1).padStart(3, '0');
  lines.push(`${n}.jpg  ←  ${url}`);
});

fs.writeFileSync(path.join(outDir, 'MANIFEST.txt'), lines.join('\n'), 'utf8');
console.log(`Wrote ${ordered.length} entries to public/replacement-images/MANIFEST.txt`);

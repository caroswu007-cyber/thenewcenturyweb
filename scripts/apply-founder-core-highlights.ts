/**
 * Strips all ** ... ** then re-wraps only core product names (ZH + EN).
 * Run: npx tsx scripts/apply-founder-core-highlights.ts && npm run copy:import
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as XLSX from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsDir = path.join(root, 'docs', 'page-copy');

const ZH_PHRASES = [
  '万有元神母体（Universal Matrix of Meta Awareness）',
  '吴氏灵体档案',
  '吴氏灵魂医学',
  '万有元神母体',
] as const;

const EN_PHRASES = [
  'Universal Matrix of Meta Awareness',
  'Woos Record of Soul',
  'Woos Spirit Medicine',
] as const;

function stripBoldLoop(s: string): string {
  let t = s;
  let prev = '';
  while (t !== prev) {
    prev = t;
    t = t.replace(/\*\*([^*]+)\*\*/g, '$1');
  }
  return t;
}

function wrapPhraseAtEvenDepth(s: string, ph: string): string {
  let idx = 0;
  while ((idx = s.indexOf(ph, idx)) !== -1) {
    const before = s.slice(0, idx);
    const opens = (before.match(/\*\*/g) ?? []).length;
    if (opens % 2 === 0) {
      s = `${before}**${ph}**${s.slice(idx + ph.length)}`;
      idx += ph.length + 4;
    } else {
      idx += ph.length;
    }
  }
  return s;
}

function applyLocale(text: string, locale: 'en' | 'zh'): string {
  const stripped = stripBoldLoop(text);
  const phrases = locale === 'zh' ? ZH_PHRASES : EN_PHRASES;
  let out = stripped;
  for (const ph of phrases) {
    out = wrapPhraseAtEvenDepth(out, ph);
  }
  return out;
}

function shouldTransformKey(key: string): boolean {
  return key.startsWith('founderStoryPage.') || key.startsWith('founderTimeline[');
}

/** Headings: plain only (no gold inline emphasis). */
function isHeadingOnlyKey(key: string): boolean {
  return (
    /\.title$/.test(key) ||
    key.endsWith('.heroBadge') ||
    key.endsWith('.heroTitle') ||
    key.endsWith('.stageTitle')
  );
}

function main() {
  const files = fs.readdirSync(docsDir).filter(f => /\.xlsx$/i.test(f)).sort();
  const target = files.find(f => /^03-/.test(f));
  if (!target) {
    console.error('No 03-*.xlsx in', docsDir);
    process.exit(1);
  }
  const filePath = path.join(docsDir, target);
  const wb = XLSX.read(fs.readFileSync(filePath), { type: 'buffer' });
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(ws) as Record<string, string>[];
  let n = 0;
  for (const row of rows) {
    const key = String(row.block_key ?? '').trim();
    if (!shouldTransformKey(key)) continue;
    const en = String(row.english_源文 ?? '');
    const zh = String(row.中文 ?? '');
    if (key === 'founderStoryPage.intro') {
      row.english_源文 = stripBoldLoop(en);
      row.中文 =
        '我， John LONG WOO, 和我的两个儿子Caros Woo和Sam，我们父子三人，与灵魂世界有太多传奇的故事。这些经历造就我们是灵魂世界首位开门者，并且是灵魂生命真相的首位探索者。';
      n++;
      continue;
    }
    if (isHeadingOnlyKey(key)) {
      row.english_源文 = stripBoldLoop(en);
      row.中文 = stripBoldLoop(zh);
      n++;
      continue;
    }
    row.english_源文 = applyLocale(en, 'en');
    row.中文 = applyLocale(zh, 'zh');
    n++;
  }
  const enCleanup: Record<string, string> = {
    'founderStoryPage.phaseAStages[3].paragraphs[2]':
      "As a father, I pester, fight and coexist with Hui 'an every day, forming a subtle relationship that is both enemy and friend. In the process of hurting ghosts, we also exchanged a lot of knowledge about spirit-related information. Finally, the advanced spirit appeared and demonstrated extraordinary ability. It explained various puzzles from the past year and taught me more about the spiritual realm, then left my body and vanished quickly.",
    'founderStoryPage.phaseAStages[4].paragraphs[0]':
      'In December 2023, as a father, I was once again attached by a C2-level ghost, Qing Xiaoxian. During its 1,700 years as a ghost, it swallowed about 5,000 to 10,000 other spirits, thus forming a very large body. It turned our house into a haunted house and created multiple Remote Port Organs (RPO) attached to both sons; the main body could communicate with them remotely.',
    'founderStoryPage.phaseAStages[4].paragraphs[3]':
      "From September 2024 to January 2025, as a father, I was again attached by a C3-level ghost, Qian Kai. Qian Kai's density was far higher than the C2-level Qing Xiaoxian. The higher a ghost's density, the stronger its ability—so Qian Kai's thought-control and pathogenic power were stronger as well. We continued self-rescue and eliminated this ghost.",
    'founderStoryPage.phaseB.blocks[2].text':
      'A great number of master spirits and hybrid spirits reached out to us as father and sons, letting us know that the spirit world surprisingly has administrators and creators. Master spirits gave us a great deal of help. Caros Woo obtained the PRCASG superpower to remotely control attached spirits in North America, so that while in China he could remotely control spirits on the other side of the globe. This PRCASG superpower is the basis on which we built ASRA.',
  };
  for (const row of rows) {
    const key = String(row.block_key ?? '').trim();
    const fix = enCleanup[key];
    if (fix) row.english_源文 = fix;
  }

  wb.Sheets[sheetName] = XLSX.utils.json_to_sheet(rows);
  XLSX.writeFile(wb, filePath);
  console.log(`Transformed ${n} founder rows in ${path.relative(root, filePath)}`);
}

main();

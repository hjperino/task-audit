import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const indexUrl = new URL('../dist/client/index.html', import.meta.url);
const indexPath = fileURLToPath(indexUrl);
const source = await readFile(indexPath, 'utf8');
const portableHtml = source.replaceAll('="/./_next/', '="./_next/');

if (portableHtml.includes('="/./_next/')) {
  throw new Error('Mindestens ein absoluter Laufzeitpfad konnte nicht angepasst werden.');
}

await writeFile(indexPath, portableHtml, 'utf8');
console.log('Relative Laufzeitpfade vorbereitet: dist/client/index.html');

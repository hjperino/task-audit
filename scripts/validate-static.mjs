import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const indexPath = resolve('dist/client/index.html');

if (!existsSync(indexPath)) {
  throw new Error('Die statische Startseite fehlt. Bitte zuerst den Build ausführen.');
}

const html = readFileSync(indexPath, 'utf8');
const requiredText = [
  'Aufgaben-Audit',
  'Prüf-Prompt zusammenstellen',
  'Integrität',
  'Kognition',
  'François Jourde',
  'CC BY 4.0',
  'Prompt erzeugen',
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Erwarteter Inhalt fehlt: ${text}`);
  }
}

if (!html.includes('lang="de-CH"')) {
  throw new Error('Die Seitensprache ist nicht als de-CH ausgezeichnet.');
}

if (html.includes('ß')) {
  throw new Error('Die Ausgabe enthält ein ß statt Schweizer Schreibweise.');
}

const localReferences = [...html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)]
  .map((match) => match[1])
  .filter((reference) =>
    !reference.startsWith('http://') &&
    !reference.startsWith('https://') &&
    !reference.startsWith('mailto:') &&
    !reference.startsWith('data:'),
  );

for (const reference of localReferences) {
  const cleanReference = reference.split(/[?#]/, 1)[0];
  const filePath = resolve(dirname(indexPath), cleanReference);

  if (!existsSync(filePath)) {
    throw new Error(`Lokale Referenz fehlt: ${reference}`);
  }
}

console.log(
  `Statische Prüfung bestanden: ${requiredText.length} Kerninhalte und ${localReferences.length} lokale Referenzen.`,
);

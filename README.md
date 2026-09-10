# Aufgaben-Audit

Der Aufgaben-Audit ist eine deutschsprachige Arbeitsfläche für Lehrpersonen. Aus Angaben zu Kontext, Lernziel, Produkt und Aufgabenstellung erzeugt die Seite einen strukturierten Prompt, mit dem sich Aufgaben im Zeitalter generativer KI prüfen und weiterentwickeln lassen.

Die Seite trifft keine automatische Beurteilung. Die KI analysiert und macht Vorschläge; die pädagogischen Entscheidungen bleiben bei der Lehrperson.

## Funktionen

- Integritätsvalidität und kognitive Validität getrennt prüfen
- zwischen Aufgaben ohne Lernenden-KI und pädagogisch begleiteter KI-Nutzung unterscheiden
- drei Umbauoptionen vergleichen und eine Variante ausarbeiten lassen
- Deutsch (Schweiz), Englisch oder Französisch als Antwortsprache festlegen
- optional mit Bloom, SOLO oder Lernaktivitäten nach Laurillard arbeiten
- den erzeugten Prompt in die Zwischenablage kopieren

Alle Eingaben bleiben im Browser. Die Seite überträgt oder speichert keine eingegebenen Daten und enthält keine direkte Schnittstelle zu einem KI-Modell.

## Webseite

Die öffentliche Fassung ist unter <https://hjperino.github.io/task-audit/> erreichbar.

## Lokale Verwendung

Voraussetzung ist Node.js ab Version 22.13.

```bash
npm ci
npm run dev
```

Die statische Fassung entsteht mit:

```bash
npm run build
npm run validate
```

Die veröffentlichbaren Dateien liegen anschliessend in `dist/client`.

## Quelle und Adaption

Konzeptionelle Grundlage ist François Jourdes **Assessment Redesign**:

- Original: <https://github.com/jourde/prompts/tree/main/docs/assessment-redesign>
- Englische Promptfassung: <https://github.com/jourde/prompts/blob/main/docs/assessment-redesign/en.md>
- Französische Promptfassung: <https://github.com/jourde/prompts/blob/main/docs/assessment-redesign/fr.md>
- Lizenz: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

Die vorliegende deutschsprachige Adaption wurde gekürzt, neu strukturiert und um eine formularbasierte Prompt-Erstellung ergänzt. Einzelheiten stehen in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Lizenz

Dieses Repository verwendet getrennte Lizenzen für Programmcode und Inhalte:

- Der von Hansjuerg Perino erstellte Programmcode steht unter der [MIT-Lizenz](LICENSE-CODE.md).
- Die von Hansjuerg Perino erstellten Texte, Prompts, Erläuterungen und sonstigen Bildungsinhalte stehen unter [Creative Commons Namensnennung 4.0 International](LICENSE-CONTENT.md).
- Inhalte Dritter behalten ihre jeweiligen Lizenzen. Insbesondere bleiben die von François Jourdes «Assessment Redesign» übernommenen Inhalte unter **CC BY 4.0**. Einzelheiten stehen in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Eine Übersicht über den Geltungsbereich der Lizenzen steht in der Datei [LICENSE](LICENSE).

# Projektstand Aufgaben-Audit

**Stand:** 10. September 2026

## Zweck

Eigenständige deutschsprachige Webseite für Lehrpersonen, die Aufgaben im Zeitalter generativer KI prüfen und umbauen möchten. Die Seite ist unabhängig von der Educafé-Präsentationswebseite.

## Funktionsumfang

- Kontext, Lernziel, erwartetes Produkt und Aufgabenstellung erfassen
- vollständigen dreiphasigen Prüf-Prompt ausdrücklich über «Prompt erzeugen» erstellen
- Integritätsvalidität und kognitive Validität getrennt prüfen
- Wahl zwischen Aufgaben ohne Lernenden-KI und pädagogisch begleiteter KI-Nutzung nach Phase 1
- drei Umbauoptionen vergleichen und erst nach menschlicher Auswahl ausarbeiten
- Deutsch (Schweiz), Englisch oder Französisch als Antwortsprache festlegen
- optionale Verankerung in Bloom, SOLO oder Lernaktivitäten nach Laurillard
- Prompt in die Zwischenablage kopieren
- keine Übertragung oder Speicherung der eingegebenen Daten

## Quelle und Rechte

Konzeptionelle Grundlage ist François Jourdes Repository `jourde/prompts`, insbesondere `docs/assessment-redesign/en.md` und `fr.md`: <https://github.com/jourde/prompts/tree/main/docs/assessment-redesign>.

François Jourde hat die Wiederverwendung und Adaption persönlich begrüsst. Im Repository sind die Prompts und die Dokumentation seit dem 8. September 2026 ausdrücklich unter **Creative Commons Attribution 4.0 International (CC BY 4.0)** lizenziert. Vorgeschlagene Attribution des Autors:

> Prompts by François Jourde, licensed under CC BY 4.0.
> Source: https://github.com/jourde/prompts

Die Webseite kennzeichnet François Jourde als Urheber des Ausgangsmaterials, verlinkt Quelle und Lizenz und beschreibt die vorgenommenen Änderungen: deutschsprachige Fassung, Kürzung, neue Struktur sowie formularbasierte Prompt-Erstellung.

Die Lizenzierung ist nach Inhalt und Technik getrennt: Die eigenständigen Texte, Prompts, Erläuterungen und Bildungsinhalte der Adaption von Hansjuerg Perino stehen ebenfalls unter **CC BY 4.0**. Der von Hansjuerg Perino erstellte Programmcode steht unter der **MIT-Lizenz**. Inhalte und Abhängigkeiten Dritter behalten ihre jeweiligen Lizenzen.

## Technischer Stand

- eigenständiges Vinext-Projekt im Ordner `assessment-redesign-web`
- statische Ausgabe vorgesehen
- keine Datenbank, keine Anmeldung und keine externe KI-Schnittstelle
- Eingaben bleiben im Browser und werden nicht gespeichert
- öffentliches GitHub-Repository: <https://github.com/hjperino/task-audit>
- automatische Veröffentlichung der statischen Ausgabe über GitHub Pages eingerichtet
- öffentliche Webseite: <https://hjperino.github.io/task-audit/>
- klare Lizenzübersicht mit getrennten Dateien für Inhalte unter CC BY 4.0 und Programmcode unter MIT; Hinweise zu François Jourdes Ausgangsmaterial in `THIRD_PARTY_NOTICES.md`
- Produktions-Build, statische Prüfung und Browser-Funktionstest unter dem GitHub-Unterpfad `/task-audit/` am 10. September 2026 bestanden
- erster GitHub-Pages-Aufbau und Funktionstest der öffentlichen Webseite am 10. September 2026 erfolgreich abgeschlossen

## Veröffentlichungsstand

Der lokale Projektverlauf wurde mit dem vorhandenen GitHub-Startcommit zusammengeführt. Quellcode, Dokumentation und Veröffentlichungsablauf liegen im Repository. Jeder neue Commit auf `main` löst automatisch einen geprüften Neuaufbau der GitHub-Pages-Seite aus.

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aufgaben-Audit | KI-angepasste Aufgaben prüfen',
  description:
    'Eine lokale Arbeitsfläche für einen dreiphasigen Audit und die Überarbeitung von Aufgaben im Zeitalter generativer KI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}

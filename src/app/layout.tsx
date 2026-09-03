import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import Reveal from '@/components/Reveal';
import './globals.css';

/* Display: grotesca variável, estreitada e pesada. Faz o trabalho de
   personalidade sozinha, para o resto da página poder ficar quieto. */
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  display: 'swap',
  variable: '--font-bricolage',
});

/* Corpo: continuidade com o design system da Convertido. */
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Convertido Med — Autoridade médica convertida em agenda particular',
  description:
    'A operação da Convertido dedicada exclusivamente a converter autoridade médica em agenda particular. Método próprio de 90 dias, integrado ao Convertido Hub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable}`}
    >
      <body data-field="dark">
        {children}
        <Reveal />
      </body>
    </html>
  );
}

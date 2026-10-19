import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import Script from 'next/script';
import Reveal from '@/components/Reveal';
import './globals.css';

const GTM_ID = 'GTM-WBDP54QP';

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
  title: 'Convertido Med | Autoridade médica convertida em agenda particular',
  description:
    'A operação da Convertido dedicada exclusivamente a converter autoridade médica em agenda particular. Método próprio de 120 dias, integrado ao Convertido Hub.',
  icons: {
    icon: '/med-favicon.png',
    shortcut: '/med-favicon.png',
    apple: '/med-favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body data-field="dark">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Reveal />
        {/* Botão flutuante do CRM Vert (abre o formulário de contato) */}
        <Script
          src="https://crmvert.com.br/api/forms/cmvbernik000bir1rta4r0lyq/botao"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

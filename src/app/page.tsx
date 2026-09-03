import Topbar from '@/components/Topbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Metodo from '@/components/Metodo';
import QuatroS from '@/components/QuatroS';
import Comparacao from '@/components/Comparacao';
import Recusas from '@/components/Recusas';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        {/* Ato I — campo escuro: o problema, visto pela ocular. */}
        <Hero />

        {/* Ato II — campo claro. A faixa de prova abre a seção do método:
            uma seção só, sem divisão entre elas. */}
        <Metodo />
        <Manifesto />
        <QuatroS />
        <Comparacao />

        {/* Ato III — campo escuro: as recusas e o fechamento. */}
        <Recusas />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

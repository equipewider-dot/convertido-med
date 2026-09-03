import Tag from './Tag';
import { IconArrowRight } from './icons';

export default function Hero() {
  return (
    <section className="field hero" data-field="dark">
      {/* Arte-direcao real: duas fotos do mesmo consultorio, uma larga e
          uma vertical. <picture> deixa o navegador baixar so a que vai
          usar — com next/image as duas viriam pelo fio. */}
      <div className="field-photo">
        <picture>
          <source
            media="(max-width: 959px)"
            srcSet="/hero-med-mobile.webp"
            width={941}
            height={1672}
          />
          <img
            src="/hero-med.webp"
            alt=""
            width={1915}
            height={821}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Coluna única: o lado direito fica livre para o espécime aparecer. */}
      <div className="wrap hero-grid">
        <div className="hero-content">
          <Tag stain="hematox">Marketing de conversão médica</Tag>

          <h1 className="display h1 hero-headline">
            Autoridade médica <span className="em">convertida</span> em agenda
            particular.
          </h1>

          <p className="lede">
            A operação da Convertido dedicada exclusivamente a médicos
            especialistas. Sem tráfego genérico, sem promessa de milagre. Método
            próprio, 90 dias, agenda funcionando com previsibilidade.
          </p>

          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary">
              Falar com a operação
              <span className="btn-arrow">
                <IconArrowRight />
              </span>
            </a>
            <a href="#metodo" className="btn btn-ghost">
              Ver o método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

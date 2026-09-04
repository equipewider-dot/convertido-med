import Tag from './Tag';
import { BELIEFS, type Belief } from '@/lib/content';
import {
  IconArrowRight,
  IconCheck,
  IconDashboard,
  IconFunnel,
  IconRoute,
  IconStethoscope,
} from './icons';

const ICONS: Record<Belief['icon'], React.ComponentType<{ size?: number }>> = {
  stethoscope: IconStethoscope,
  funnel: IconFunnel,
  dashboard: IconDashboard,
  route: IconRoute,
};

export default function Manifesto() {
  return (
    <section className="field" data-field="dark">
      {/* Tres colunas: argumento e acao / foto / as crencas. */}
      <div className="wrap manifesto-grid">
        <div className="manifesto-intro">
          <Tag stain="eosin">Manifesto</Tag>
          <h2 className="display h2">Por que a Convertido Med existe.</h2>
          <p className="manifesto-lede">
            Não é discurso de marca. É a régua que define o que a gente aceita
            fazer, e o que a gente recusa.
          </p>

          <div className="promise" data-stain="malachite">
            <span className="promise-icon">
              <IconCheck size={16} />
            </span>
            <p className="promise-text">
              Não prometemos milagre. Prometemos método, transparência e
              captação particular funcionando em 120 dias.
            </p>
          </div>

          <a href="#contato" className="btn btn-primary manifesto-cta">
            Falar com a operação
            <span className="btn-arrow">
              <IconArrowRight />
            </span>
          </a>
        </div>

        {/* Duas fontes do mesmo corredor. Em tres colunas a coluna e
            estreita e alta, entao entra a vertical; empilhado ela ocupa
            a largura toda e a panoramica cai melhor. */}
        <figure className="manifesto-figure" data-reveal="0">
          <picture>
            <source
              media="(min-width: 1060px)"
              srcSet="/manifesto-vertical.webp"
              width={583}
              height={940}
            />
            <img
              src="/manifesto.webp"
              alt="Dois médicos caminhando pelo corredor da clínica, conversando."
              width={1915}
              height={821}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>

        <ul className="beliefs" data-reveal="0">
          {BELIEFS.map((belief) => {
            const Icon = ICONS[belief.icon];
            return (
              <li
                className="belief"
                key={belief.title}
                data-stain={belief.stain}
              >
                <span className="belief-icon">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="belief-title">{belief.title}</h3>
                  <p className="belief-text">{belief.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

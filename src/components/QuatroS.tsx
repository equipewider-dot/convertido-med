import Tag from './Tag';
import { FOUR_S, type SCard } from '@/lib/content';
import {
  IconScrolling,
  IconSearch,
  IconShopping,
  IconStreaming,
} from './icons';

const ICONS: Record<SCard['icon'], React.ComponentType<{ size?: number }>> = {
  streaming: IconStreaming,
  scrolling: IconScrolling,
  search: IconSearch,
  shopping: IconShopping,
};

export default function QuatroS() {
  return (
    <section className="field" data-field="bright" id="quatro-s">
      <div className="wrap">
        <div className="section-head">
          <Tag stain="aniline">Metodologia Convertido</Tag>
          <h2 className="display h2">
            Os 4S aplicados ao consultório particular.
          </h2>
          <p className="lede">
            Streaming, Scrolling, Search e Shopping. Os quatro comportamentos
            digitais que fazem o paciente sair do desconhecido e chegar até a
            cadeira do consultório. Nenhuma campanha vai ao ar sem passar pelos
            quatro.
          </p>
        </div>

        {/* Painel de quatro colorações: quatro comportamentos distintos. */}
        <div className="four-s-grid">
          {FOUR_S.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <div
                className="specimen"
                key={card.code}
                data-stain={card.stain}
                data-reveal={i}
              >
                <header className="specimen-tag">
                  <span className="tag-swatch" />
                  <span className="mono">{card.code}</span>
                </header>
                <div className="specimen-body">
                  <span className="s-icon">
                    <Icon />
                  </span>
                  <h3 className="display h3 s-name">{card.name}</h3>
                  <p className="s-desc">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

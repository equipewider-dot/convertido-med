import ProofPanel from './ProofPanel';
import Tag from './Tag';
import { PHASES, TIMELINE } from '@/lib/content';

export default function Metodo() {
  return (
    <section className="field field-overlap" data-field="bright" id="metodo">
      <div className="wrap">
        <ProofPanel />

        <div className="section-head">
          <Tag stain="hematox">Método Convertido 90</Tag>
          <h2 className="display h2">
            Três fases, noventa dias, um método próprio.
          </h2>
          <p className="lede">
            Cada fase resolve um problema específico. A ordem não é sugestão, é
            estrutura. Campanha sem método é dinheiro queimado com estilo.
          </p>
        </div>

        {/* O que ordena as fases é o intervalo de dias, desenhado como
            eixo real — não um marcador numerado sobre o card. */}
        <div className="axis" aria-hidden="true">
          {PHASES.map((phase, i) => (
            <div className="axis-seg" key={phase.num} data-stain={phase.stain}>
              <span className="axis-mark">{TIMELINE[i]}</span>
              <span className="axis-bar" />
            </div>
          ))}
          <span className="axis-end">{TIMELINE[TIMELINE.length - 1]}</span>
        </div>

        <div className="phases">
          {PHASES.map((phase, i) => (
            <article
              className="specimen"
              key={phase.num}
              data-stain={phase.stain}
              data-reveal={i}
            >
              <header className="specimen-tag">
                <span className="tag-swatch" />
                <span className="mono">{phase.num}</span>
              </header>
              <div className="specimen-body">
                <div className="phase-days tabular">{phase.days}</div>
                <h3 className="display h3 phase-name">{phase.name}</h3>
                <p className="phase-desc">{phase.desc}</p>
                <ul className="phase-list">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

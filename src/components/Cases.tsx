import Tag from './Tag';
import { CASES } from '@/lib/content';

export default function Cases() {
  return (
    <section className="field" data-field="bright" id="cases">
      <div className="wrap">
        <div className="section-head">
          <Tag stain="ochre">Prova em número</Tag>
          <h2 className="display h2">
            O que nossos médicos viram nos primeiros 120 dias.
          </h2>
          <p className="lede">
            Dashboard aberto, número verificável, consulta realizada. Os cases
            abaixo são representativos e ilustram a leitura de dados que
            entregamos por especialidade.
          </p>
        </div>

        {/* A coloração diz de qual tecido se trata: osso para ortopedia,
            anilina para oftalmologia, eosina para tecido mole. */}
        <div className="cases-grid">
          {CASES.map((item, i) => (
            <article
              className="specimen"
              key={item.specialty}
              data-stain={item.stain}
              data-reveal={i}
            >
              <header className="specimen-tag">
                <span className="tag-swatch" />
                <span className="mono">{item.specialty}</span>
              </header>
              <div className="specimen-body">
                {item.metrics.map((metric) => (
                  <div className="case-metric" key={metric.label}>
                    <div className="case-value tabular">{metric.value}</div>
                    <div className="case-label">{metric.label}</div>
                  </div>
                ))}
                <p className="case-caption">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="cases-note">
          Números representativos. Cases completos com dashboard aberto
          disponíveis na reunião de diagnóstico.
        </p>
      </div>
    </section>
  );
}

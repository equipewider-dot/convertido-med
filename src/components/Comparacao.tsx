import Tag from './Tag';
import { IconArrowRight, IconCheck, IconMinus } from './icons';
import { COMPARE_NEG, COMPARE_POS } from '@/lib/content';

export default function Comparacao() {
  return (
    /* Mesmo chao do manifesto e do hero. */
    <section className="field" data-field="dark">
      <div className="wrap">
        <div className="section-head">
          <Tag stain="congo">O que nos separa</Tag>
          <h2 className="display h2">
            Não somos mais uma agência de tráfego focada em médico.
          </h2>
        </div>

        <div className="compare-grid">
          {/* A agência comum não recebe coloração: fica sem tinta, de propósito. */}
          <div className="compare-neg" data-reveal="0">
            <span className="mono compare-neg-tag">{COMPARE_NEG.tag}</span>
            <h3 className="display h3 compare-title">{COMPARE_NEG.title}</h3>
            <ul className="compare-list">
              {COMPARE_NEG.items.map((item) => (
                <li key={item}>
                  <span className="compare-icon">
                    <IconMinus />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="specimen compare-pos"
            data-stain="malachite"
            data-reveal="1"
          >
            {/* A marca assina a propria coluna: o logo entra no lugar do
                texto mono das outras laminas, e sem o quadrado da coloracao
                — a marca ja e a identificacao, o swatch viraria repeticao. */}
            <header className="specimen-tag">
              <img
                src="/convertido-med-logo.png"
                alt={COMPARE_POS.tag}
                className="tag-logo"
                width={735}
                height={80}
              />
              {/* So a seta: sem texto, o nome acessivel tem que vir do
                  aria-label ou o link fica mudo no leitor de tela. */}
              <a href="#contato" className="tag-cta" aria-label="Falar agora">
                <span className="btn-arrow">
                  <IconArrowRight size={14} />
                </span>
              </a>
            </header>
            <div className="specimen-body">
              <h3 className="display h3 compare-title">{COMPARE_POS.title}</h3>
              <ul className="compare-list">
                {COMPARE_POS.items.map((item) => (
                  <li key={item}>
                    <span className="compare-icon">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

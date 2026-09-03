import Tag from './Tag';
import {
  IconCross,
  IconPortrait,
  IconReceipt,
  IconStopwatch,
  IconTarget,
} from './icons';
import { REFUSALS, type Refusal } from '@/lib/content';

const ICONS: Record<Refusal['icon'], React.ComponentType<{ size?: number }>> = {
  stopwatch: IconStopwatch,
  target: IconTarget,
  portrait: IconPortrait,
  cross: IconCross,
  receipt: IconReceipt,
};

export default function Recusas() {
  return (
    /* Mesmo chão da Metodologia Convertido. Depois de quatro seções de
       lâminas, as recusas chegam como lista severa — a quebra de ritmo
       vem da forma, não do campo. */
    <section className="field" data-field="bright" id="recusas">
      <div className="wrap">
        <div className="section-head">
          <Tag stain="congo">Recusas públicas</Tag>
          <h2 className="display h2">
            O que a Convertido Med não faz, e nem vai fazer.
          </h2>
          <p className="lede">
            Cada recusa aqui é um filtro. Se você lê alguma delas e pensa
            &quot;então essa não é pra mim&quot;, a gente conseguiu o que
            queria. Melhor sair no começo do que virar arrependimento seu daqui
            a três meses.
          </p>
        </div>

        {/* Cada linha tem duas vozes em colunas próprias: a recusa corta,
            a razão explica. Quem varre a lista lê só a coluna da esquerda
            e já sabe se ficou de fora. */}
        <ul className="refusals">
          {REFUSALS.map((refusal, i) => {
            const Icon = ICONS[refusal.icon];
            return (
              <li key={refusal.icon} data-reveal={i % 4}>
                {/* Decorativo: o ícone nomeia o que a frase já diz. */}
                <span className="refusal-mark" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <p className="refusal-claim">
                  {refusal.before}
                  <strong>{refusal.strong}</strong>
                </p>
                <p className="refusal-why">{refusal.why}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

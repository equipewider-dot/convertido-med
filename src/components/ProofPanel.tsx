import RotatingClaims from './RotatingClaims';
import { PROOF_NUMBERS, type Stain } from '@/lib/content';

/** Uma coloração por medida — a régua de leitura da operação. */
const STAINS: Stain[] = ['hematox', 'aniline', 'ochre', 'malachite'];

/**
 * Bloco, não seção: abre a seção do Método Convertido 90, dentro do
 * mesmo `.wrap`. As credenciais e os números são a prova que sustenta o
 * método — separá-los em duas seções era o que criava a divisão.
 */
export default function ProofPanel() {
  return (
    <div className="proof-panel" data-field="dark">
      <RotatingClaims />
      <div className="proof-numbers">
        {PROOF_NUMBERS.map((item, i) => (
          <div
            className="proof-item"
            key={item.caption}
            data-stain={STAINS[i]}
            data-reveal={i % 4}
          >
            <div className="proof-value tabular">{item.value}</div>
            <div className="proof-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

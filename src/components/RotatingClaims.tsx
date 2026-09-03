'use client';

import { useEffect, useState } from 'react';
import { CLAIMS, type Claim } from '@/lib/content';
import {
  IconCalendar,
  IconDashboard,
  IconHub,
  IconStethoscope,
} from './icons';

const ICONS: Record<Claim['icon'], React.ComponentType<{ size?: number }>> = {
  calendar: IconCalendar,
  stethoscope: IconStethoscope,
  dashboard: IconDashboard,
  hub: IconHub,
};

const INTERVAL = 3200;

/**
 * As quatro credenciais alternam uma por vez na faixa.
 *
 * Todas ficam no DOM o tempo todo — as inativas só zeram a opacidade,
 * então continuam legíveis para leitores de tela e para quem chega sem JS.
 * Com movimento reduzido não há rodízio: as quatro aparecem juntas.
 */
export default function RotatingClaims() {
  const [active, setActive] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      return;
    }
    const id = setInterval(
      () => setActive((v) => (v + 1) % CLAIMS.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <ul className={still ? 'claims claims-still' : 'claims'}>
      {CLAIMS.map((claim, i) => {
        const Icon = ICONS[claim.icon];
        return (
          <li
            className={!still && i === active ? 'claim is-active' : 'claim'}
            key={claim.label}
            data-stain={claim.stain}
          >
            <span className="claim-icon">
              <Icon size={44} />
            </span>
            <span className="claim-label">{claim.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

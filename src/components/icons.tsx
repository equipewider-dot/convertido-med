/* ============================================================
   Ícones — traço 1.5, grade de 24, sempre currentColor.
   Um único conjunto desenhado à mão: sem emoji, sem dependência.
   ============================================================ */

type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
});

/** Streaming — vídeo em reprodução. */
export function IconStreaming({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 22h8" />
      <path d="m10.5 8.8 4.2 2.2-4.2 2.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Scrolling — feed percorrido de cima a baixo. */
export function IconScrolling({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 6.5v4" />
      <path d="M9.5 15.5 12 18l2.5-2.5" />
    </svg>
  );
}

/** Search — intenção declarada. */
export function IconSearch({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </svg>
  );
}

/** Shopping — a decisão fechada. */
export function IconShopping({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 7h14l-1.2 12.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" />
      <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
    </svg>
  );
}

/** Marca de ausência, na coluna da agência comum. */
export function IconMinus({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 12h12" />
    </svg>
  );
}

/** Marca de confirmação, na coluna da Convertido Med. */
export function IconCheck({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconMenu({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

/* --- Ícones das credenciais da faixa --- */

/** Método Convertido 120 — os cento e vinte dias, com um deles marcado. */
export function IconCalendar({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <rect
        x="7"
        y="12.5"
        width="3.6"
        height="3.6"
        rx="0.6"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/** Exclusivo para médicos. */
export function IconStethoscope({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 3.5V9a4.5 4.5 0 0 0 9 0V3.5" />
      <path d="M3.2 3.5h3.4" />
      <path d="M12.4 3.5h3.4" />
      <path d="M9.5 13.5v1.6a4.4 4.4 0 0 0 8.8 0v-1.1" />
      <circle cx="18.3" cy="11" r="2.2" />
    </svg>
  );
}

/** Dashboard aberto — o painel que o médico enxerga. */
export function IconDashboard({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" />
      <path d="M8 16.5v-3.5" />
      <path d="M12 16.5v-5.5" />
      <path d="M16 16.5v-2" />
    </svg>
  );
}

/** Convertido Hub integrado — o nó central e o que se liga a ele. */
export function IconHub({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="5" cy="5.5" r="1.8" />
      <circle cx="19" cy="5.5" r="1.8" />
      <circle cx="12" cy="20" r="1.8" />
      <path d="m6.4 6.9 3.7 3.3" />
      <path d="m17.6 6.9-3.7 3.3" />
      <path d="M12 14.6v3.6" />
    </svg>
  );
}

/* --- Ícones das crenças do manifesto --- */

/** Conversão — o funil que separa volume de consulta. */
export function IconFunnel({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.5 5h17l-6.6 7.6V20l-3.8-2.3v-5.1z" />
    </svg>
  );
}

/** O trecho inteiro do trabalho, de ponta a ponta. */
export function IconRoute({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="4.5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19.5" cy="12" r="2" />
      <path d="M6.5 12h3.5" />
      <path d="M14 12h3.5" />
    </svg>
  );
}

/* --- Ícones das recusas: cada um nomeia o que está sendo recusado --- */

/** Teste de um mês — o cronômetro curto contra os cento e vinte dias. */
export function IconStopwatch({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M9.5 2.8h5" />
      <path d="M12 2.8v3.2" />
      <path d="M12 9.8v3.7h3.2" />
    </svg>
  );
}

/** Número prometido — o alvo que ninguém honesto garante acertar. */
export function IconTarget({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Aparecer — o rosto e o nome que a autoridade médica exige. */
export function IconPortrait({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  );
}

/** Medicina especializada — o limite do que atendemos. */
export function IconCross({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M12 8.5v7" />
      <path d="M8.5 12h7" />
    </svg>
  );
}

/** Verba de mídia — a nota que fica separada da mensalidade. */
export function IconReceipt({ size = 20, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 3h14v18l-3.5-1.8-3.5 1.8-3.5-1.8L5 21z" />
      <path d="M8.5 8.5h7" />
      <path d="M8.5 12.5h7" />
    </svg>
  );
}

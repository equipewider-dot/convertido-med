/* ============================================================
   CONVERTIDO MED — CONTEÚDO
   Todo o texto da landing vive aqui. Mexer em copy não exige
   mexer em componente.
   ============================================================ */

export const NAV_LINKS = [
  { href: '#metodo', label: 'Método' },
  { href: '#quatro-s', label: 'Os 4S' },
  { href: '#recusas', label: 'Recusas' },
] as const;


export const PROOF_NUMBERS = [
  { value: '100%', caption: 'Foco em medicina' },
  { value: '90', caption: 'Dias de método' },
  { value: '4S', caption: 'Pilares de campanha' },
  { value: '1', caption: 'Métrica final: consulta' },
] as const;

/** Coloracao histologica. Cada uma carrega informacao, nunca decoracao. */
export type Stain = 'hematox' | 'eosin' | 'aniline' | 'ochre' | 'malachite' | 'congo';

/**
 * As quatro credenciais da operação. Aparecem na faixa abaixo do hero,
 * uma por vez, alternando — cada uma com seu icone e sua coloracao.
 */
export type Claim = {
  label: string;
  icon: 'calendar' | 'stethoscope' | 'dashboard' | 'hub';
  stain: Stain;
};

export const CLAIMS: Claim[] = [
  { label: 'Método Convertido 90', icon: 'calendar', stain: 'hematox' },
  { label: 'Exclusivo para médicos', icon: 'stethoscope', stain: 'eosin' },
  { label: 'Dashboard aberto', icon: 'dashboard', stain: 'aniline' },
  { label: 'Convertido Hub integrado', icon: 'hub', stain: 'malachite' },
];

/**
 * As crencas do manifesto. O texto e o original, palavra por palavra;
 * os titulos sao novos, para caber no formato de lista com icone.
 */
export type Belief = {
  title: string;
  text: string;
  icon: 'stethoscope' | 'funnel' | 'dashboard' | 'route';
  stain: Stain;
};

export const BELIEFS: Belief[] = [
  {
    title: 'Independência do convênio',
    icon: 'stethoscope',
    stain: 'hematox',
    text: 'Médico bom não deveria depender de convênio. Autoridade construída em anos de residência merece virar demanda, não só engajamento.',
  },
  {
    title: 'Conversão, não tráfego',
    icon: 'funnel',
    stain: 'eosin',
    text: 'Paciente particular não chega por sorte. A gente não faz tráfego pago para médico: converte autoridade médica em agenda particular.',
  },
  {
    title: 'A diferença que aparece',
    icon: 'dashboard',
    stain: 'ochre',
    text: 'É uma diferença pequena na frase e enorme no que aparece no consultório no final do mês.',
  },
  {
    title: 'Do diagnóstico à cadeira',
    icon: 'route',
    stain: 'malachite',
    text: 'Começa antes do primeiro anúncio, no diagnóstico da especialidade e do gargalo real. Termina depois do último clique, na cadeira ocupada.',
  },
];

export type Phase = {
  num: string;
  name: string;
  days: string;
  desc: string;
  items: string[];
  stain: Stain;
};

export const PHASES: Phase[] = [
  {
    num: 'Fase 01',
    stain: 'hematox',
    name: 'Diagnóstico',
    days: 'Dias 1 a 30',
    desc: 'A operação entra no consultório antes de entrar no Ads Manager. Zero real investido em anúncio nessa fase. Se tem furo aqui, campanha nenhuma resolve.',
    items: [
      'Ticket, público e capacidade',
      'Script de WhatsApp reestruturado',
      'Procedimento carro-chefe definido',
      'Setup completo de mensuração',
    ],
  },
  {
    num: 'Fase 02',
    stain: 'aniline',
    name: 'Conversão',
    days: 'Dias 31 a 60',
    desc: 'Campanhas ativas com otimização semanal baseada em qualificação, não em volume. O foco não é gerar mais lead. É converter mais lead em consulta.',
    items: [
      'Landing page dedicada',
      'Criativos por especialidade',
      'Meta e Google Ads ativos',
      'Otimização semanal com dado',
    ],
  },
  {
    num: 'Fase 03',
    stain: 'malachite',
    name: 'Escala',
    days: 'Dias 61 a 90',
    desc: 'Análise cirúrgica do que trouxe paciente real e redistribuição de verba nos canais vencedores. O relatório final mede consulta realizada, não clique comprado.',
    items: [
      'Análise de canais vencedores',
      'Verba realocada estrategicamente',
      'Refinamento de atendimento',
      'Plano de continuidade documentado',
    ],
  },
];

export const TIMELINE = ['Dia 0', 'Dia 30', 'Dia 60', 'Dia 90'] as const;

export type SCard = {
  icon: 'streaming' | 'scrolling' | 'search' | 'shopping';
  code: string;
  name: string;
  desc: string;
  stain: Stain;
};

export const FOUR_S: SCard[] = [
  {
    icon: 'streaming',
    stain: 'hematox',
    code: 'S1',
    name: 'Streaming',
    desc: 'Vídeo do médico explicando procedimento, tour do consultório, depoimento de paciente. YouTube, Reels longos e TikTok. É onde a autoridade médica ganha rosto e vira confiança antes do primeiro contato.',
  },
  {
    icon: 'scrolling',
    stain: 'eosin',
    code: 'S2',
    name: 'Scrolling',
    desc: 'Conteúdo no feed do Instagram, LinkedIn e Reels curtos que educa sobre a especialidade. É o que gera reconhecimento espontâneo e traz o paciente já pré-qualificado para o próximo estágio.',
  },
  {
    icon: 'search',
    stain: 'aniline',
    code: 'S3',
    name: 'Search',
    desc: 'Google Ads, SEO médico e presença local. Captura quem está buscando ativamente o sintoma, o procedimento ou o especialista. É a intenção mais quente do funil, e a mais desperdiçada por agências genéricas.',
  },
  {
    icon: 'shopping',
    stain: 'malachite',
    code: 'S4',
    name: 'Shopping',
    desc: 'A landing como hub de conversão. Jornada fluida do clique ao agendamento, WhatsApp com fluxo estruturado, integração com o Convertido Hub. É onde o interesse vira consulta na agenda.',
  },
];

export type CompareColumn = {
  tag: string;
  title: string;
  items: string[];
};

export const COMPARE_NEG: CompareColumn = {
  tag: 'Agência comum',
  title: 'Vende execução. Mede clique.',
  items: [
    'Contratada para rodar anúncio',
    'Métricas de vaidade: CPM, CTR, alcance',
    'Atende qualquer nicho',
    'Relatório mensal em PDF confuso',
    'Playbook genérico aplicado igual',
  ],
};

export const COMPARE_POS: CompareColumn = {
  tag: 'Convertido Med',
  title: 'Vende resultado. Mede consulta.',
  items: [
    'Contratada para resolver dependência do convênio',
    'Lead qualificado, agendamento, consulta realizada',
    'Exclusivamente médico especialista',
    'Dashboard aberto, reunião semanal, Convertido Hub integrado',
    'Leitura fina do paciente da sua especialidade',
  ],
};

export type Case = {
  specialty: string;
  metrics: { value: string; label: string }[];
  caption: string;
  /** Osso para ortopedia, anilina para oftalmologia, eosina para tecido mole. */
  stain: Stain;
};

export const CASES: Case[] = [
  {
    specialty: 'Ortopedia · Interior SP',
    stain: 'ochre',
    metrics: [
      { value: 'R$ 87', label: 'Custo por lead qualificado' },
      { value: '42%', label: 'Taxa de agendamento' },
      { value: '61', label: 'Consultas particulares no mês 3' },
    ],
    caption:
      'Saiu de dependência quase total do convênio para 40% de faturamento particular em 90 dias.',
  },
  {
    specialty: 'Oftalmologia · Capital',
    stain: 'aniline',
    metrics: [
      { value: 'R$ 54', label: 'Custo por lead qualificado' },
      { value: '38%', label: 'Taxa de agendamento' },
      { value: '94', label: 'Consultas particulares no mês 3' },
    ],
    caption:
      'Estruturação do WhatsApp na fase 1 dobrou a taxa de agendamento antes mesmo do primeiro anúncio subir.',
  },
  {
    specialty: 'Cirurgia plástica · Capital',
    stain: 'eosin',
    metrics: [
      { value: 'R$ 168', label: 'Custo por lead qualificado' },
      { value: '31%', label: 'Taxa de agendamento' },
      { value: '37', label: 'Consultas particulares no mês 3' },
    ],
    caption:
      'Ticket médio elevado justifica CPL maior. O que importa é ROI de procedimento fechado, não custo por clique.',
  },
];

/* A recusa e a razao sao duas vozes: a primeira corta, a segunda explica.
   Por isso `why` e campo proprio, e nao a cauda da mesma frase.

   `icon` nomeia o que esta sendo recusado — o prazo curto, o numero
   prometido, o rosto. Quem varre a coluna da esquerda le a lista das
   coisas, antes de ler as frases. */
export type Refusal = {
  icon: 'stopwatch' | 'target' | 'portrait' | 'cross' | 'receipt';
  before: string;
  strong: string;
  why: string;
};

export const REFUSALS: Refusal[] = [
  {
    icon: 'stopwatch',
    before: 'Não trabalhamos com médico que ',
    strong: 'quer só testar por um mês',
    why: 'Método de 90 dias existe pelo motivo pelo qual existe.',
  },
  {
    icon: 'target',
    before: 'Não prometemos ',
    strong: 'número específico de leads ou consultas',
    why: 'Nem a gente controla o que o paciente decide depois de ver seu anúncio.',
  },
  {
    icon: 'portrait',
    before: 'Não fazemos ',
    strong: 'Instagram para quem não quer aparecer',
    why: 'Autoridade médica precisa de rosto e nome, não de post educativo genérico.',
  },
  {
    icon: 'cross',
    before: 'Não atendemos ',
    strong: 'fora de medicina especializada',
    why: 'Nada de dentista, nada de estética não médica, nada de e-commerce.',
  },
  {
    icon: 'receipt',
    before: 'Não escondemos ',
    strong: 'verba de mídia dentro da mensalidade',
    why: 'Investimento em anúncio é sempre separado, transparente e no seu gestor de conta.',
  },
];

export const ESPECIALIDADES = [
  'Ortopedia',
  'Oftalmologia',
  'Cirurgia plástica',
  'Dermatologia',
  'Ginecologia',
  'Cardiologia',
  'Urologia',
  'Otorrinolaringologia',
  'Endocrinologia',
  'Neurologia',
  'Outra especialidade médica',
] as const;

export const FOOTER_COLS = [
  {
    title: 'Operação',
    links: [
      { href: '#metodo', label: 'Método Convertido 90' },
      { href: '#quatro-s', label: 'Os 4S da Convertido' },
          { href: '#recusas', label: 'O que não fazemos' },
    ],
  },
  {
    title: 'Editorial',
    links: [
      { href: '#', label: 'Newsletter Convertido' },
      { href: '#', label: 'Relatório setorial' },
      { href: '#', label: 'Podcast' },
      { href: '#', label: 'Biblioteca' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { href: '#contato', label: 'Solicitar diagnóstico' },
      { href: '#', label: 'WhatsApp' },
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'LinkedIn' },
    ],
  },
] as const;

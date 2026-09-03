/* ============================================================
   CONVERTIDO MED — INTEGRAÇÃO COM O CONVERTIDO HUB
   ============================================================

   Fluxo: [Landing] --POST--> [/api/lead] --POST--> [Webhook n8n]
                                                    --API--> [Convertido Hub]
                                                             create_opportunity

   PASSO A PASSO PARA ATIVAR:

   1. No n8n, criar workflow com:
      - Trigger: Webhook (POST, path /convertido-med-lead)
      - Node: HTTP Request ou node oficial do Convertido Hub
              chamando create_opportunity com o payload recebido
      - Response: retorna 200 OK

   2. Copiar a URL do webhook (algo como
      https://n8n-convertido-claude.up.railway.app/webhook/convertido-med-lead)

   3. Colar essa URL em HUB_WEBHOOK_URL no arquivo .env.local.
      Enquanto ela estiver vazia, a rota roda em modo simulação:
      valida, loga o payload no servidor e devolve sucesso.

   4. Ajustar NEXT_PUBLIC_WHATSAPP no .env.local para o número real
      de fallback exibido nas mensagens de sucesso e erro.

   stageId (etapa inicial do funil) e owner (responsável) são definidos
   no próprio workflow do n8n. Assim, mudar essas regras no futuro não
   exige mexer no código da landing.
   ============================================================ */

export const LANDING_VERSION = 'v2.0-convertido-design-system';

export type LeadForm = {
  nome: string;
  email: string;
  especialidade: string;
  cidade: string;
  whatsapp: string;
  contexto: string;
};

export type Utms = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
};

export type HubPayload = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  segment: string;
  description: string;
  origin: string;
  channel: string;
  priority: string;
  tags: string[];
  externalKey: string;
  sourceUrl: string;
  notes: string;
  _meta: {
    submittedAt: string;
    userAgent: string;
    landingVersion: string;
  };
};

export const EMPTY_FORM: LeadForm = {
  nome: '',
  email: '',
  especialidade: '',
  cidade: '',
  whatsapp: '',
  contexto: '',
};

/* ------------------------------------------------------------
   Captura de UTMs (origem da campanha)
   ------------------------------------------------------------ */
export function captureUtms(): Utms {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direto',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    referrer: document.referrer || 'direto',
  };
}

/* ------------------------------------------------------------
   Máscara automática de WhatsApp
   ------------------------------------------------------------ */
export function maskWhatsapp(raw: string): string {
  const v = raw.replace(/\D/g, '').slice(0, 11);
  if (v.length > 10) return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  if (v.length > 6) return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
  if (v.length > 2) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  return v;
}

/* ------------------------------------------------------------
   Validação de campos
   ------------------------------------------------------------ */
export type FieldName = keyof LeadForm;

const REQUIRED: FieldName[] = ['nome', 'email', 'especialidade', 'cidade', 'whatsapp'];

export function validateField(name: FieldName, value: string): boolean {
  const trimmed = value.trim();

  if (REQUIRED.includes(name) && !trimmed) return false;
  if (name === 'email' && trimmed) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  if (name === 'whatsapp' && trimmed) {
    const digits = trimmed.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 13;
  }
  return true;
}

export function validateForm(form: LeadForm): FieldName[] {
  return REQUIRED.filter((name) => !validateField(name, form[name]));
}

/* ------------------------------------------------------------
   Monta payload no formato do Convertido Hub (create_opportunity)
   ------------------------------------------------------------ */
export function buildHubPayload(
  form: LeadForm,
  utms: Utms,
  ctx: { sourceUrl: string; userAgent: string },
): HubPayload {
  let city = form.cidade;
  let state = '';
  if (form.cidade && form.cidade.includes('/')) {
    const [rawCity, rawState] = form.cidade.split('/');
    city = rawCity.trim();
    state = rawState.trim().toUpperCase();
  }

  const externalKey = `landing-medcv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  return {
    companyName: `Consultório ${form.nome}`,
    contactName: form.nome,
    email: form.email,
    phone: form.whatsapp,
    city,
    state,
    segment: form.especialidade,
    description: form.contexto || 'Sem contexto informado no formulário',
    origin: `Landing Convertido Med · ${utms.utm_source}`,
    channel: utms.utm_medium || 'landing_page',
    priority: 'Alta',
    tags: ['landing-med', form.especialidade.toLowerCase().replace(/\s+/g, '-')],
    externalKey,
    sourceUrl: ctx.sourceUrl,
    notes: [
      `Origem: ${utms.utm_source}`,
      `Campanha: ${utms.utm_campaign || 'sem UTM'}`,
      `Conteúdo: ${utms.utm_content || 'sem UTM'}`,
      `Referrer: ${utms.referrer}`,
      `Contexto informado: ${form.contexto || 'não informado'}`,
    ].join('\n'),
    _meta: {
      submittedAt: new Date().toISOString(),
      userAgent: ctx.userAgent,
      landingVersion: LANDING_VERSION,
    },
  };
}

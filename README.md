# Convertido Med — Landing (Next.js + TypeScript)

Réplica em Next.js (App Router) da landing `convertido-med-landing.html`, que
segue no repositório como referência visual.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # sobe o build
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # metadata, Inter via next/font, globals.css
│   ├── page.tsx          # composição das seções
│   ├── globals.css       # design system Convertido (CSS do HTML original)
│   └── api/lead/route.ts # recebe o lead e repassa ao webhook do n8n
├── components/           # uma seção por componente
│   ├── Topbar.tsx        # client — borda no scroll
│   ├── LeadForm.tsx      # client — validação, máscara, envio
│   └── …                 # demais seções são server components
└── lib/
    ├── content.ts        # todo o copy e os dados das seções
    └── hub.ts            # validação, máscara, payload do Convertido Hub
```

O CSS foi mantido idêntico ao do HTML original, então o design system
(variáveis, gradientes, breakpoints) continua sendo a fonte da verdade.
Componentes consomem as mesmas classes.

## Integração com o Convertido Hub

Fluxo: `Landing → POST /api/lead → Webhook n8n → Convertido Hub (create_opportunity)`.

Diferente do HTML, a URL do webhook fica **no servidor** — não vai no bundle do
browser. Copie `.env.example` para `.env.local` e preencha:

| Variável | O que é |
| --- | --- |
| `HUB_WEBHOOK_URL` | URL do webhook n8n. Vazia = modo simulação: valida, loga o payload no terminal e responde sucesso. |
| `NEXT_PUBLIC_WHATSAPP` | Número de fallback nas mensagens de sucesso/erro (padrão `5511999999999`). |

`stageId` e `owner` continuam definidos no workflow do n8n. O passo a passo para
criar o workflow está no topo de [src/lib/hub.ts](src/lib/hub.ts).
# convertido-med

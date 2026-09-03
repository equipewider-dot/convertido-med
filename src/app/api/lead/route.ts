import { NextResponse } from 'next/server';
import { validateForm, buildHubPayload, type LeadForm, type Utms } from '@/lib/hub';

/**
 * Repassa o lead da landing para o webhook do n8n, que por sua vez chama
 * create_opportunity no Convertido Hub.
 *
 * A URL do webhook fica no servidor (HUB_WEBHOOK_URL), fora do bundle do
 * browser. Sem ela configurada, a rota entra em modo simulação: valida,
 * loga o payload e responde sucesso — útil para rodar local sem n8n.
 */
export async function POST(request: Request) {
  let body: { form?: LeadForm; utms?: Utms };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'JSON inválido' }, { status: 400 });
  }

  const { form, utms } = body;
  if (!form || !utms) {
    return NextResponse.json({ ok: false, error: 'Payload incompleto' }, { status: 400 });
  }

  const invalid = validateForm(form);
  if (invalid.length > 0) {
    return NextResponse.json({ ok: false, invalid }, { status: 422 });
  }

  const payload = buildHubPayload(form, utms, {
    sourceUrl: request.headers.get('referer') || '',
    userAgent: request.headers.get('user-agent') || '',
  });

  const webhookUrl = process.env.HUB_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log(
      '[SIMULATE_MODE] Payload que seria enviado ao Convertido Hub:',
      JSON.stringify(payload, null, 2),
    );
    return NextResponse.json({ ok: true, simulated: true, externalKey: payload.externalKey });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return NextResponse.json({ ok: true, externalKey: payload.externalKey });
  } catch (err) {
    console.error('[Convertido Hub] Falha ao enviar lead:', err);
    return NextResponse.json({ ok: false, error: 'Falha ao registrar lead' }, { status: 502 });
  }
}

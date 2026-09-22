'use client';

import { useRef, useState } from 'react';
import { ESPECIALIDADES } from '@/lib/content';
import { IconArrowRight } from './icons';
import {
  EMPTY_FORM,
  captureUtms,
  maskWhatsapp,
  validateField,
  validateForm,
  type FieldName,
  type LeadForm as LeadFormData,
} from '@/lib/hub';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=5527997959625&';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldName[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const hasError = (name: FieldName) => errors.includes(name);

  const setError = (name: FieldName, invalid: boolean) =>
    setErrors((prev) =>
      invalid ? (prev.includes(name) ? prev : [...prev, name]) : prev.filter((f) => f !== name),
    );

  const update = (name: FieldName, rawValue: string) => {
    const value = name === 'whatsapp' ? maskWhatsapp(rawValue) : rawValue;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Revalida em tempo real apenas o campo que já está marcado com erro.
    if (hasError(name)) setError(name, !validateField(name, value));
  };

  const onBlur = (name: FieldName) => {
    if (form[name]) setError(name, !validateField(name, form[name]));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('idle');

    const invalid = validateForm(form);
    setErrors(invalid);

    if (invalid.length > 0) {
      const first = formRef.current?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`);
      first?.focus();
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form, utms: captureUtms() }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus('success');

      if (typeof window.gtag === 'function') window.gtag('event', 'lead_submitted');
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      window.dispatchEvent(new CustomEvent('lead:submitted', { detail: form }));
    } catch (err) {
      console.error('[Convertido Hub] Falha ao enviar lead:', err);
      setStatus('error');
    }
  }

  const fieldClass = (name: FieldName, base = 'form-field') =>
    hasError(name) ? `${base} err` : base;

  return (
    /* A única lâmina em campo claro dentro do ato escuro: é o objeto
       que se destaca porque é o que deve ser usado. */
    <form
      className="form-card"
      id="leadForm"
      data-field="bright"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-head">
        <div className="form-integration">
          <span className="dot" />
          <span>Leads gerenciados no Convertido Hub</span>
        </div>
        <div className="form-title">Solicitar conversa de diagnóstico</div>
        <div className="form-sub">
          Resposta em até 24 horas úteis pelo WhatsApp informado
        </div>
      </div>

      <div className={status === 'success' ? 'hidden' : 'form-body'}>
        <div className={fieldClass('nome')}>
          <label htmlFor="nome">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={(e) => update('nome', e.target.value)}
            onBlur={() => onBlur('nome')}
            placeholder="Dr(a). Fulano da Silva"
            autoComplete="name"
            aria-invalid={hasError('nome')}
          />
          <div className="field-err" role="alert">
            Informe seu nome completo.
          </div>
        </div>

        <div className={fieldClass('email')}>
          <label htmlFor="email">E-mail profissional</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={() => onBlur('email')}
            placeholder="contato@consultorio.com.br"
            autoComplete="email"
            aria-invalid={hasError('email')}
          />
          <div className="field-err" role="alert">
            Informe um e-mail válido.
          </div>
        </div>

        <div className="form-field two">
          <div className={fieldClass('especialidade', 'form-field-inline')}>
            <label htmlFor="especialidade">Especialidade</label>
            <select
              id="especialidade"
              name="especialidade"
              value={form.especialidade}
              onChange={(e) => update('especialidade', e.target.value)}
              onBlur={() => onBlur('especialidade')}
              aria-invalid={hasError('especialidade')}
            >
              <option value="">Selecione</option>
              {ESPECIALIDADES.map((esp) => (
                <option key={esp}>{esp}</option>
              ))}
            </select>
            <div className="field-err" role="alert">
              Selecione a especialidade.
            </div>
          </div>
          <div className={fieldClass('cidade', 'form-field-inline')}>
            <label htmlFor="cidade">Cidade e UF</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={form.cidade}
              onChange={(e) => update('cidade', e.target.value)}
              onBlur={() => onBlur('cidade')}
              placeholder="São Paulo/SP"
              autoComplete="address-level2"
              aria-invalid={hasError('cidade')}
            />
            <div className="field-err" role="alert">
              Informe a cidade.
            </div>
          </div>
        </div>

        <div className={fieldClass('whatsapp')}>
          <label htmlFor="whatsapp">WhatsApp com DDD</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={form.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            onBlur={() => onBlur('whatsapp')}
            placeholder="(11) 90000-0000"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={hasError('whatsapp')}
          />
          <div className="field-err" role="alert">
            Informe um WhatsApp válido com DDD.
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contexto">
            Em uma frase, qual seu principal gargalo hoje?
          </label>
          <input
            type="text"
            id="contexto"
            name="contexto"
            value={form.contexto}
            onChange={(e) => update('contexto', e.target.value)}
            placeholder="Ex: dependência do convênio"
          />
        </div>

        <button
          type="submit"
          className={`btn btn-primary form-submit${status === 'loading' ? ' loading' : ''}`}
          id="submitBtn"
        >
          <span className="btn-text">
            Solicitar diagnóstico
            <span className="btn-arrow">
              <IconArrowRight />
            </span>
          </span>
        </button>

        <div className="form-legal">
          Ao enviar, você concorda que a equipe da Convertido Med entre em
          contato pelo WhatsApp informado. Seus dados são tratados conforme a
          LGPD, armazenados no Convertido Hub e não são compartilhados com
          terceiros.
        </div>
      </div>

      {status === 'success' && (
        <div className="feedback" id="successMsg" role="status">
          <strong>Recebemos sua solicitação.</strong>
          A equipe da Convertido Med entra em contato pelo WhatsApp informado em
          até 24 horas úteis. Se preferir adiantar, é só chamar direto pelo link
          abaixo.
          <a href={WHATSAPP_URL} className="wa-link" target="_blank" rel="noopener noreferrer">
            Ir para o WhatsApp
            <IconArrowRight size={14} />
          </a>
        </div>
      )}

      {status === 'error' && (
        <div className="feedback error" id="errorMsg" role="alert">
          <strong>Não conseguimos registrar sua solicitação agora.</strong>
          Nada grave, é só um soluço técnico. Chama a gente direto pelo WhatsApp
          que resolve em segundos.
          <a href={WHATSAPP_URL} className="wa-link" target="_blank" rel="noopener noreferrer">
            Ir para o WhatsApp
            <IconArrowRight size={14} />
          </a>
        </div>
      )}
    </form>
  );
}

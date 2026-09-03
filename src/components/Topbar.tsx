'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/content';
import { IconArrowRight, IconClose, IconMenu } from './icons';

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Esc fecha o menu — toda camada sobreposta precisa de saída.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className={`topbar${scrolled ? ' scrolled' : ''}`} id="topbar" data-field="dark">
      <div className="wrap topbar-inner">
        {/* width/height reais do arquivo: reservam a caixa antes de a
            imagem chegar, senao a barra pula na primeira pintura. */}
        <a href="#" className="brand" aria-label="Convertido Med, ir para o topo">
          <img
            src="/convertido-med-logo.png"
            alt="Convertido Med"
            className="brand-logo"
            width={735}
            height={80}
          />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato" className="btn btn-primary nav-cta">
              Falar agora
              <span className="btn-arrow">
                <IconArrowRight size={14} />
              </span>
            </a>
          </li>
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="wrap">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Falar agora
              <span className="btn-arrow">
                <IconArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

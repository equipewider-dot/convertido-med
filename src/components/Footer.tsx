import { FOOTER_COLS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="field footer" data-field="dark">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img
              src="/convertido-med-logo.png"
              alt="Convertido Med"
              className="footer-brand-logo"
              width={735}
              height={80}
            />
            <p className="footer-brand-desc">
              A operação da Convertido dedicada exclusivamente a converter
              autoridade médica em agenda particular. Metodologia 4S aplicada ao
              consultório, com CRM integrado ao Convertido Hub.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div>© 2026 Convertido Med · uma operação da Convertido Marketing</div>
          <div>
            <a href="#">Política de Privacidade</a> · <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

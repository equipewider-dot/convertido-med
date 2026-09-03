import Tag from './Tag';
import LeadForm from './LeadForm';

export default function CtaSection() {
  return (
    <section className="field" data-field="dark" id="contato">
      <div className="wrap cta-grid">
        <div className="cta-copy">
          <Tag stain="hematox">Próximo passo</Tag>
          <h2 className="display h2">
            O primeiro passo é uma{' '}
            <span className="cta-highlight">conversa de diagnóstico</span>.
          </h2>
          <p className="lede">
            Se você é médico especialista e quer sair da dependência do
            convênio, a gente marca uma conversa de 30 minutos, sem custo e sem
            compromisso. Nessa conversa, você vai saber se faz sentido a gente
            trabalhar junto, ou não. Se não fizer, a gente te diz na hora.
          </p>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

import { WHATSAPP } from '../data/content';
import Arrow from './Arrow';

export default function BudgetCTA() {
  return (
    <section className="bg" id="orcamento">
      <svg className="air" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true" style={{ opacity: 0.5 }}>
        <path d="M-10 120C150 60 300 200 450 130S700 80 810 130" /><path d="M-10 180C150 120 300 260 450 190S700 140 810 190" /><path d="M-10 240C150 180 300 320 450 250S700 200 810 250" />
      </svg>
      <div className="w rv">
        <h2>Precisa de climatização? Vamos conversar.</h2>
        <p>Conte para a LFM o que você precisa e fale diretamente pelo WhatsApp.</p>
        <a className="btn l" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar orçamento pelo WhatsApp <Arrow /></a>
      </div>
    </section>
  );
}

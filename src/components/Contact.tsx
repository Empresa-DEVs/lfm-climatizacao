import { EMAIL, INSTAGRAM_URL, PHONE, WHATSAPP } from '../data/content';

export default function Contact() {
  return (
    <section id="contato">
      <div className="w ct">
        <div className="rv"><div className="eye">Contato</div><h2>Fale com a LFM</h2></div>
        <div className="rv">
          <dl><dt>WhatsApp</dt><dd>{PHONE}</dd><dt>E-mail</dt><dd>{EMAIL}</dd></dl>
          <div className="cta">
            <a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="btn o" href={`mailto:${EMAIL}`}>E-mail</a>
            {INSTAGRAM_URL && <a className="btn o" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

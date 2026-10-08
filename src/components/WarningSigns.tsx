import { SIGNS, WHATSAPP } from '../data/content';

export default function WarningSigns() {
  return (
    <section className="ws" id="sinais">
      <div className="w">
        <div className="eye rv">Antes de pedir um orçamento</div>
        <h2 className="rv">Seu ar-condicionado está dando sinais?</h2>
        <div className="wl">
          {SIGNS.map((s, i) => <div className="wi" key={s}><b>0{i + 1}</b><span>{s}</span></div>)}
        </div>
        <div className="wc">
          <p>Talvez esteja na hora de olhar para o seu equipamento.</p>
          <a className="btn l" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Falar com a LFM</a>
        </div>
      </div>
    </section>
  );
}

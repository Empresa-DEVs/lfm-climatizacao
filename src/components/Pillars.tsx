import { PILLARS } from '../data/content';

export default function Pillars() {
  return (
    <section id="diferenciais">
      <div className="w">
        <div className="eye rv">Nossos pilares</div>
        <h2 className="rv">Seu conforto, nossa prioridade.</h2>
        <div className="wl pl">
          {PILLARS.map((s, i) => <div className="wi" key={s}><b>0{i + 1}</b><span>{s}</span></div>)}
        </div>
      </div>
    </section>
  );
}

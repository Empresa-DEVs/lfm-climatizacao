import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <section className="sv" id="servicos">
      <div className="w">
        <div className="sh"><div><div className="eye rv">Serviços</div><h2 className="rv">Soluções para o seu ambiente</h2></div></div>
        <div className="sl rv">
          {SERVICES.map(([t, d], i) => (
            <div className="sr" key={t}><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

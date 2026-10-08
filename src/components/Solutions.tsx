import { useState } from 'react';
import { ENV, SYS, WHATSAPP, SysKey } from '../data/content';
import Art from './Art';
import Arrow from './Arrow';

export default function Solutions() {
  const [env, setEnv] = useState('Minha casa');
  const [sys, setSys] = useState<SysKey>('split');
  const d = SYS[sys];
  return (
    <section className="sol" id="solucoes">
      <div className="w">
        <div className="eye rv">Soluções</div>
        <h2 className="rv">Qual solução combina com o seu ambiente?</h2>
        <div className="chips rv" role="group" aria-label="Escolha seu ambiente">
          {Object.keys(ENV).map((k) => (
            <button key={k} className="chip" aria-pressed={k === env} onClick={() => { setEnv(k); setSys(ENV[k][0]); }}>{k}</button>
          ))}
        </div>
        <p className="hint">Escolha o seu ambiente e veja o sistema que costuma se encaixar.</p>
        <div className="tabs" role="tablist">
          {ENV[env].map((k) => (
            <button key={k} className="tab" role="tab" aria-selected={k === sys} onClick={() => setSys(k)}>{SYS[k].n}</button>
          ))}
        </div>
        <div aria-live="polite">
          <div className="pn" key={sys}>
            <div className="pt">
              <div className="big">{d.n}</div>
              <p>{d.t}</p>
              <ul>{d.h.map((x) => <li key={x}>{x}</li>)}</ul>
              {d.s.length > 0 && (<>
                <h3>Sinais de que seu equipamento pode precisar de manutenção:</h3>
                <ul className="sg">{d.s.map((x) => <li key={x}>{x}</li>)}</ul>
              </>)}
              <a className="btn" style={{ marginTop: 20 }} href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar orçamento <Arrow /></a>
            </div>
            <div className="pv"><Art name={sys} className="" label={`Ilustração do sistema ${d.n}`} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

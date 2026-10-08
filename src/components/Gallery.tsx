import { useEffect, useRef, useState } from 'react';
import { GALLERY } from '../data/content';

export default function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const [lb, setLb] = useState<number | null>(null);

  const go = (i: number) => {
    const t = track.current; if (!t) return;
    const n = Math.max(0, Math.min(GALLERY.length - 1, i));
    const el = t.children[n] as HTMLElement;
    t.scrollTo({ left: el.offsetLeft - (t.clientWidth - el.clientWidth) / 2, behavior: 'smooth' });
    setCur(n);
  };
  const onScroll = () => {
    const t = track.current; if (!t) return;
    let best = 0, min = Infinity;
    Array.from(t.children).forEach((c, i) => {
      const e = c as HTMLElement;
      const d = Math.abs(e.offsetLeft + e.clientWidth / 2 - t.scrollLeft - t.clientWidth / 2);
      if (d < min) { min = d; best = i; }
    });
    setCur(best);
  };
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setLb(null);
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);
  const g = lb !== null ? GALLERY[lb] : null;

  return (
    <section className="gl" id="projetos" hidden>
      <div className="w">
        <div className="sh"><div><div className="eye rv">Projetos</div><h2 className="rv">Nosso trabalho na prática</h2></div></div>
        <div className="gal rv">
          <div className="trk" ref={track} onScroll={onScroll} tabIndex={0} aria-label="Galeria de fotos e vídeos"
               onKeyDown={(e) => { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); }}>
            {GALLERY.map((it, i) => it.src ? (
              <button className="sd" key={i} aria-label={`Ampliar ${it.label}`} onClick={() => setLb(i)}>
                {it.type === 'video' ? <video src={it.src} muted playsInline preload="metadata" /> : <img src={it.src} alt={it.alt} loading="lazy" />}
              </button>
            ) : (
              <div className="sd ph" key={i} style={{ cursor: 'default' }}>
                <div><b>{it.label}</b>Espaço reservado para foto ou vídeo real<br />(edite GALLERY em src/data/content.ts)</div>
              </div>
            ))}
          </div>
          <div className="gc">
            <div className="dots" role="group" aria-label="Escolher projeto">{GALLERY.map((item, i) => <button key={i} type="button" className={i === cur ? 'on' : ''} aria-label={`Ir para ${item.label}`} aria-current={i === cur ? 'true' : undefined} onClick={() => go(i)} />)}</div>
            <div className="ar">
              <button aria-label="Anterior" onClick={() => go(cur - 1)}>←</button>
              <button aria-label="Próximo" onClick={() => go(cur + 1)}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div className={'lb' + (g ? ' on' : '')} role="dialog" aria-label="Visualização ampliada" onClick={() => setLb(null)}>
        <button aria-label="Fechar">×</button>
        {g && (g.type === 'video' ? <video src={g.src} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} /> : <img src={g.src} alt={g.alt} onClick={(e) => e.stopPropagation()} />)}
      </div>
    </section>
  );
}

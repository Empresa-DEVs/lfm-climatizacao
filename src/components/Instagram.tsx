import { useEffect, useRef, useState } from 'react';
import { EMBED_INSTAGRAM, IG_POSTS, INSTAGRAM_URL } from '../data/content';

const Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
);

function LazyInstagramEmbed({ href, index }: { href: string; index: number }) {
  const card = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const element = card.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: '320px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="igc" ref={card} role="group" aria-label={`Publicação ${index + 1} de ${IG_POSTS.length}`}>
      {nearViewport ? (
        <iframe src={`${href}embed`} title={`Publicação ${index + 1} da LFM Climatização no Instagram`} loading="lazy" scrolling="no" />
      ) : (
        <div className="ig-placeholder"><Icon /><span>Carregando post...</span></div>
      )}
    </div>
  );
}

export default function Instagram() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const element = track.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    const left = element.scrollLeft + card.getBoundingClientRect().left - element.getBoundingClientRect().left;
    element.scrollTo({ left: left - (element.clientWidth - card.clientWidth) / 2, behavior: 'smooth' });
    setCurrent(index);
  };

  const updateCurrent = () => {
    const element = track.current;
    if (!element) return;
    let nearest = 0;
    let distance = Infinity;
    const trackLeft = element.getBoundingClientRect().left;
    Array.from(element.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const center = card.getBoundingClientRect().left - trackLeft + card.clientWidth / 2;
      const nextDistance = Math.abs(center - element.clientWidth / 2);
      if (nextDistance < distance) {
        distance = nextDistance;
        nearest = index;
      }
    });
    setCurrent(nearest);
  };

  return (
    <section className="ig" id="instagram">
      <div className="w">
        <div className="sh">
          <div><div className="eye rv">Instagram</div><h2 className="rv">Acompanhe a LFM no Instagram</h2></div>
          {INSTAGRAM_URL && <a className="btn o" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Ver Instagram</a>}
        </div>
        <div className="ig-carousel">
          <div className="ig-track" ref={track} tabIndex={0} aria-label="Publicações da LFM no Instagram" onScroll={updateCurrent}
               onKeyDown={(event) => {
                 if (event.key === 'ArrowRight') { event.preventDefault(); goTo(Math.min(current + 1, IG_POSTS.length - 1)); }
                 if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(Math.max(current - 1, 0)); }
               }}>
            {IG_POSTS.map((post, index) => (
              <div className="ig-card" key={post.href}>
                {EMBED_INSTAGRAM ? <LazyInstagramEmbed href={post.href} index={index} /> : (
                  <a className={`igc-fallback${post.img ? ' has-image' : ''}`} href={post.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver publicação ${index + 1} no Instagram`}>
                    {post.img ? <img src={post.img} alt="" loading="lazy" /> : <><Icon /><span>Ver publicação no Instagram</span></>}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="ig-controls">
            <div className="ig-dots" role="group" aria-label="Escolher publicação">
              {IG_POSTS.map((post, index) => (
                <button key={post.href} className={index === current ? 'on' : ''} type="button" aria-label={`Ir para publicação ${index + 1}`} aria-current={index === current ? 'true' : undefined} onClick={() => goTo(index)} />
              ))}
            </div>
            <div className="ar">
              <button type="button" aria-label="Publicação anterior" onClick={() => goTo(Math.max(current - 1, 0))}>←</button>
              <button type="button" aria-label="Próxima publicação" onClick={() => goTo(Math.min(current + 1, IG_POSTS.length - 1))}>→</button>
            </div>
          </div>
          {INSTAGRAM_URL && <a className="ig-profile" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@lfm_climatizacao</a>}
        </div>
      </div>
    </section>
  );
}

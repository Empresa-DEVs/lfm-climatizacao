import { useEffect } from 'react';

/** Revela elementos (.rv/.wi) ao entrar na tela, barra de progresso e parallax sutil do hero. */
export function useScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target as HTMLElement;
      const delay = t.classList.contains('wi') ? Array.prototype.indexOf.call(t.parentNode!.children, t) * 120 : 0;
      setTimeout(() => t.classList.add('on'), delay);
      io.unobserve(t);
    }), { threshold: 0.15 });
    document.querySelectorAll('.rv,.wi').forEach((el) => io.observe(el));

    const bar = document.getElementById('bar');
    const hero = document.getElementById('hi');
    let tick = 0;
    const onScroll = () => {
      if (tick) return;
      tick = requestAnimationFrame(() => {
        tick = 0;
        const y = window.scrollY;
        if (bar) bar.style.width = (y / (document.documentElement.scrollHeight - window.innerHeight)) * 100 + '%';
        if (hero && !reduce && y < 900) hero.style.transform = `translateY(${-y * 0.05}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
}

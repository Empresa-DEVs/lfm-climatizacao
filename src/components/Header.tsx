import { useEffect, useState } from 'react';
import { NAV, WHATSAPP } from '../data/content';
import logo from '../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    const closeOnDesktop = () => { if (window.innerWidth > 900) setOpen(false); };
    document.body.style.overflow = open ? 'hidden' : '';
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);
  return (
    <header id="hd" className={scrolled ? 's' : ''}>
      <div className="w hb">
        <a href="#inicio" aria-label="LFM Climatização, início"><img src={logo} alt="LFM Climatização" /></a>
        <button id="mb" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="nv" onClick={() => setOpen(!open)}><i /><i /><i /></button>
        <nav id="nv" className={open ? 'o' : ''} aria-label="Principal" onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false); }}>
          <ul>
            {NAV.map(([t, href]) => <li key={href}><a href={href}>{t}</a></li>)}
            <li><a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

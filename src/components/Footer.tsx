import { EMAIL, INSTAGRAM_URL, NAV, PHONE, WHATSAPP } from '../data/content';
import logo from '../assets/logo.png';
import Arrow from './Arrow';

export default function Footer() {
  return (
    <footer className="ft">
      <svg className="air" viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-10 90C150 40 300 150 450 90S700 50 810 90" /><path d="M-10 160C150 110 300 220 450 160S700 120 810 160" /><path d="M-10 230C150 180 300 290 450 230S700 190 810 230" />
      </svg>
      <div className="w">
        <div className="ftop">
          <h2>Seu conforto,<br />nossa prioridade.</h2>
          <a className="btn l" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar orçamento <Arrow /></a>
        </div>
        <div className="fg2">
          <div>
            <a className="lg" href="#inicio" aria-label="LFM Climatização, início"><img src={logo} alt="LFM Climatização" /></a>
            <p className="fd">Soluções em instalação, manutenção e limpeza de ar-condicionado para ambientes residenciais e corporativos.</p>
          </div>
          <nav aria-label="Rodapé">
            <h3>Navegação</h3>
            <ul>{NAV.map(([t, href]) => <li key={href}><a href={href}>{t}</a></li>)}</ul>
          </nav>
          <div>
            <h3>Contato</h3>
            <ul>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              {INSTAGRAM_URL && <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@lfm_climatizacao</a></li>}
            </ul>
          </div>
        </div>
        <div className="fbar">
          <p>© {new Date().getFullYear()} LFM Climatização. Todos os direitos reservados.</p>
          <a className="up" href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
      <div className="ghost" aria-hidden="true">LFM</div>
    </footer>
  );
}

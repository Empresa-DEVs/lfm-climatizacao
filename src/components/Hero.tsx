import { WHATSAPP } from '../data/content';
import Art from './Art';
import Arrow from './Arrow';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="w hg">
        <div>
          <div className="eye rv">LFM Climatização</div>
          <h1 className="rv">Conforto começa com uma <em>climatização</em> bem feita.</h1>
          <p className="lead rv">Soluções em climatização para ambientes residenciais e corporativos, com instalação, manutenção e limpeza técnica.</p>
          <div className="cta rv">
            <a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar orçamento <Arrow /></a>
            <a className="btn o" href="#servicos">Conheça nossos serviços</a>
          </div>
        </div>
        <div className="hv rv">
          <Art id="hi" name="hero" label="Ilustração de um ar-condicionado split climatizando uma sala" />
          <div className="tag">Instalação · Manutenção · Limpeza</div>
        </div>
      </div>
    </section>
  );
}

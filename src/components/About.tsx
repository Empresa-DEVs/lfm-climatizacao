import Art from './Art';
import logo from '../assets/logo.png';

export default function About() {
  return (
    <section id="sobre">
      <div className="w ab">
        <div className="abv rv">
          <Art name="about" label="Ilustração da higienização do filtro de um ar-condicionado" />
          <div className="bdg">Residencial<br />e corporativo</div>
        </div>
        <div className="rv">
          <div className="eye">Sobre</div>
          <h2>Prazer, somos a LFM Climatização.</h2>
          <p>Especialistas em soluções completas em climatização, atuamos com excelência em instalação, manutenção e atendimento técnico.</p>
          <p>Nosso compromisso é garantir conforto, eficiência e segurança para o seu ambiente, seja residencial ou corporativo.</p>
          <img className="logo" src={logo} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

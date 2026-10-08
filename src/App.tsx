import { SYMBOLS } from './data/art';
import { useScrollEffects } from './hooks/useScrollEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WarningSigns from './components/WarningSigns';
import Gallery from './components/Gallery';
import Instagram from './components/Instagram';
import Pillars from './components/Pillars';
import BudgetCTA from './components/BudgetCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  useScrollEffects();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: SYMBOLS }} />
      <div id="bar" />
      <Header />
      <main>
        <Hero /><Marquee /><About /><Services /><Solutions /><WarningSigns />
        <Gallery /><Instagram /><Pillars /><BudgetCTA /><Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

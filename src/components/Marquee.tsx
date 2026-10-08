import { MARQUEE } from '../data/content';

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return <div className="mq" aria-hidden="true"><div>{items.map((t, i) => <span key={i}>{t}</span>)}</div></div>;
}

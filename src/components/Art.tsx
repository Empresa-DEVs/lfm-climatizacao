import { ART } from '../data/art';

export default function Art({ name, label, className = 'art', id }: { name: string; label: string; className?: string; id?: string }) {
  return <div id={id} className={className} role="img" aria-label={label} dangerouslySetInnerHTML={{ __html: ART[name] }} />;
}

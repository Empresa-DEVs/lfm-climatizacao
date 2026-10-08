import { WHATSAPP } from '../data/content';

export default function WhatsAppFab() {
  return (
    <a className="wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.2.6.6-2.1-.2-.3A8 8 0 0 1 12 4zm-3 4c-.3 0-.7.2-.9.6-.5.8-.4 1.900.6 3.200 1 1.400 2.400 2.400 3.700 2.800 1 .3 1.700.1 2.100-.5.2-.4.3-.8.1-.9l-1.500-.7c-.2-.1-.4 0-.5.1l-.5.600c-.1.100-.3.100-.4.100-.7-.3-1.700-1.100-2.100-1.900-.1-.2 0-.3.1-.4l.4-.5.1-.4-.7-1.600c-.1-.2-.2-.5-.5-.4z" /></svg>
    </a>
  );
}

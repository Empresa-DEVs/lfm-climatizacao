// ===== CONFIGURAÇÃO — edite aqui =====
export const WHATSAPP = 'https://wa.me/5511987090940?text=' + encodeURIComponent('Olá! Vim pelo site da LFM Climatização e gostaria de solicitar um orçamento.');
export const INSTAGRAM_URL = 'https://www.instagram.com/lfm_climatizacao';
export const EMAIL = 'lfmclimatizacao@gmail.com';
export const PHONE = '(11) 98709-0940';
/** true = mostra os posts reais via embed oficial do Instagram (funciona em localhost e no seu domínio) */
export const EMBED_INSTAGRAM = true;
/** Adicione mais links aqui; use img para a capa quando EMBED_INSTAGRAM = false */
export const IG_POSTS: { href: string; img?: string }[] = [
  { href: 'https://www.instagram.com/p/DYVGJuEvnRH/' },
  { href: 'https://www.instagram.com/p/DYps98jljWY/' },
  { href: 'https://www.instagram.com/p/DYxRp2nFsqw/' },
  { href: 'https://www.instagram.com/reel/Dbd3gCBBU4o/' },
  { href: 'https://www.instagram.com/reel/DblfF0ahUr-/' },
  { href: 'https://www.instagram.com/reel/DcbItbKCGtJ/' },
  { href: 'https://www.instagram.com/reel/Dc_VGNCPiuS/' },
];
/** Galeria: preencha src com fotos/vídeos reais (ex.: import foto1 from '../assets/foto1.jpg') */
export type GalleryItem = { type: 'image' | 'video'; src: string; alt: string; label: string };
export const GALLERY: GalleryItem[] = [
  { type: 'image', src: '', alt: '', label: 'Projeto 1' },
  { type: 'image', src: '', alt: '', label: 'Projeto 2' },
  { type: 'video', src: '', alt: '', label: 'Vídeo 1' },
  { type: 'image', src: '', alt: '', label: 'Projeto 3' },
  { type: 'image', src: '', alt: '', label: 'Projeto 4' },
];
// ===== CONTEÚDO =====
export const NAV: [string, string][] = [['Início','#inicio'],['Sobre','#sobre'],['Serviços','#servicos'],['Soluções','#solucoes'],['Projetos','#projetos'],['Instagram','#instagram'],['Contato','#contato']];
export const MARQUEE = ['Instalação','Manutenção','Lavagem técnica','Atendimento técnico','Residencial','Corporativo'];
export const SERVICES: [string, string][] = [
  ['Instalação','Instalação de sistemas de climatização buscando proporcionar conforto, eficiência e bom funcionamento do equipamento.'],
  ['Manutenção','Manutenção para preservar o desempenho do equipamento e identificar sinais de que o sistema precisa de atenção.'],
  ['Lavagem Técnica','Higienização completa do equipamento para melhorar a qualidade do ar, o desempenho e a eficiência.'],
  ['Atendimento técnico','Atendimento especializado para necessidades relacionadas à climatização.'],
];
export const SIGNS = ['Não está gelando como antes?','Está com mau cheiro?','Está vazando água?','O consumo aumentou?','Faz tempo que não recebe uma limpeza?'];
export const PILLARS = ['Compromisso com qualidade','Atendimento transparente','Soluções que geram conforto'];
export type SysKey = 'split' | 'multi' | 'vrf';
const SIGNS3 = ['Não gela como antes','Mau cheiro','Vazamento de água'];
export const SYS: Record<SysKey, { n: string; t: string; h: string[]; s: string[] }> = {
  split: { n: 'Split', t: 'Um dos modelos mais comuns em casas e apartamentos, o Split proporciona conforto térmico no dia a dia, eficiência e praticidade.', h: ['Mais eficiência e economia','Ar mais limpo e saudável','Evita problemas e aumenta a vida útil','Atendimento rápido e profissional'], s: SIGNS3 },
  multi: { n: 'Multi Split', t: 'Uma solução para climatizar vários ambientes utilizando um único sistema, proporcionando praticidade e conforto personalizado.', h: ['Mais conforto para diferentes ambientes','Climatização personalizada','Praticidade no dia a dia','Eficiência e economia'], s: SIGNS3 },
  vrf: { n: 'VRF / VRV', t: 'Tecnologia voltada para grandes ambientes e projetos que precisam de maior controle de temperatura, conforto e eficiência.', h: ['Controle de temperatura','Tecnologia','Eficiência','Aplicação em grandes projetos'], s: [] },
};
export const ENV: Record<string, SysKey[]> = { 'Minha casa': ['split'], 'Meu escritório': ['split','multi'], 'Vários ambientes': ['multi'], 'Grande projeto': ['vrf'] };

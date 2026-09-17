export interface PageItem {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface WorkProject {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  tags: string[];
  url: string | null;
  role: string;
  problem?: string;
  problemImage?: string;
  approach: string[];
  afterApproachImage?: string;
  brandTiles?: string[];
  appHero?: string;
  video?: string;
  videoBottom?: string;
  gallery: string[];
  x: number;
  y: number;
}

export interface BuildProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  x: number;
  y: number;
}

export interface CollageItem {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
  zIndex: number;
  sticker?: boolean;
}

export interface SocialLink {
  label: string;
  url?: string;
  email?: string;
}

export const PAGES: PageItem[] = [
  { id: 'about', label: 'About', x: 620, y: 300 },
  { id: 'work', label: 'Work', x: 2860, y: 500 },
  { id: 'playground', label: 'Playground', x: 1120, y: 3700 },
  { id: 'builds', label: 'Builds', x: 3870, y: 2150 },
];

export const TOOLS: string[] = [
  'Figma',
  'Framer',
  'Antigravity',
  'ReactJS',
  'Vite',
  'Claude AI',
  'Chat GPT',
  'Gemini',
  'Adobe Suite',
  'Canva',
  'Miro',
  'Procreate',
];

export const TAG_STYLES: Record<string, { color: string; bg: string }> = {
  'Branding': { color: '#009EFF', bg: 'rgba(0, 158, 255, 0.10)' },
  'Brand Design': { color: '#009EFF', bg: 'rgba(0, 158, 255, 0.10)' },
  'Visual Design': { color: '#FF5100', bg: 'rgba(255, 81, 0, 0.10)' },
  'Product Design': { color: '#00B25D', bg: 'rgba(0, 178, 93, 0.10)' },
  'Website Design': { color: '#8253FF', bg: 'rgba(130, 83, 255, 0.10)' },
  'Mini App Design': { color: '#FF2ADF', bg: 'rgba(255, 42, 223, 0.10)' },
  'Rebrand': { color: '#009EFF', bg: 'rgba(0, 158, 255, 0.10)' },
};

export const ABOUT_COLLAGE: CollageItem[] = [
  { id: 'gilmore', src: '/about/sticker-gilmore.webp', x: 70, y: 130, width: 230, rotate: -4, zIndex: 2 },
  { id: 'dog', src: '/about/sticker-dog.webp', x: 220, y: -20, width: 170, rotate: -5, zIndex: 3 },
  { id: 'polaroid-me', src: '/about/polaroid-me.webp', x: 320, y: 60, width: 300, rotate: -6, zIndex: 2 },
  { id: 'polaroid-mountain', src: '/about/polaroid-mountain.webp', x: 560, y: 40, width: 300, rotate: 4, zIndex: 1 },
  { id: 'pochacco', src: '/about/sticker-pochacco.webp', x: 700, y: -20, width: 155, rotate: 4, zIndex: 4 },
  { id: 'postcard', src: '/about/sticker-postcard.webp', x: 800, y: 190, width: 210, rotate: -3, zIndex: 2 },
  { id: 'vienna-player', src: '/assets/vienna-cover.webp', x: 75, y: 390, width: 240, rotate: -4, zIndex: 3 },
  { id: 'star-1', src: '/about/sticker-star-1.webp', x: 520, y: 15, width: 76, rotate: -8, zIndex: 4 },
  { id: 'star-2', src: '/about/sticker-star-2.webp', x: 285, y: 18, width: 55, rotate: 14, zIndex: 4 },
  { id: 'star-3', src: '/about/sticker-star-3.webp', x: 860, y: 50, width: 90, rotate: 12, zIndex: 3 },
  { id: 'star-4', src: '/about/sticker-star-4.webp', x: 290, y: 350, width: 68, rotate: -15, zIndex: 4 },
  { id: 'star-5', src: '/about/sticker-star-5.webp', x: 935, y: 280, width: 84, rotate: 8, zIndex: 3 },
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'bento',
    title: 'Bento.fun',
    description: 'Bento.fun is a social prediction market platform built to turn predictions into playable, repeatable community experiences',
    image: '/work/bento/card.webp',
    logo: '/work/bento/logo.webp',
    tags: ['Rebrand', 'Visual Design', 'Product Design'],
    url: 'https://bento.fun',
    role: 'Brand Designer · Product Designer',
    problem: 'Prediction markets focus on bets, not behaviour. They lack social features and shared memory, making them overwhelming and exclusive. Bento aims to be the opposite.',
    brandTiles: ['/work/bento/tile-orange.webp', '/work/bento/tile-black.webp', '/work/bento/tile-green.webp', '/work/bento/tile-blue.webp'],
    approach: [
      'Built visual identity to make predictions fun, social, and accessible to all.',
      'Designed website to be inviting and clear, matching product personality.',
      'Led product design for alpha MVP, including user-generated markets and contests.',
      'Focused on community-driven flexible gameplay.',
      'Created launch videos and social creatives to extend brand energy.'
    ],
    gallery: ['/work/bento/all-tournaments.webp', '/work/bento/tournament.webp', '/work/bento/create-details.webp'],
    x: 2200,
    y: 80,
  },
  {
    id: 'inner-circle',
    title: 'Inner Circle',
    description: 'Inner Circle is a community of 10,000+ founders, creators, developers, designers on Base',
    image: '/work/inner-circle/card.webp',
    logo: '/work/inner-circle/logo.webp',
    tags: ['Website Design', 'Visual Design'],
    url: 'https://innercircle.so',
    role: 'Visual Designer · Website Designer',
    approach: [
      'Rebuilt the visual identity to match the pivot from Web3 to AI — same energy, new direction.',
      'Designed the full website from scratch and developed it using Claude.'
    ],
    gallery: ['/work/inner-circle/cards.webp', '/work/inner-circle/footer.webp'],
    x: 2660,
    y: 80,
  },
  {
    id: 'velar',
    title: 'Velar',
    description: 'Velar is a DeFi liquidity protocol built on Bitcoin. Trade, provide liquidity, and earn rewards',
    image: '/work/velar/card.webp',
    logo: '/work/velar/logo.webp',
    tags: ['Website Design', 'Product Design'],
    url: 'https://velar.co',
    role: 'Product Designer · Website Designer',
    problem: 'Bitcoin has the most secure and trusted network in the world but almost no usable DeFi interface. Users had the asset, but nowhere to actually put it to work. Velar needed a product experience that made Bitcoin DeFi feel as accessible as any modern DeFi platform.',
    problemImage: '/work/velar/v3.webp',
    approach: [
      "Designed the product interface across Velar's core suite — DEX, Perpetual DEX, and Launchpad.",
      'Built the marketing website to communicate a complex multi-product protocol clearly and confidently.',
      'Kept the visual language premium and technical — matching the weight of building on Bitcoin.'
    ],
    gallery: ['/work/velar/hero.webp', '/work/velar/portfolio.webp', '/work/velar/design-01.webp', '/work/velar/design-03.webp', '/work/velar/design-04.webp', '/work/velar/footer.webp'],
    x: 3120,
    y: 80,
  },
  {
    id: 'emerge',
    title: 'First Dollar',
    description: 'A curated talent network of 200k+ creators, designers, developers, testers, marketers, and community builders.',
    image: '/work/emerge/card.webp',
    logo: '/work/emerge/logo.webp',
    tags: ['Visual Design', 'Product Design'],
    url: 'https://firstdollar.money/',
    role: 'Product Designer',
    problem: 'First Dollar was built for Web3 builders but the vision was bigger than that. We wanted anyone on the internet to be able to join, find work, and earn. The existing product felt too niche, too crypto-native to make that leap.',
    problemImage: '/work/emerge/sidebar.webp',
    approach: [
      'Redesigned the full product with a new visual theme — minimal, clean, and accessible without losing the existing brand identity.',
      'Designed the Verified Talent feature giving skilled builders and creators a way to stand out and get matched with the right opportunities.',
      'Built out the profile and showcase feature so every builder has a page that tells their story, proves their work, and can be shared anywhere on the internet.'
    ],
    gallery: ['/work/emerge/showcase.webp', '/work/emerge/feed.webp', '/work/emerge/contest.webp', '/work/emerge/hero.webp'],
    x: 2430,
    y: 600,
  },
  {
    id: 'crowwd',
    title: 'Crowwd',
    description: 'Crowwd is a platform for crowdfunding and community-driven project building',
    image: '/work/crowwd/card.webp',
    logo: '/work/crowwd/logo.webp',
    tags: ['Product Design', 'Visual Design'],
    url: null,
    role: 'Product Designer',
    problem: 'Most crowdfunding platforms are cluttered and complex. Add crypto and onchain payments to that and most people just drop off. Crowwwd needed to feel nothing like that.',
    problemImage: '/work/crowwd/bento.webp',
    approach: [
      "Designed a layout that's clean and easy to scan, no overwhelming UI, no unnecessary steps.",
      'Cut out crypto jargon so anyone could understand what they are doing and why.',
      'Made onchain payments feel as simple as any regular transaction.',
      'Clear, intentional screens that guide users without friction.'
    ],
    afterApproachImage: '/work/crowwd/after-approach.webp',
    gallery: ['/work/crowwd/cover.webp', '/work/crowwd/profile.webp', '/work/crowwd/project-creation.webp', '/work/crowwd/project-info.webp'],
    x: 2890,
    y: 600,
  },
];

export const BUILDS_PROJECTS: BuildProject[] = [
  {
    id: 'farfield',
    title: 'Farfield',
    description: 'Social store for creatives to sell their assets onchain and earn in crypto. Onchain Summer Awards Winner.',
    image: '/builds/Farfield.webp',
    tags: ['Branding', 'Visual Design', 'Mini App Design'],
    url: 'https://farcaster.xyz/miniapps/9OlQm7ZO9S_M/farfield',
    x: 3600,
    y: 2050,
  },
  {
    id: 'dither-matrix',
    title: 'Dither Matrix',
    description: 'Dither tool made for designers with various effects to be used while adding custom colors.',
    image: '/builds/Dither%20Matrix.webp',
    tags: ['Visual Design', 'Product Design'],
    url: 'https://dithermatrix.jenni.design',
    x: 4060,
    y: 2050,
  },
  {
    id: 'pixel-pop',
    title: 'Pixel Pop Tool',
    description: 'Convert any image into pixel art with this tool. Customize the pixel size and color palette.',
    image: '/builds/Pixel%20Pop.webp',
    tags: ['Visual Design', 'Product Design'],
    url: 'https://pixelart.jenni.design',
    x: 3600,
    y: 2550,
  },
  {
    id: 'freetype-writer',
    title: 'Freetype Writer',
    description: 'A small space to write like a typewriter and export it as txt or a shareable envelope style PNG.',
    image: '/builds/typewriter.webp',
    tags: ['Visual Design', 'Product Design'],
    url: 'https://freetypewriter.jenni.design',
    x: 4060,
    y: 2550,
  },
  {
    id: 'myob',
    title: 'MYOB',
    description: 'Community back recipes. You tell it what you have, and it tells you what you can make.',
    image: '/builds/myob.png',
    tags: ['Product Design', 'Brand Design'],
    url: 'https://makeyourownbreakfast.in',
    x: 3830,
    y: 3050,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Behance', url: 'https://www.behance.net/jennimankar' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jennifer-mankar-733658363/' },
  { label: 'Instagram', url: 'https://www.instagram.com/jennifermankar/' },
  { label: 'Email', email: 'jennifermankar000@gmail.com' },
];

export const BIO_SHORT = "It's Jenni! A design student majored in Communication Design based in Mumbai. I'm interested in challenging myself to gain new knowledges and developing my creativity in fun and creative designs. I consider myself as hard-working and easy to adapt.";
export const BIO_LONG = "It's Jenni! A design student majored in Communication Design based in Mumbai. I'm interested in challenging myself to gain new knowledges and developing my creativity in fun and creative designs. I consider myself as hard-working and easy to adapt. Outside work: travel when I can, lots of movies, good music on most of the day, and passionate about crafting delightful, expressive visual experiences.";

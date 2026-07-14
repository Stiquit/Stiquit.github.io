// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update copy, projects,
// links, or the timeline without touching any component code.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Miguel Montoya',
  role: 'Full-Stack Software Engineer',
  location: 'Bogotá, Colombia · Remote (US & AU experience)',
  email: 'miguelmontoyaviviescas@gmail.com',
  github: 'https://github.com/MiguelWebThreeConsulting',
  linkedin: 'https://www.linkedin.com/in/miguelamontoyav',
  headline: 'Whatever the stack, it ships.',
  subheadline:
    'Seven years of production experience across fintech, commerce, gaming and distributed systems. 40+ platforms delivered end to end — most of them in technologies I learned on the job.',
  stats: [
    { value: '503+', label: 'merged pull requests' },
    { value: '46', label: 'production repositories' },
    { value: '40+', label: 'platforms shipped' },
    { value: '7+', label: 'years of experience' },
  ],
};

export type CaseStudy = {
  name: string;
  tagline: string;
  meta: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    name: 'Fractal Art Launchpad',
    tagline: 'Creator launch platform & marketplace',
    meta: '87 PRs · Jul – Dec 2025 · Lead full-stack',
    description:
      'A high-traffic platform where creators configure, launch and sell digital collections — with presales, timed auctions, raffles and loot-box reveal mechanics. I owned the platform end to end: payment and distribution contracts, verifiable randomness for fair draws, the marketplace, and the admin dashboard.',
    highlights: [
      'Designed the payment, revenue-split and staged-presale contract system powering every launch',
      'Built fair-draw raffle and reveal mechanics on top of a verifiable randomness service (Chainlink VRF)',
      'Shipped the marketplace (search, trending, analytics) and an admin console for deployment and asset validation',
      'Integrated gasless smart-wallet onboarding and Discord-gated presale access',
    ],
    tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Solidity', 'Chainlink VRF'],
  },
  {
    name: 'ORBT',
    tagline: 'Cross-network reputation scoring engine',
    meta: '15 PRs · Nov 2025 – Feb 2026 · Data & full-stack',
    description:
      'A scoring platform that scans a user\u2019s activity across multiple networks and turns raw transaction history into a weighted reputation score, rendered as a shareable scorecard. Heavy on data engineering: batch API pipelines, score calculation, and sub-second dashboard delivery.',
    highlights: [
      'Built batched data pipelines over the BitQuery API to scan wallet activity across ecosystems',
      'Designed the weighted scoring engine and an interactive score calculator',
      'Added a second, independently-indexed network (Solana) to the scanning pipeline without disrupting the first',
      'Shipped points, referrals and social-share scorecards to drive growth loops',
    ],
    tech: ['TypeScript', 'Node.js', 'BitQuery API', 'React', 'Data pipelines'],
  },
  {
    name: 'Bloom',
    tagline: 'Portfolio analytics dashboard — built in 3 weeks',
    meta: '16 PRs · Jun 2025 · Solo build, design to deploy',
    description:
      'A performance-tracking dashboard with monthly, cumulative and overview views, delivered from first commit to production in three weeks. A useful proof point for how quickly I can take an unfamiliar product domain from design handoff to a working, shareable product.',
    highlights: [
      'Implemented the full dashboard UI: metric cards, charts, and monthly/cumulative/overview pages',
      'Built the performance-tracking APIs behind each view',
      'Wrote a server-side image export service so users can share charts as rendered images',
      'Integrated Twitter and Telegram authentication via Privy',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Privy', 'Chart rendering'],
  },
  {
    name: 'Azuki CoMuseum',
    tagline: 'Physical–digital commerce integration',
    meta: '42 PRs · Jun 2024 – Feb 2026 · Integrations lead',
    description:
      'A collectibles experience that binds physical items to digital ownership through NFC chips, with a Shopify storefront for merch redemption. The interesting problems were all at the seams: webhook security, order lifecycle edge cases, and keeping hardware, storefront and on-chain records consistent.',
    highlights: [
      'Integrated NFC chip technology (IYK) to pair physical items with their digital counterparts',
      'Built the Shopify webhook pipeline with HMAC validation for secure merch claims',
      'Handled the messy real world: abandoned orders, double-tap verification, manual record repair tooling',
      'Shipped the admin panel, leaderboard, and CSV bulk tooling for metadata management',
    ],
    tech: ['TypeScript', 'NestJS', 'Shopify API', 'NFC / IYK', 'PostgreSQL'],
  },
  {
    name: 'Dash Lanes',
    tagline: 'Multi-network payments vault for a gaming platform',
    meta: '15 PRs · Dec 2025 – Feb 2026 · Contracts & backend',
    description:
      'Deposit and withdrawal infrastructure for a gaming platform operating across two very different ecosystems. I learned Rust for this project and took a vault program from zero to mainnet, handling real user funds — alongside an equivalent vault on the EVM side and a shared credits ledger.',
    highlights: [
      'Wrote the Solana vault program in Rust (Anchor) and deployed it to mainnet',
      'Built matching EVM vault contracts so deposits behave identically on both ecosystems',
      'Designed the platform credits ledger with issuance validation across networks',
      'Owned the full deposit/withdrawal UX, including wallet modal flows',
    ],
    tech: ['Rust', 'Anchor', 'Solidity', 'TypeScript', 'Solana', 'EVM'],
  },
  {
    name: 'Legendary League',
    tagline: 'Gamified engagement platform',
    meta: '43 PRs · Jul – Nov 2024 · Full-stack',
    description:
      'A consumer platform with casino-style games, daily spins, tasks, referrals and leaderboards. I built the account system from scratch — email, Google, Twitter and Discord sign-in, plus wallet connections across three networks — and most of the gamification engine on top of it.',
    highlights: [
      'Built the complete authentication stack: email + OAuth (Google, Twitter, Discord) with session management',
      'Implemented multi-network wallet connection (Ethereum, Solana, Bitcoin) behind one connector modal',
      'Created the gamification engine: daily spins, task completion, referral tracking, multiplier-based leaderboard',
      'Integrated real-time Discord chat and the games/casino API layer',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'OAuth', 'PostgreSQL'],
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  detail: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: '2018',
    title: 'Angular · .NET Core · SQL',
    detail: 'Enterprise fintech dashboards for Australian clients. Cut query response times 40% by refactoring microservices and schemas.',
  },
  {
    period: '2024',
    title: 'Solidity · smart contracts · indexers',
    detail: 'Moved into contract development and on-chain data indexing — ERC-20/721 indexers, staged mints, payment splitters.',
  },
  {
    period: '2024',
    title: 'Web Audio API · hardware NFC · Shopify',
    detail: 'Ported a vanilla-JS synthesizer into React, and wired NFC chips to a Shopify storefront. Very different problems, same year.',
  },
  {
    period: '2025',
    title: 'Rust · Anchor · Hedera · Cosmos',
    detail: 'Learned Rust and shipped a mainnet vault program handling real funds. Added Hedera (HTS, ED25519 auth) and Cosmos wallet ecosystems.',
  },
  {
    period: '2026',
    title: 'Data pipelines · scoring engines · audits',
    detail: 'Batch API pipelines, weighted reputation scoring, and smart-contract security auditing for a DeFi vault protocol.',
  },
  {
    period: 'Next',
    title: 'Your stack',
    detail: 'The pattern holds: give me an unfamiliar technology and a deadline, and I\u2019ll give you production.',
  },
];

export const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Web Three Consulting & Auditing',
    where: 'USA · Remote',
    period: 'Jan 2024 – Apr 2026',
    summary:
      'Owned delivery of 40+ production platforms end to end — contract design, full-stack development, and cloud deployment — often running multiple projects per week. 503+ merged PRs across 46 repositories.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Invorious Software',
    where: 'Australia · Remote',
    period: 'May 2018 – Dec 2023',
    summary:
      'Built enterprise web applications for fintech and data-analytics clients. Refactored microservices and SQL schemas for a 40% query-speed improvement on high-load financial dashboards; completed a Mechatronics Engineering degree while working full-time.',
  },
];

export type SideProject = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export const sideProjects: SideProject[] = [
  {
    name: 'Baby Bera Synth',
    tagline: 'A playable synthesizer in the browser',
    description:
      'A client prototype I genuinely loved building: porting a vanilla-JavaScript synthesizer into a React application. The hard part was taming the Web Audio API inside React\u2019s lifecycle — moving transport state management out of components so playback stayed sample-accurate across re-renders. It never reached production, and I\u2019d still call it one of my favorite builds.',
    tech: ['React', 'Web Audio API', 'TypeScript', 'State management'],
    links: [],
  },
  {
    name: 'EigenWorlds',
    tagline: 'Personal project — restaking mint page',
    description:
      'A personal end-to-end build: an NX monorepo with a React frontend and NestJS backend for a generative collection mint page, deployed and live. Built solo to explore restaking mechanics and keep my architecture habits sharp outside client work.',
    tech: ['NX Monorepo', 'React', 'NestJS', 'TypeScript'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/MiguelWebThreeConsulting/Personal-EigenLayer' },
      { label: 'Collection on OpenSea', href: 'https://opensea.io/collection/eigenworlds-4' },
    ],
  },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Angular', 'Responsive / mobile-first', 'NX monorepos'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Python', '.NET Core', 'REST & GraphQL'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'TypeORM', 'Event indexing', 'Query optimization', 'Batch pipelines'] },
  { group: 'Distributed systems', items: ['Solidity', 'Rust (Anchor)', 'EVM · Solana · Hedera · Cosmos', 'Security auditing', 'Wallet integrations'] },
  { group: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Heroku · Netlify', 'CI/CD', 'Automated testing'] },
];

import type { Metadata } from 'next';
import { withBasePath } from '@/lib/asset-path';
import './globals.css';

export const metadata: Metadata = {
  title: 'Miguel Montoya — Full-Stack Software Engineer',
  description:
    'Full-stack engineer with 8 years of production experience. 40+ platforms shipped end to end across fintech, commerce, gaming and distributed systems.',
  icons: {
    icon: withBasePath('/favicon.svg'),
  },
};

// Runs before first paint so there is no theme flash.
// Dark is the default; a saved preference wins.
const themeInit = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

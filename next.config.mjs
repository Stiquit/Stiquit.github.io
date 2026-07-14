/** @type {import('next').NextConfig} */

// For GitHub Pages:
// - If the repo is named `<username>.github.io`, leave NEXT_PUBLIC_BASE_PATH unset.
// - If the repo has any other name (e.g. `portfolio`), the site is served from
//   https://<username>.github.io/portfolio, so set NEXT_PUBLIC_BASE_PATH=/portfolio.
// The included GitHub Actions workflow sets this automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

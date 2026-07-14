# miguelmontoya.dev — Portfolio

Personal portfolio of **Miguel Montoya**, full-stack software engineer. Built with Next.js (App Router, static export), plain CSS with a themeable design-token system, and zero runtime dependencies beyond React.

**Features**

- Dark theme by default with a light/dark toggle (persisted in `localStorage`, no flash on load)
- Fully static export — deployable to GitHub Pages, Vercel, Netlify, or any static host
- All copy and project data centralized in [`data/content.ts`](data/content.ts) — edit content without touching components
- Responsive down to mobile, keyboard-focus styles, `prefers-reduced-motion` respected

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
```

## Deploying to GitHub Pages

1. Create a repository and push this project to the `main` branch.
   - Name it `<username>.github.io` to serve the site at the root of your GitHub Pages domain, **or**
   - use any other name (e.g. `portfolio`) to serve it at `https://<username>.github.io/portfolio`. The included workflow detects this automatically — no config changes needed.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static export and deploys it. The first run takes a couple of minutes; after that every push redeploys.

### Custom domain (optional)

Add your domain under **Settings → Pages → Custom domain**, create the DNS records GitHub shows you, and add a `CNAME` file containing the domain to the `public/` folder so it survives redeploys.

## Editing content

Everything a recruiter reads lives in `data/content.ts`:

| Export | Controls |
|---|---|
| `profile` | Name, headline, stats, contact links |
| `caseStudies` | The six "Selected work" entries |
| `timeline` | The "Learned in production" trace |
| `experience` | Work history |
| `sideProjects` | Off-the-clock section |
| `skills` | Toolbox groups |

Colors and typography are defined as CSS variables at the top of [`app/globals.css`](app/globals.css) — one block per theme.

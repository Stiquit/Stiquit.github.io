import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import { withBasePath } from '@/lib/asset-path';
import {
  profile,
  caseStudies,
  timeline,
  experience,
  sideProjects,
  skills,
} from '@/data/content';

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="wordmark">
            <svg
              className="wordmark-mark"
              viewBox="0 0 100 72"
              width="34"
              height="24.5"
              aria-hidden="true"
            >
              <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 58 V14 L30 46 L50 14 V58" />
                <path d="M50 14 L70 46 L90 14 V58" />
              </g>
              <g fill="var(--accent)">
                <rect x="5.5" y="53.5" width="9" height="9" transform="rotate(45 10 58)" />
                <rect x="45.5" y="53.5" width="9" height="9" transform="rotate(45 50 58)" />
                <rect x="85.5" y="53.5" width="9" height="9" transform="rotate(45 90 58)" />
              </g>
              <g fill="var(--bg)">
                <circle cx="30" cy="46" r="1.8" />
                <circle cx="70" cy="46" r="1.8" />
              </g>
            </svg>
            MM<span className="wordmark-dot">.</span>
          </a>
          <nav className="site-nav" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#range">Range</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        {/* ---------------------------------------------------------- hero */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                {profile.name} · {profile.role}
              </p>
              <h1 className="hero-headline">{profile.headline}</h1>
              <p className="hero-sub">{profile.subheadline}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">
                  See the work
                </a>
                <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                  Get in touch
                </a>
              </div>
              <dl className="stat-strip" aria-label="Career statistics">
                {profile.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="stat-label">{s.label}</dt>
                    <dd className="stat-value">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero-portrait">
              <Image
                src={withBasePath('/PFP.jpeg')}
                alt={profile.name}
                width={320}
                height={320}
                priority
                className="hero-portrait-img"
              />
            </div>
          </div>
          <div className="hero-trace" aria-hidden="true" />
        </section>

        {/* -------------------------------------------------- case studies */}
        <section id="work" className="section">
          <div className="container">
            <h2 className="section-title">Selected work</h2>
            <p className="section-intro">
              Client work is in private repositories, so these are case studies
              rather than source links — each one a platform I carried from
              design to production.
            </p>
            <div className="case-list">
              {caseStudies.map((cs) => (
                <article className="case" key={cs.name}>
                  <div className="case-head">
                    <h3 className="case-name">{cs.name}</h3>
                    <p className="case-meta">{cs.meta}</p>
                  </div>
                  <p className="case-tagline">{cs.tagline}</p>
                  <p className="case-desc">{cs.description}</p>
                  <ul className="case-highlights">
                    {cs.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="tag-row" aria-label="Technologies">
                    {cs.tech.map((t) => (
                      <li className="tag" key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- range / timeline */}
        <section id="range" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Learned in production</h2>
            <p className="section-intro">
              Every stack below was picked up on the job, under a delivery
              deadline, and shipped. That&rsquo;s the skill I&rsquo;m actually
              selling.
            </p>
            <ol className="trace-timeline">
              {timeline.map((t, i) => (
                <li className="trace-item" key={`${t.period}-${i}`}>
                  <span className="trace-node" aria-hidden="true" />
                  <p className="trace-period">{t.period}</p>
                  <h3 className="trace-title">{t.title}</h3>
                  <p className="trace-detail">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* --------------------------------------------------------- skills */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Toolbox</h2>
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="skill-group" key={s.group}>
                  <h3 className="skill-group-name">{s.group}</h3>
                  <ul className="skill-items">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- experience */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="xp-list">
              {experience.map((xp) => (
                <article className="xp" key={xp.company}>
                  <div className="xp-head">
                    <h3 className="xp-role">{xp.role}</h3>
                    <p className="xp-period">{xp.period}</p>
                  </div>
                  <p className="xp-company">
                    {xp.company} — {xp.where}
                  </p>
                  <p className="xp-summary">{xp.summary}</p>
                </article>
              ))}
            </div>
            <p className="xp-education">
              B.Eng. Mechatronics, Universidad Militar Nueva Granada —
              completed while working full-time as a senior developer. C2
              English (EF SET).
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- side projects */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Off the clock</h2>
            <div className="side-grid">
              {sideProjects.map((p) => (
                <article className="side-card" key={p.name}>
                  <h3 className="side-name">{p.name}</h3>
                  <p className="side-tagline">{p.tagline}</p>
                  <p className="side-desc">{p.description}</p>
                  <ul className="tag-row" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li className="tag" key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {p.links.length > 0 && (
                    <p className="side-links">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                          {l.label} ↗
                        </a>
                      ))}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- contact */}
        <section id="contact" className="section section-contact">
          <div className="container">
            <h2 className="contact-headline">
              Have an unfamiliar stack and a deadline?
            </h2>
            <p className="contact-sub">
              I&rsquo;m open to full-time remote roles and contract work.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <p className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="footer-note">Next.js · deployed on GitHub Pages</p>
        </div>
      </footer>
    </>
  );
}

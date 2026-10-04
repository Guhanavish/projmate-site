function BrandSvg({ size = 17, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const InstagramIcon = ({ size }) => (
  <BrandSvg size={size}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </BrandSvg>
);

const LinkedinIcon = ({ size }) => (
  <BrandSvg size={size}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </BrandSvg>
);

const GithubIcon = ({ size }) => (
  <BrandSvg size={size}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </BrandSvg>
);

const SOCIALS = [
  { href: 'https://www.instagram.com/guha._.1416/?__pwa=1', label: 'Guhanavish on Instagram', Icon: InstagramIcon },
  { href: 'https://www.linkedin.com/in/guhanavish-ss-12a328256', label: 'Guhanavish on LinkedIn', Icon: LinkedinIcon },
  { href: 'https://github.com/Guhanavish', label: 'Guhanavish on GitHub', Icon: GithubIcon },
];

const COLS = [
  {
    title: 'Product',
    links: [
      { href: '#features', label: 'Features' },
      { href: '#tour', label: 'Product tour' },
      { href: '#how-it-works', label: 'How it works' },
      { href: '#download', label: 'Download' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: 'https://github.com/Guhanavish/projmate-site', label: 'GitHub repository' },
      { href: 'https://github.com/Guhanavish/projmate-site/releases', label: 'Releases' },
      { href: 'https://github.com/Guhanavish/projmate-site/issues', label: 'Report an issue' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]">
              <svg width="18" height="18" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path
                  d="M20 25a4 4 0 0 1 4-4h8l4 6h8a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-ink-900">ProjMate</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
            A free, offline-first project manager for Windows. Your work stays on your machine.
          </p>
          <p className="mt-5 text-[13px] font-bold text-ink-900">Built by Guhanavish</p>
          <div className="mt-2.5 flex items-center gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-100 bg-white text-ink-600 transition-all hover:-translate-y-px hover:border-slate-300 hover:text-ink-900 hover:shadow-card"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        {COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink-500">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-ink-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-[13px] text-ink-500 sm:flex-row sm:px-6">
          <p>© 2026 ProjMate. All rights reserved.</p>
          <p>Free forever · No account · Works offline</p>
        </div>
      </div>
    </footer>
  );
}

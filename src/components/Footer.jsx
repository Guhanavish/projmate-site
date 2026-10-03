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

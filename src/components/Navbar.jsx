import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#tour', label: 'Tour' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-shadow ${
        scrolled ? 'border-ink-100 shadow-card' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ProjMate home">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] shadow-card">
            <svg width="18" height="18" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path
                d="M20 25a4 4 0 0 1 4-4h8l4 6h8a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4Z"
                fill="#fff"
              />
            </svg>
          </span>
          <span className="text-[17px] font-extrabold tracking-tight text-ink-900">ProjMate</span>
        </a>

        <ul className="ml-6 hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-slate-100 hover:text-ink-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#download"
            className="hidden items-center gap-2 rounded-[10px] bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-px hover:bg-brand-700 hover:shadow-lift sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Download for Windows
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 hover:bg-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-100 bg-white px-4 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-ink-900 hover:bg-slate-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <Download size={16} aria-hidden="true" />
            Download for Windows
          </a>
        </div>
      )}
    </header>
  );
}

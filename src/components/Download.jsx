import { BadgeCheck, Download, FileDown } from 'lucide-react';
import Reveal from './Reveal';

const RELEASE_URL = 'https://github.com/Guhanavish/projmate-site/releases/latest';

const REQS = ['Windows 10 or 11, 64-bit', 'Free download, no license key', 'Installs in seconds, runs offline'];

export default function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-title" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_280px_at_20%_0%,rgba(129,140,248,0.22),transparent_70%)]"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-300">Download</p>
              <h2 id="download-title" className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get ProjMate for Windows
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-slate-300">
                Version 1.0.0. One installer, zero setup — your projects stay on your machine from
                the first launch.
              </p>
              <ul className="mt-6 space-y-2.5">
                {REQS.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-[15px] text-slate-200">
                    <BadgeCheck size={17} className="shrink-0 text-emerald-400" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-stretch gap-3 lg:items-end">
              <a
                href={RELEASE_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-ink-900 shadow-lift transition-all hover:-translate-y-px hover:bg-indigo-50 sm:w-auto sm:min-w-[280px]"
              >
                <Download size={19} aria-hidden="true" />
                Download for Windows
              </a>
              <a
                href={RELEASE_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto sm:min-w-[280px]"
              >
                <FileDown size={18} aria-hidden="true" />
                View all releases
              </a>
              <p className="text-[13px] text-slate-400">Free forever · v1.0.0 · 64-bit installer</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

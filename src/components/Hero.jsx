import { ArrowRight, Download, HardDrive, MonitorDown, UserX } from 'lucide-react';
import AppMock from './AppMock';
import Reveal from './Reveal';

const STATS = [
  { icon: Download, value: 'Free forever', label: 'No tiers, no trials' },
  { icon: UserX, value: 'No account', label: 'Open and start working' },
  { icon: HardDrive, value: '100% local', label: 'Your data never leaves your PC' },
  { icon: MonitorDown, value: 'Works offline', label: 'No connection required' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(720px_320px_at_70%_0%,rgba(99,102,241,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pt-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            v1.0.0 — now available for Windows
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl">
            Project management for focused builders
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            ProjMate keeps every project in one calm workspace — statuses, priorities, deadlines,
            images and notes. No accounts, no cloud, no distractions. Just your work, on your machine.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-card transition-all hover:-translate-y-px hover:bg-brand-700 hover:shadow-lift"
            >
              <Download size={18} aria-hidden="true" />
              Download for Windows
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-slate-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink-900 transition-all hover:-translate-y-px hover:border-slate-400 hover:shadow-card"
            >
              Explore features
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <AppMock />
        </Reveal>
      </div>

      <div className="relative border-y border-ink-100 bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 70}
              className="flex items-center gap-3.5 px-2 py-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <s.icon size={20} aria-hidden="true" />
              </span>
              <span>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[15px] font-bold text-ink-900">{s.value}</dd>
                <dd className="text-[13px] text-ink-500">{s.label}</dd>
              </span>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

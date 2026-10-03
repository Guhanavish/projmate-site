import { Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function MiniBar({ w = 'w-2/3' }) {
  return <div className={`h-2.5 rounded-full bg-slate-200 ${w}`} aria-hidden="true" />;
}

function ListMini() {
  return (
    <div className="space-y-2.5 rounded-2xl border border-ink-100 bg-white p-4 shadow-card" aria-hidden="true">
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-lg bg-slate-100" />
        <div className="h-8 w-16 rounded-lg bg-ink-900" />
      </div>
      {['#2563eb', '#f59e0b', '#10b981'].map((c) => (
        <div key={c} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
          <div className="h-9 w-9 rounded-lg bg-brand-50" />
          <div className="flex-1 space-y-1.5">
            <MiniBar />
            <MiniBar w="w-1/3" />
          </div>
          <div className="h-5 w-16 rounded-full" style={{ background: c }} />
        </div>
      ))}
    </div>
  );
}

function FormMini() {
  return (
    <div className="space-y-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-card" aria-hidden="true">
      <MiniBar w="w-1/4" />
      <div className="h-9 rounded-lg border border-slate-200 bg-slate-50" />
      <MiniBar w="w-1/4" />
      <div className="h-16 rounded-lg border border-slate-200 bg-slate-50" />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 rounded-lg bg-gradient-to-br from-brand-50 to-slate-200" />
        ))}
      </div>
    </div>
  );
}

function FilesMini() {
  return (
    <div className="flex gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-card" aria-hidden="true">
      <div className="w-24 space-y-2 rounded-xl bg-slate-50 p-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-7 rounded-lg ${i === 0 ? 'bg-brand-50' : 'bg-slate-100'}`} />
        ))}
      </div>
      <div className="flex-1 space-y-2 rounded-xl bg-slate-50 p-3">
        <MiniBar />
        <MiniBar />
        <MiniBar w="w-1/2" />
        <MiniBar />
        <MiniBar w="w-2/3" />
      </div>
    </div>
  );
}

const ROWS = [
  {
    eyebrow: 'Project list',
    title: 'Your projects at a glance',
    copy: 'A calm, scannable list with live search, status filters and one-click status changes — plus drag-and-drop ordering for whatever matters today.',
    bullets: ['Live search across names, tools and files', 'Filter by Planned, In Progress or Completed', 'Drag cards to set your own order'],
    Mock: ListMini,
  },
  {
    eyebrow: 'Add & edit',
    title: 'Capture every detail once',
    copy: 'One form holds the full shape of a project: description, status, priority, deadline, tools, images and documents.',
    bullets: ['Up to 6 auto-resized images per project', 'Import .txt, .md, .json, .csv and more', 'Comma-separated tool and stack tags'],
    Mock: FormMini,
  },
  {
    eyebrow: 'Files & images',
    title: 'Work stays with the project',
    copy: 'Notes open in a built-in editor and images in a full lightbox — no hunting through folders to find the context you need.',
    bullets: ['Edit and re-download text files in place', 'Fullscreen image viewer with counter', 'Overdue deadlines flagged automatically'],
    Mock: FilesMini,
  },
];

export default function Tour() {
  return (
    <section id="tour" aria-labelledby="tour-title" className="border-y border-ink-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Product tour"
          title="Three screens. Zero learning curve."
          sub="If you can use a checklist, you can use ProjMate. Here is the whole app, end to end."
        />
        <div className="mt-14 space-y-14">
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? '' : ''
              }`}
            >
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{row.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[28px]">
                  {row.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-600">{row.copy}</p>
                <ul className="mt-5 space-y-2.5">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] text-ink-900">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={110} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <row.Mock />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

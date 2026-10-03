import { CalendarClock, FileText, ImagePlus, ListChecks, Search, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    icon: ListChecks,
    title: 'Status & priority tracking',
    copy: 'Move work from Planned to In Progress to Completed, and flag what matters with High, Medium and Low priorities.',
  },
  {
    icon: CalendarClock,
    title: 'Due dates with overdue alerts',
    copy: 'Set a deadline per project. Overdue items surface automatically so nothing slips quietly.',
  },
  {
    icon: ImagePlus,
    title: 'Image attachments',
    copy: 'Attach up to six images per project. Files are resized automatically and open in a built-in lightbox.',
  },
  {
    icon: FileText,
    title: 'Built-in text workspace',
    copy: 'Import notes, specs and docs, then read, edit, save and re-download them without leaving the app.',
  },
  {
    icon: Search,
    title: 'Search, filter & reorder',
    copy: 'Find anything across names, tools and files in keystrokes, filter by status, and drag cards to order your day.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    copy: 'Everything is stored locally on your device — including the dark mode that keeps late sessions easy on the eyes.',
  },
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Features"
        title="Everything a solo project needs. Nothing it doesn't."
        sub="ProjMate covers the full lifecycle of a personal build — from the first idea to the shipped result — in a single window."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 80}>
            <article className="group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <f.icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[17px] font-bold tracking-tight text-ink-900">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{f.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

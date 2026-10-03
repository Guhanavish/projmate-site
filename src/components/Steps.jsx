import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    n: '01',
    title: 'Download the app',
    copy: 'Grab the free Windows installer. No account, no signup — it runs the moment it opens.',
  },
  {
    n: '02',
    title: 'Add your first project',
    copy: 'Name it, set a status and priority, attach images and notes. Thirty seconds, tops.',
  },
  {
    n: '03',
    title: 'Track it to done',
    copy: 'Update statuses, watch deadlines, and drag cards as priorities shift. Ship, repeat.',
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="How it works"
        title="Up and running in under a minute"
      />
      <ol className="relative mt-12 grid gap-5 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-slate-200 md:block"
        />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <li className="relative h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-base font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-[17px] font-bold tracking-tight text-ink-900">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{s.copy}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

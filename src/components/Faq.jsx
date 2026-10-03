import { Plus } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'Is ProjMate really free?',
    a: 'Yes. There are no tiers, trials or locked features — the full app, including images, file management and dark mode, is free.',
  },
  {
    q: 'Does it work without an internet connection?',
    a: 'Completely. ProjMate runs entirely on your PC with no account and no cloud dependency, so it works offline by default.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Locally on your own device, inside the app’s local storage. Nothing is uploaded anywhere, which also means your projects only exist on that machine — back up anything irreplaceable separately.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'Windows 10 and 11 (64-bit) today via a standard installer. Other platforms are under consideration for future releases.',
  },
  {
    q: 'How do updates work?',
    a: 'Download the newer installer from the releases page and install over the current version. Your existing projects are preserved.',
  },
];

function Item({ faq, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
        open ? 'border-brand-600/40 shadow-card' : 'border-ink-100 shadow-sm'
      }`}
    >
      <h3>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15.5px] font-bold text-ink-900 sm:px-6"
        >
          {faq.q}
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
              open ? 'rotate-45 bg-brand-600 text-white' : 'bg-slate-100 text-ink-600'
            }`}
          >
            <Plus size={16} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} className={`acc-panel ${open ? 'open' : ''}`}>
        <div className="acc-inner">
          <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink-600 sm:px-6">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        sub="The short version of everything people ask before installing."
      />
      <Reveal className="mt-10 flex flex-col gap-3">
        {FAQS.map((f, i) => (
          <Item key={f.q} faq={f} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </Reveal>
    </section>
  );
}

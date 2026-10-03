import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{eyebrow}</span>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {sub ? <p className="text-base leading-relaxed text-ink-600">{sub}</p> : null}
    </Reveal>
  );
}

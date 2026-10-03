const ROWS = [
  { name: 'Website Redesign', status: 'In Progress', statusBg: '#2563eb', tag: 'High', tagBg: '#fdecec', tagTx: '#dc2626', due: 'Due Aug 28, 2026' },
  { name: 'Mobile App Prototype', status: 'Planned', statusBg: '#f59e0b', tag: 'Medium', tagBg: '#fdf2e0', tagTx: '#b45309', due: 'Due Sep 12, 2026' },
  { name: 'Client Onboarding Docs', status: 'Completed', statusBg: '#10b981', tag: 'Low', tagBg: '#eef2f7', tagTx: '#5b6b80', due: 'Added Jul 30, 2026' },
];

/** Static, code-built mock of the ProjMate project list — zero image weight. */
export default function AppMock() {
  return (
    <div
      role="img"
      aria-label="Preview of the ProjMate app showing three projects with statuses, priorities and due dates"
      className="overflow-hidden rounded-2xl border border-ink-100 bg-white text-left shadow-hero"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 hidden rounded-md bg-white px-3 py-1 text-xs font-medium text-ink-500 shadow-sm sm:block">
          ProjMate — Projects
        </span>
      </div>
      <div className="space-y-2.5 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="h-8 flex-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-ink-500">
            Search projects…
          </span>
          <span className="rounded-lg bg-ink-900 px-2.5 py-1.5 text-[11px] font-semibold text-white">All</span>
          <span className="hidden rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-ink-500 sm:block">
            Planned
          </span>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
              </svg>
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-1.5">
                <span className="truncate text-sm font-bold text-ink-900">{r.name}</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: r.tagBg, color: r.tagTx }}
                >
                  {r.tag}
                </span>
              </span>
              <span className="mt-0.5 block text-[11px] text-ink-500">{r.due}</span>
            </span>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
              style={{ background: r.statusBg }}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

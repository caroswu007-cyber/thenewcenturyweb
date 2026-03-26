import type { ReactNode } from 'react';

/**
 * Inline emphasis: wrap phrases in `**like this**` inside i18n strings.
 */
export function ReportInline({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-medium text-slate-200/95">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

/** Split on blank lines (`\n\n`) into paragraphs with comfortable vertical rhythm. */
export function ReportParagraphs({
  text,
  className = '',
  paragraphClassName = 'leading-relaxed text-slate-300',
}: {
  text: string;
  className?: string;
  paragraphClassName?: string;
}) {
  const paras = text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  return (
    <div className={`space-y-4 md:space-y-5 ${className}`}>
      {paras.map((p, i) => (
        <p key={i} className={paragraphClassName}>
          <ReportInline text={p} />
        </p>
      ))}
    </div>
  );
}

/** Section divider — centered jewel, no box. */
export function ReportFlowSep() {
  return (
    <div className="my-9 md:my-11 flex items-center justify-center gap-4" role="separator">
      <span
        className="h-px flex-1 max-w-[42%] bg-gradient-to-r from-transparent via-slate-500/25 to-slate-400/20"
        aria-hidden
      />
      <span className="shrink-0 font-cinzel text-[0.5rem] tracking-[0.55em] text-slate-500/50" aria-hidden>
        ◆
      </span>
      <span
        className="h-px flex-1 max-w-[42%] bg-gradient-to-l from-transparent via-slate-500/25 to-slate-400/20"
        aria-hidden
      />
    </div>
  );
}

/** Subtle inset block — neutral rail so text isn’t glued to the left edge. */
export function ReportLeftRail({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-slate-950/25 px-4 py-4 md:px-8 md:py-5">
      {children}
    </div>
  );
}

import type { ReactNode } from 'react';

export function ReportInline({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold" style={{ color: '#8B5413' }}>
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
  paragraphClassName = 'leading-relaxed',
  style,
}: {
  text: string;
  className?: string;
  paragraphClassName?: string;
  style?: React.CSSProperties;
}) {
  const paras = text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  return (
    <div className={`space-y-4 md:space-y-5 ${className}`}>
      {paras.map((p, i) => (
        <p key={i} className={paragraphClassName} style={style ?? { color: '#3D2510' }}>
          <ReportInline text={p} />
        </p>
      ))}
    </div>
  );
}

/** Section divider — centered jewel, warm amber rule. */
export function ReportFlowSep() {
  return (
    <div className="my-9 md:my-11 flex items-center justify-center gap-4" role="separator">
      <span
        className="h-px flex-1 max-w-[42%]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(194,123,32,0.25), rgba(194,123,32,0.15))' }}
        aria-hidden
      />
      <span className="shrink-0 font-cinzel text-[0.5rem] tracking-[0.55em]" style={{ color: 'rgba(194,123,32,0.45)' }} aria-hidden>
        ◆
      </span>
      <span
        className="h-px flex-1 max-w-[42%]"
        style={{ background: 'linear-gradient(to left, transparent, rgba(194,123,32,0.25), rgba(194,123,32,0.15))' }}
        aria-hidden
      />
    </div>
  );
}

/** Subtle inset block — warm paper rail. */
export function ReportLeftRail({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg px-4 py-4 md:px-8 md:py-5" style={{ border: '1px solid rgba(31,18,8,0.09)', background: 'rgba(237,224,204,0.45)' }}>
      {children}
    </div>
  );
}

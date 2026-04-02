import type { CSSProperties, ReactNode } from 'react';

export type InlineRichProps = {
  text: string;
  className?: string;
  strongClassName?: string;
  strongStyle?: CSSProperties;
  /** `*phrase*` → <em> (only outside `**…**`). Default false — avoids accidental matches in copy with asterisks. */
  italic?: boolean;
  emClassName?: string;
  emStyle?: CSSProperties;
};

function mapWithItalic(
  segment: string,
  keyPrefix: string | number,
  italic: boolean,
  emClassName?: string,
  emStyle?: CSSProperties,
): ReactNode[] {
  if (!italic || !segment.includes('*')) {
    return [<span key={`${keyPrefix}-0`}>{segment}</span>];
  }
  const parts = segment.split(/(\*[^*]+\*)/g);
  return parts.map((part, j) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={`${keyPrefix}-${j}`} className={emClassName} style={emStyle}>
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={`${keyPrefix}-${j}`}>{part}</span>;
  });
}

/** Renders workbook-style `**bold**` (and optional `*italic*`) as real HTML emphasis. */
export function InlineRich({
  text,
  className,
  strongClassName = 'font-semibold',
  strongStyle,
  italic = false,
  emClassName,
  emStyle,
}: InlineRichProps) {
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {boldParts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return (
            <strong key={i} className={strongClassName} style={strongStyle}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return (
          <span key={i}>{mapWithItalic(part, i, italic, emClassName, emStyle)}</span>
        );
      })}
    </span>
  );
}

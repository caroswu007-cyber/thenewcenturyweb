import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  text: string;
  /** Collapse when longer than this (characters). */
  maxChars?: number;
  className?: string;
  /** Dark cosmic panels vs light cards */
  theme?: 'light' | 'dark';
};

/** Word-aware preview + expand/collapse for long paragraphs. */
export function CollapsibleText({ text, maxChars = 220, className = '', theme = 'dark' }: Props) {
  const [open, setOpen] = useState(false);
  const trimmed = text.trim();

  const { preview, needsToggle } = useMemo(() => {
    if (trimmed.length <= maxChars) {
      return { preview: trimmed, needsToggle: false };
    }
    let cut = trimmed.slice(0, maxChars);
    const lastSpace = cut.lastIndexOf(' ');
    if (lastSpace > maxChars * 0.55) cut = cut.slice(0, lastSpace);
    return { preview: `${cut}…`, needsToggle: true };
  }, [trimmed, maxChars]);

  return (
    <div>
      <p className={className}>{open ? trimmed : needsToggle ? preview : trimmed}</p>
      {needsToggle ? (
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className={
            theme === 'dark'
              ? 'mt-3 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-amber-200/90 hover:text-amber-100 border-b border-transparent hover:border-amber-300/40 pb-px'
              : 'mt-3 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-[#3665f3] hover:text-[#2854d9] border-b border-transparent hover:border-current pb-px'
          }
        >
          {open ? 'Show less' : 'Show more'}
          <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={2.5} />
        </button>
      ) : null}
    </div>
  );
}

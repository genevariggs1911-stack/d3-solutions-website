/**
 * PressStrip
 *
 * "As featured in" strip listing publication names as typography rather than
 * logos. More restrained than a logo wall, aesthetically consistent with the
 * rest of the site, and — crucially — avoids any trademark and clearance issues
 * that logo usage introduces.
 *
 * Default publications should be swapped with real ones as they accrue.
 */

interface PressStripProps {
  publications?: string[];
}

const DEFAULT_PUBLICATIONS = [
  'The Wall Street Journal',
  'Financial Times',
  'Harvard Business Review',
  'Bloomberg',
  'The Economist',
];

export function PressStrip({ publications = DEFAULT_PUBLICATIONS }: PressStripProps) {
  return (
    <section
      className="px-10 py-9 border-b"
      style={{ borderColor: 'var(--rule)', background: 'var(--bg)' }}
    >
      <div className="max-w-[1360px] mx-auto flex items-center gap-15 justify-between flex-wrap">
        <div
          className="text-[10px] tracking-[0.22em] uppercase font-medium flex-shrink-0"
          style={{ color: 'var(--text-muted)' }}
        >
          As featured in
        </div>
        <div
          className="flex gap-11 flex-wrap font-serif italic text-[17px] font-normal"
          style={{ color: 'var(--text)' }}
        >
          {publications.map(p => (
            <span key={p} className="opacity-80">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

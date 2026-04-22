/**
 * Masthead
 *
 * Editorial running header with date, volume marker (Roman), firm name, offices,
 * and theme toggle. Sits above the primary nav. Mirrors the top strip of a
 * newspaper weekend edition.
 *
 * Props:
 *   - volume: Roman numeral year (default "III")
 *   - issue: Roman numeral issue (default "XI")
 *   - offices: comma-separated office list
 */

import { ThemeToggle } from './ThemeToggle';

interface MastheadProps {
  volume?: string;
  issue?: string;
  offices?: string[];
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).replace(',', ' ·');
}

export function Masthead({
  volume = 'III',
  issue = 'XI',
  offices = ['Chicago', 'Washington', 'London'],
}: MastheadProps) {
  const dateStr = formatDate(new Date());

  return (
    <div
      className="grid grid-cols-[1fr_auto_1fr] items-center px-10 py-3 border-b text-[11px] uppercase tracking-[0.18em] font-sans"
      style={{ borderColor: 'var(--rule)', color: 'var(--text-muted)' }}
    >
      <div className="flex items-center gap-4">
        <span className="tabular-nums">{dateStr}</span>
        <span
          className="inline-block w-0.5 h-0.5 rounded-full"
          style={{ background: 'var(--text-muted)' }}
          aria-hidden
        />
        <span
          className="italic font-serif normal-case tracking-[0.04em] text-[12px] font-normal"
          style={{ color: 'var(--text)' }}
        >
          Vol. {volume} · No. {issue}
        </span>
      </div>

      <span
        className="font-serif font-medium text-[14px] tracking-[0.02em] normal-case"
        style={{ color: 'var(--text)' }}
      >
        D3
      </span>

      <div className="flex items-center gap-4 justify-end">
        <span>{offices.join(' · ')}</span>
        <span
          className="inline-block w-0.5 h-0.5 rounded-full"
          style={{ background: 'var(--text-muted)' }}
          aria-hidden
        />
        <ThemeToggle />
      </div>
    </div>
  );
}

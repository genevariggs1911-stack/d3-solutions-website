/**
 * SectionMarker
 *
 * Editorial section label formatted as `§ 0N  Label`. The § glyph is in accent,
 * the number is italic serif, the label is small caps sans. Read as:
 *   "section zero-two, the method"
 *
 * Pair with an H1/H2 below. Use in every major section of long-form pages.
 */

interface SectionMarkerProps {
  num: number;
  label: string;
}

export function SectionMarker({ num, label }: SectionMarkerProps) {
  const padded = num.toString().padStart(2, '0');
  return (
    <span
      className="font-serif italic text-[13px] tracking-[0.02em] font-normal inline-flex items-baseline gap-2"
      style={{
        color: 'var(--accent)',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      <span className="not-italic text-[16px] opacity-70">§</span>
      {padded}
      <span
        className="not-italic font-sans text-[11px] uppercase tracking-[0.22em] font-medium ml-3"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </span>
  );
}

/**
 * PullQuote
 *
 * A testimonial or pulled quote rendered with an oversized italic opening
 * quotation mark in the accent color. Classic editorial treatment.
 *
 * Kept aggressively typographic — no card, no shadow, no avatar.
 */

interface PullQuoteProps {
  quote: string;
  name: string;
  title: string;
  org?: string;
}

export function PullQuote({ quote, name, title, org }: PullQuoteProps) {
  return (
    <section className="max-w-[1040px] mx-auto px-10 py-[140px] relative">
      <span
        aria-hidden
        className="font-serif italic font-normal text-[200px] leading-[0.7] absolute top-[100px] left-6 opacity-90"
        style={{ color: 'var(--accent)' }}
      >
        &ldquo;
      </span>

      <blockquote
        className="font-serif italic font-normal text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.3] tracking-[-0.01em] max-w-[28ch] ml-[120px] text-balance"
        style={{ color: 'var(--text)' }}
      >
        {quote}
      </blockquote>

      <div
        className="mt-8 ml-[120px] text-[12px] tracking-[0.18em] uppercase font-medium"
        style={{ color: 'var(--text-muted)' }}
      >
        <span style={{ color: 'var(--text)' }}>{name}</span>
        {' · '}
        {title}
        {org && (
          <>
            {' · '}
            {org}
          </>
        )}
      </div>
    </section>
  );
}

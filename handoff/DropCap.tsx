/**
 * DropCap
 *
 * Editorial drop-cap wrapper for the first paragraph of a long-form section.
 * The first letter is enlarged, floated, and colored with the accent.
 * Use on the *lede* paragraph of a case study or article — never on every paragraph.
 *
 * Implementation uses CSS ::first-letter so the paragraph flow handles the
 * cap naturally. Safer than splitting the text in JS.
 */

import { ReactNode } from 'react';

interface DropCapProps {
  children: ReactNode;
  className?: string;
}

export function DropCap({ children, className = '' }: DropCapProps) {
  return (
    <p
      className={`drop-cap font-serif text-[19px] leading-[1.55] max-w-[58ch] mb-[22px] ${className}`}
      style={{ color: 'var(--text)' }}
    >
      {children}
      <style>{`
        .drop-cap::first-letter {
          font-family: var(--serif);
          font-weight: 500;
          font-size: 5.2em;
          float: left;
          line-height: 0.85;
          padding: 0.08em 0.12em 0 0;
          margin-right: 4px;
          color: var(--accent);
          font-feature-settings: "ss01" 1;
        }
      `}</style>
    </p>
  );
}

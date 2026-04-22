'use client';

/**
 * ScrollProgress
 *
 * 1px hairline across the top of the viewport. Width tracks the user's
 * scroll position as a percentage of total scrollable height. Color is
 * theme-bound to --accent, which flips between oxblood and ochre.
 *
 * No dependencies, no layout shift, passive scroll listener.
 */

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 h-px z-[200] transition-[width] duration-[80ms] ease-linear"
      style={{ width: `${pct}%`, background: 'var(--accent)' }}
    />
  );
}

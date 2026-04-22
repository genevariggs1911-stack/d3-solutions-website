'use client';

/**
 * AnimatedCounter
 *
 * Number that animates from 0 to `value` the first time it enters the viewport.
 * Uses IntersectionObserver + requestAnimationFrame. Respects prefers-reduced-motion
 * (snaps to final value immediately). Tabular figures so the width is stable during
 * the count-up.
 *
 * Usage:
 *   <AnimatedCounter value={126} />
 *   <AnimatedCounter value={2019} duration={1400} />
 */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1200,
  className = '',
}: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion) {
      setDisplayed(value);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplayed(Math.floor(value * eased));
            if (t < 1) requestAnimationFrame(step);
            else setDisplayed(value);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, reducedMotion]);

  return (
    <span
      ref={ref}
      className={`tabular-nums inline-block ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {displayed}
    </span>
  );
}

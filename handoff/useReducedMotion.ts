'use client';

/**
 * useReducedMotion
 *
 * Reads the user's prefers-reduced-motion setting and returns a boolean.
 * Updates when the setting changes during the session.
 *
 * Every component that animates something optional should gate on this.
 */

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

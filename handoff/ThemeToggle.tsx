'use client';

/**
 * ThemeToggle
 *
 * Tiny light/dark switch rendered as two small-caps buttons with an accent underline
 * on the active state. Intended to sit inside the Masthead, not on its own.
 *
 * Persists to localStorage under key `d3-theme`. System preference is the fallback.
 */

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
    setTheme(current);
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('d3-theme', next);
    setTheme(next);
  };

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center gap-2"
    >
      <button
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => apply('light')}
        className="relative px-0.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.22em] cursor-pointer bg-transparent border-0"
        style={{ color: theme === 'light' ? 'var(--accent)' : 'var(--text-muted)' }}
      >
        Light
        {theme === 'light' && (
          <span
            aria-hidden
            className="absolute left-0 right-0 -bottom-0.5 h-px"
            style={{ background: 'var(--accent)' }}
          />
        )}
      </button>
      <span className="w-px h-2" style={{ background: 'var(--rule)' }} aria-hidden />
      <button
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => apply('dark')}
        className="relative px-0.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.22em] cursor-pointer bg-transparent border-0"
        style={{ color: theme === 'dark' ? 'var(--accent)' : 'var(--text-muted)' }}
      >
        Dark
        {theme === 'dark' && (
          <span
            aria-hidden
            className="absolute left-0 right-0 -bottom-0.5 h-px"
            style={{ background: 'var(--accent)' }}
          />
        )}
      </button>
    </div>
  );
}

'use client';

/**
 * SectionIndicator
 *
 * Bottom-right running label that shows which section is currently in view.
 * Reads `data-section` and `data-section-num` from sibling <section> elements
 * via IntersectionObserver. Visible only mid-scroll (not at very top or very bottom)
 * to avoid competing with the hero or footer.
 *
 * Drop once at the root. Any section that should be tracked needs:
 *   <section data-section="The Method" data-section-num="§ 02"> … </section>
 */

import { useEffect, useState } from 'react';

export function SectionIndicator() {
  const [active, setActive] = useState<{ label: string; num: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    if (sections.length === 0) return;

    // Initialize with the first section
    const first = sections[0];
    setActive({
      label: first.dataset.section || '',
      num: first.dataset.sectionNum || '',
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setActive({
              label: el.dataset.section || '',
              num: el.dataset.sectionNum || '',
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));

    // Visibility logic — hide at top and bottom
    const toggleVisibility = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 400 && window.scrollY < max - 400);
    };
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      aria-hidden
      className="fixed bottom-8 right-8 z-[150] flex flex-col items-end gap-1.5 pointer-events-none transition-opacity duration-[400ms] hidden md:flex"
      style={{
        opacity: visible ? 1 : 0,
        fontFamily: 'var(--sans)',
        color: 'var(--text-muted)',
      }}
    >
      <span
        className="font-serif italic text-[14px] tracking-[0.02em] font-normal normal-case"
        style={{ color: 'var(--accent)' }}
      >
        {active.num}
      </span>
      <span className="text-[10px] uppercase tracking-[0.22em] font-medium">{active.label}</span>
    </div>
  );
}

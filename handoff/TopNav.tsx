/**
 * TopNav
 *
 * Primary navigation. "D3" alone carries the mark — no "Solutions Group"
 * subhead in the visible header. The legal name lives in the footer only.
 *
 * Props:
 *   - links: array of {label, href}
 *   - ctaLabel / ctaHref: the single primary action
 */

import Link from 'next/link';

interface NavLink { label: string; href: string; }

interface TopNavProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Approach', href: '/approach' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
];

export function TopNav({
  links = DEFAULT_LINKS,
  ctaLabel = 'Start a conversation',
  ctaHref = '/contact',
}: TopNavProps) {
  return (
    <nav
      className="flex justify-between items-center px-10 py-6 border-b"
      style={{ borderColor: 'var(--rule)' }}
    >
      <Link
        href="/"
        aria-label="D3 home"
        className="font-serif font-semibold text-[30px] tracking-[-0.015em] leading-none"
        style={{ color: 'var(--text)', fontFeatureSettings: '"ss01" 1, "dlig" 1' }}
      >
        D3
      </Link>

      <ul className="flex gap-11 list-none">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative pb-0.5 text-[13px] tracking-[0.04em] font-medium no-underline group"
              style={{ color: 'var(--text)' }}
            >
              {link.label}
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[420ms]"
                style={{ background: 'var(--accent)', transitionTimingFunction: 'var(--ease-d3)' }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className="text-[13px] px-5 py-[11px] no-underline tracking-[0.03em] font-medium transition-colors duration-200"
        style={{ background: 'var(--text)', color: 'var(--bg)' }}
      >
        {ctaLabel}
      </Link>
    </nav>
  );
}

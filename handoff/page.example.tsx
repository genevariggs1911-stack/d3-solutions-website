/**
 * Home page — reference composition
 *
 * This file shows how to assemble the components for the D3 home page.
 * Copy the relevant sections into your app/page.tsx and app/layout.tsx.
 *
 * LAYOUT SETUP (app/layout.tsx):
 *   <html lang="en">
 *     <head>
 *       <ThemeScript />
 *     </head>
 *     <body>
 *       <GrainOverlay />
 *       <ScrollProgress />
 *       <SectionIndicator />
 *       {children}
 *     </body>
 *   </html>
 */

import { Masthead } from '@/components/Masthead';
import { TopNav } from '@/components/TopNav';
import { SectionMarker } from '@/components/SectionMarker';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { PressStrip } from '@/components/PressStrip';
import { PullQuote } from '@/components/PullQuote';
import { DropCap } from '@/components/DropCap';

export default function HomePage() {
  return (
    <>
      <Masthead />
      <TopNav />

      {/* Hero */}
      <section
        data-section="Introduction"
        data-section-num="§ 01"
        className="px-10 pt-[100px] pb-[140px] max-w-[1360px] mx-auto grid grid-cols-2 gap-20 items-end"
      >
        <div>
          <div className="mb-9">
            <SectionMarker num={1} label="Management Consulting" />
          </div>
          <h1
            className="font-serif font-medium text-[clamp(3rem,5.2vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-balance"
            style={{ color: 'var(--text)' }}
          >
            Strategy is rarely the problem.{' '}
            <em
              className="italic font-normal"
              style={{ color: 'var(--accent)' }}
            >
              Execution is.
            </em>
          </h1>
          <p
            className="font-serif text-[20px] leading-[1.45] max-w-[42ch] mt-8"
            style={{ color: 'var(--text-muted)' }}
          >
            D3 builds the operating infrastructure that holds when the business finally turns the pressure up. Three phases, every engagement: Discover, Develop, Deploy.
          </p>
        </div>

        <div
          className="pl-10 border-l pb-2"
          style={{ borderColor: 'var(--rule)' }}
        >
          <MetaLine label="Established" value={<AnimatedCounter value={2019} duration={1400} />} />
          <MetaLine label="Partners" value={<AnimatedCounter value={14} />} />
          <MetaLine
            label="Engagements delivered"
            value={
              <>
                <AnimatedCounter value={126} duration={1600} /> across{' '}
                <AnimatedCounter value={9} duration={1000} /> sectors
              </>
            }
          />
          <div
            className="font-sans text-[14px] mb-7"
            style={{ color: 'var(--text-muted)' }}
          >
            Financial services · Public sector · Industrials · Healthcare · Technology
          </div>
        </div>
      </section>

      <PressStrip />

      {/* Method */}
      <section
        data-section="The Method"
        data-section-num="§ 02"
        className="border-t px-10 py-[100px] max-w-[1360px] mx-auto"
        style={{ borderColor: 'var(--rule)' }}
      >
        <div className="grid grid-cols-[300px_1fr] gap-15 mb-20 items-start">
          <div>
            <SectionMarker num={2} label="The Method" />
          </div>
          <h2
            className="font-serif font-medium text-[clamp(1.75rem,2.4vw,2.25rem)] leading-[1.2] tracking-[-0.01em] max-w-[28ch]"
            style={{ color: 'var(--text)' }}
          >
            Three phases on every engagement. We do not leave until the work is running.
          </h2>
        </div>

        <div
          className="grid grid-cols-3 border-t"
          style={{ borderColor: 'var(--text)' }}
        >
          <Phase numeral="I." title="Discover" duration="30 – 60 days">
            We sit with your team, read the data, and write the brief. By the end, you have one document the board can act on and the terms of the next phase are set.
          </Phase>
          <Phase numeral="II." title="Develop" duration="60 – 120 days">
            We design the operating model the business has outgrown. Governance that matches the size. Rituals that match the cadence. Roles that match the work.
          </Phase>
          <Phase numeral="III." title="Deploy" duration="90 – 180 days">
            We stay in the room while the change lands. The model transfers to the team that has to live with it, and we do not leave until it runs without us.
          </Phase>
        </div>
      </section>

      {/* Clients */}
      <section
        data-section="Selected Clients"
        data-section-num="§ 03"
        className="px-10 py-14 border-t border-b"
        style={{ borderColor: 'var(--rule)', background: 'var(--bg-subtle)' }}
      >
        <div className="max-w-[1360px] mx-auto grid grid-cols-[260px_1fr] gap-15 items-center">
          <div
            className="text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Selected Clients
          </div>
          <div
            className="flex justify-between items-center gap-10 font-serif font-medium text-[18px] tracking-[0.01em]"
            style={{ color: 'var(--text)' }}
          >
            <span>Fortune 500</span>
            <span>Federal Agencies</span>
            <span>Private Equity</span>
            <span>Family Offices</span>
            <span>Series B – D</span>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <div data-section="Testimonial" data-section-num="§ 04">
        <PullQuote
          quote="They rebuilt the way our leadership team runs the business, and stayed until it held."
          name="M. Ashworth"
          title="Chief Operating Officer"
          org="Mid-Market Financial Services"
        />
      </div>

      {/* Case study */}
      <section
        data-section="Case Study"
        data-section-num="§ 05"
        className="px-10 py-[110px] max-w-[1360px] mx-auto grid grid-cols-[380px_1fr] gap-20 border-t"
        style={{ borderColor: 'var(--rule)' }}
      >
        <aside
          className="pt-5 border-t"
          style={{ borderColor: 'var(--text)' }}
        >
          <div
            className="text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Engagement · 2025
          </div>
          <div
            className="font-serif italic text-[15px] mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            Financial services · Mid-market
          </div>
          <dl className="grid gap-4 text-[13px]">
            <MetaPair term="Phase" desc="Develop & Deploy" />
            <MetaPair term="Duration" desc="4 months" />
            <MetaPair term="Team" desc="3 partners, 5 consultants" />
            <MetaPair term="Outcome" desc="First full review in 45 minutes" />
          </dl>
        </aside>

        <div>
          <div className="mb-6">
            <SectionMarker num={5} label="Case Study" />
          </div>
          <h2
            className="font-serif font-medium text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.12] tracking-[-0.015em] mb-10 max-w-[22ch] text-balance"
            style={{ color: 'var(--text)' }}
          >
            Stand up a program management office in ninety days.
          </h2>

          <DropCap>
            A mid-market financial services firm had six strategic programs in flight and no single place where the status, the dependencies, and the decisions lived. Every leadership review opened with thirty minutes of reconciliation.
          </DropCap>

          <p
            className="font-serif text-[17px] leading-[1.55] max-w-[58ch] mb-[22px]"
            style={{ color: 'var(--text-muted)' }}
          >
            We built the PMO from the intake conversation down to the weekly operating rhythm. Governance, templates, escalation lanes, and a cadence the executive team actually attended. The model transferred to an internal lead in the fourth month. We left.
          </p>

          <a
            href="/work/acme-pmo"
            className="inline-block mt-7 font-sans text-[13px] tracking-[0.04em] no-underline pb-1 font-medium border-b"
            style={{ color: 'var(--text)', borderColor: 'var(--accent)' }}
          >
            Read the full engagement →
          </a>
        </div>
      </section>
    </>
  );
}

function MetaLine({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <>
      <div
        className="text-[10px] tracking-[0.22em] uppercase font-medium mb-2.5"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </div>
      <div
        className="font-serif text-[18px] leading-[1.4] mb-7"
        style={{ color: 'var(--text)' }}
      >
        <span
          className="text-[32px] font-medium tracking-[-0.02em] inline-block"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {value}
        </span>
      </div>
    </>
  );
}

function Phase({
  numeral,
  title,
  duration,
  children,
}: {
  numeral: string;
  title: string;
  duration: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="pt-11 pr-9 pb-10 first:pl-0 [&:not(:first-child)]:pl-9 border-r last:border-r-0 last:pr-0"
      style={{ borderColor: 'var(--rule)' }}
    >
      <span
        className="font-serif italic text-[28px] mb-10 block tracking-[0.02em]"
        style={{ color: 'var(--accent)' }}
      >
        {numeral}
      </span>
      <h3
        className="font-serif font-medium text-[28px] tracking-[-0.01em] mb-5"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] leading-[1.6] max-w-[36ch]"
        style={{ color: 'var(--text-muted)' }}
      >
        {children}
      </p>
      <div
        className="mt-7 text-[11px] tracking-[0.18em] uppercase font-medium tabular-nums"
        style={{ color: 'var(--text)' }}
      >
        {duration}
      </div>
    </div>
  );
}

function MetaPair({ term, desc }: { term: string; desc: string }) {
  return (
    <>
      <dt
        className="tracking-[0.12em] uppercase text-[10px] font-medium"
        style={{ color: 'var(--text-muted)' }}
      >
        {term}
      </dt>
      <dd
        className="font-serif text-[17px] mb-2 tabular-nums"
        style={{ color: 'var(--text)' }}
      >
        {desc}
      </dd>
    </>
  );
}

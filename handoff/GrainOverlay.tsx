/**
 * GrainOverlay
 *
 * Fixed SVG noise layered over the entire viewport at ~3-4% opacity.
 * Adds a paper-like texture without using an image asset (inlined as data URI).
 *
 * Blend mode inverts between themes so the grain reads on both light and dark.
 *
 * Drop once at the root of the layout. Above all other content in the DOM,
 * but below any dialog/portal overlays.
 */

const NOISE_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export function GrainOverlay() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          opacity: 0.035,
          backgroundImage: NOISE_SVG,
          mixBlendMode: 'multiply',
        }}
        data-grain="light"
      />
      {/* Second layer for dark mode — screens the noise instead of multiplying */}
      <style>{`
        [data-theme="dark"] [data-grain="light"] {
          mix-blend-mode: screen;
          opacity: 0.04;
        }
      `}</style>
    </>
  );
}

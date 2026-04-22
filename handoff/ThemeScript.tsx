/**
 * ThemeScript
 *
 * Inline blocking script that sets data-theme on <html> BEFORE first paint.
 * Without this, users get a flash of the wrong theme on page load.
 *
 * Usage: drop inside <head> in app/layout.tsx, before any <link rel="stylesheet">.
 */

export function ThemeScript() {
  const script = `
    (function () {
      try {
        var saved = localStorage.getItem('d3-theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

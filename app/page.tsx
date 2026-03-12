export default function Home() {
return (
<main>
<header className="site-header">
<div className="container nav">
<div className="nav-brand">
<img
src="/logo/d3-logo-final.svg"
alt="D3 Solutions Group logo"
className="nav-logo"
/>
</div>

<nav className="nav-links">
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/services">Services</a>
<a href="/contact" className="button primary small">
Contact
</a>
</nav>
</div>
</header>

<section className="hero">
<div className="container hero-grid">
<div className="hero-copy-wrap">
<p className="eyebrow">
Strategic Operational Consulting for Growth, Efficiency, and Execution
</p>

<h1>
Are band-aids over your problems actually leaving your business exposed?
</h1>

<p className="subheadline">
D3 Solutions Group helps organizations scale, improve efficiency,
and reduce risk through operational excellence, business
transformation, and expert program management.
</p>

<p className="body-copy">
Today’s business challenges demand more than temporary fixes. D3
Solutions Group partners with leaders to solve urgent operational
problems, strengthen execution, and position organizations for
sustainable growth.
</p>

<div className="actions">
<a className="button primary" href="/contact">
Contact Us
</a>
<a className="button secondary" href="/services">
Explore Services
</a>
</div>
</div>

<div className="hero-panel">
<h2>What D3 Delivers</h2>
<div className="hero-points">
<div className="card">
<h3>Operational Clarity</h3>
<p>
Improve workflows, strengthen controls, and reduce process drag.
</p>
</div>

<div className="card">
<h3>Transformation Support</h3>
<p>
Turn strategic goals into structured, executable change.
</p>
</div>

<div className="card">
<h3>Program Leadership</h3>
<p>
Keep critical initiatives aligned, visible, and moving forward.
</p>
</div>
</div>
</div>
</div>
</section>

<section className="section">
<div className="container">
<h2>Core Services</h2>
<div className="grid three">
<div className="card">
<h3>Operational Excellence</h3>
<p>
Optimize workflows, processes, and controls to improve
efficiency, accountability, and measurable performance.
</p>
</div>

<div className="card">
<h3>Business Transformation</h3>
<p>
Redesign operations to align with strategic goals, modern
business practices, and future growth.
</p>
</div>

<div className="card">
<h3>Program Leadership</h3>
<p>
Lead critical initiatives from planning through execution with
structure, discipline, and measurable outcomes.
</p>
</div>
</div>
</div>
</section>
</main>
);
}

export default function ContactPage() {
return (
<main className="section">
<div className="container">
<h1>Contact</h1>
<p>
Ready to strengthen operations and drive real change? Contact D3
Solutions Group.
</p>

<form className="contact-form">
<input type="text" placeholder="Your name" />
<input type="email" placeholder="Your email" />
<input type="text" placeholder="Company" />
<textarea placeholder="How can we help?" rows={6}></textarea>
<button type="submit" className="button primary">
Send Inquiry
</button>
</form>
</div>
</main>
);
}

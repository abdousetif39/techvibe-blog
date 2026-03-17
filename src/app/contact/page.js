export const metadata = {
  title: "Contact Us | TechVibe.com",
  description: "Get in touch with TechVibe.ai for partnerships, reviews, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Get in Touch 📩</h1>
        <p className="text-slate-500 font-light">We respond to all inquiries within 24-48 hours.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-xl max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Your Email</label>
            <input type="email" required placeholder="name@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all"/>
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
            <textarea rows="5" required placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-200">
            Send Message Securely →
          </button>
        </form>
      </div>
    </main>
  );
}
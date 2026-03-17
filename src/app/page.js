export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Master the <span className="text-blue-600 underline decoration-blue-200">AI Revolution</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            We review the best free AI tools and productivity systems to help you build a sustainable online business.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Article 1 Card */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-100 transition duration-500">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Make Money Online</span>
            <h2 className="text-3xl font-black mt-4 mb-6 leading-tight group-hover:text-blue-600 transition">
              7 Best AI Tools for Making Money Online in 2026
            </h2>
            <a href="/ai-tools-making-money-2026" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition">
              Read Guide →
            </a>
          </div>

          {/* Article 2 Card */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-100 transition duration-500">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest">AI Comparisons</span>
            <h2 className="text-3xl font-black mt-4 mb-6 leading-tight group-hover:text-blue-600 transition">
              5 Best Free ChatGPT Alternatives (Writing & Coding)
            </h2>
            <a href="/best-chatgpt-alternatives" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition">
              Compare Tools →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';

export const metadata = {
  title: "Success! Your AI Blueprint is on the way | TechVibe",
  robots: "noindex, follow", // لا نريد أرشفة هذه الصفحة في جوجل، هي للمشتركين فقط
};

export default function ThankYouPage() {
  const mainAffiliateLink = "https://afflat3c1.com/trk/lnk/8736DC01-8F47-40DD-8D3C-C2F814075491/?o=29778&c=918277&a=790327&k=8B988B3F6AB35E07B96E7B0BFF89B6BA&l=33933";

  return (
    <main className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Success!</div>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight tracking-tighter">
        Check Your Inbox! 📥
      </h1>
      <p className="text-xl text-slate-500 mt-6 font-light leading-relaxed">
        Your free AI Money Blueprint is being delivered. <br className="hidden md:block"/> 
        <strong>While you wait, read this:</strong>
      </p>

      {/* The Profit Offer (Tripwire) */}
      <div className="mt-12 bg-white border-4 border-blue-600 p-10 rounded-[3rem] shadow-2xl transform hover:scale-[1.02] transition duration-500">
        <h2 className="text-2xl font-black text-slate-900 mb-4 italic">#1 Recommended Tool to Start Today:</h2>
        <p className="text-slate-600 mb-10 leading-relaxed font-semibold">
           We've tested 50+ tools. If you want to start earning with AI this month, this is the exact platform you need.
        </p>
        <Link 
          href={mainAffiliateLink} 
          target="_blank" 
          rel="nofollow sponsored"
          className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition block shadow-xl shadow-blue-200"
        >
          Claim Free Trial Now →
        </Link>
        <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">Limited Time Recommendation for New Subscribers</p>
      </div>
    </main>
  );
}
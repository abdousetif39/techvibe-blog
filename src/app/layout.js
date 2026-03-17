import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechVibe.com | Best AI Tools & Productivity 2026",
  description: "Discover the best free AI tools, software reviews, and productivity hacks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* Navbar */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
            <a href="/" className="text-2xl font-black text-blue-600 italic tracking-tighter">
              TechVibe<span className="text-slate-900">.com</span>
            </a>
            <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-500">
              <a href="/" className="hover:text-blue-600 transition">Home</a>
              <a href="/ai-tools-making-money-2026" className="hover:text-blue-600 transition">Make Money</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 py-16 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-3xl font-black italic tracking-tighter mb-4 block">
              TechVibe<span className="text-blue-500">.com</span>
            </span>
            <p className="text-slate-400 text-sm">© 2026 All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
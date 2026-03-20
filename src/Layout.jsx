import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { title: "ABOUT", url: "#about" },
  { title: "MISSION", url: "#mission" },
  { title: "EVENTS", url: "#events" },
  { title: "JOBS", url: "#jobs" },
  { title: "PARTNERS", url: "#partners" },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "This is Roy gets his place";

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(230, 15%, 8%)' }}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                OAC
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="px-4 py-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'Geist Mono, monospace' }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/60"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/5">
            <div className="px-4 py-4 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'Geist Mono, monospace' }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ohio AI Collective
              </span>
              <p className="text-white/30 text-sm mt-3" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Building decentralized, open AI for local innovation.
              </p>
            </div>
            <div>
              <h3 className="text-white/60 text-xs uppercase tracking-[0.12em] mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      className="text-white/30 hover:text-cyan-400 transition-colors"
                      style={{ fontFamily: 'Geist Mono, monospace' }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/60 text-xs uppercase tracking-[0.12em] mb-4" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Community
              </h3>
              <p className="text-white/30 text-sm" style={{ fontFamily: 'Geist Mono, monospace' }}>
                Join our collective of AI builders, researchers, and innovators across Ohio.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/20" style={{ fontFamily: 'Geist Mono, monospace' }}>
            &copy; 2026 Ohio AI Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-brand-lightblue/50"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="font-bebas text-3xl tracking-wide text-brand-blue group-hover:scale-105 transition-transform duration-300">
              FILLMORE
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow self-end mb-2 animate-pulse"></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Menu", "Locations", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold tracking-wider text-gray-700 hover:text-brand-blue transition-colors duration-300 uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="hidden sm:inline-flex group relative items-center gap-2 overflow-hidden rounded-full bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-blue/90 hover:shadow-lg active:scale-95"
            >
              <span className="relative z-10">ORDER NOW</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-brand-yellow/10 transition-transform duration-300 group-hover:translate-x-0" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center p-2 text-brand-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-lightblue/50 shadow-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {["Home", "Menu", "Locations", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold tracking-wide text-brand-blue hover:text-brand-yellow transition-colors duration-300 uppercase py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-brand-blue font-bold shadow-md active:scale-95 transition-transform"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

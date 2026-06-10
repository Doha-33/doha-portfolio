import React from "react";
import { Sparkles, ArrowUp, Github, Linkedin, MessageSquareCode, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface FooterProps {
  activeSection: string;
}

export default function Footer({ activeSection }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850/80 pt-16 pb-12 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/[0.01] rounded-full blur-[90px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/[0.01] rounded-full blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column brand structures */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 border-b border-slate-200/40 dark:border-slate-850 pb-12">
          
          {/* Main title brand */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center gap-2 group mb-4"
            >
              <div className="w-20 h-20">
                {/* Light Mode Logo */}
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="block dark:hidden w-full h-full object-contain"
                />

                {/* Dark Mode Logo */}
                <img
                  src="/assets/logo-light.png"
                  alt="Logo"
                  className="hidden dark:block w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                {PERSONAL_INFO.name}
                <span className="text-violet-500">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm mb-6">
              {PERSONAL_INFO.shortBio} Combining pristine structural grids with high-performance animations.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono tracking-widest uppercase text-slate-405">
              <Sparkles className="w-3 h-3 text-violet-500 animate-pulse" />
              <span>Pixel-Perfect Design Grid</span>
            </div>
          </div>

          {/* Quick links map layout */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
              Index Coordinates
            </h4>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-center md:text-left">
              {[
                { id: "#hero", label: "Home" },
                { id: "#about", label: "About Bio" },
                { id: "#skills", label: "Skills Stack" },
                { id: "#services", label: "Services" },
                { id: "#projects", label: "Works" },
                { id: "#experience", label: "Journey" },
                { id: "#certificates", label: "Certificates" },
                { id: "#contact", label: "Connect" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="text-xs text-slate-505 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact coordinates quick shortcuts */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
              Social Nodes
            </h4>

            <div className="flex items-center gap-3.5 mb-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-3 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-300 hover:text-white dark:hover:text-slate-950 hover:bg-slate-900 dark:hover:bg-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                title="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-3 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-300 hover:text-white dark:hover:text-slate-950 hover:bg-slate-900 dark:hover:bg-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                title="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-3 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-300 hover:text-white dark:hover:text-slate-950 hover:bg-slate-900 dark:hover:bg-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                title="WhatsApp Direct Link"
              >
                <MessageSquareCode className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal font-light">
              Press the arrow to scroll and return to top coordinate grid index.
            </p>
          </div>

        </div>

        {/* Lower row copyright + returns to top FAB trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 font-light">
            <span>© {new Date().getFullYear()} Doha Dev. All rights reserved. Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>in Cairo, Egypt.</span>
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500/20 text-slate-600 dark:text-slate-405 hover:text-violet-600 dark:hover:text-violet-400 font-mono text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer pointer-events-auto"
            title="Sroll To Top Index"
          >
            <span>Top Coordinate</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

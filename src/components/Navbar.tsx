import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Sparkles, FolderDot } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { id: "#hero", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#services", label: "Services" },
  { id: "#projects", label: "Projects" },
  { id: "#experience", label: "Journey" },
  // { id: "#education", label: "Education" },
  { id: "#contact", label: "Contact" },
];

export default function Navbar({
  theme,
  toggleTheme,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleClickLink(e, "#hero")}
              className="flex items-center gap-2 group"
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
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {PERSONAL_INFO.name}
                <span className="text-violet-500">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/40 p-1 rounded-full border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id.substring(1);
                  return (
                    <a
                      key={link.id}
                      href={link.id}
                      onClick={(e) => handleClickLink(e, link.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 relative ${
                        isActive
                          ? "text-white"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full -z-10 shadow-md"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Theme Toggle & CTA */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/50 dark:hover:border-violet-400/50 transition-all duration-300 shadow-sm"
                  aria-label="Toggle visual theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-violet-600" />
                  )}
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleClickLink(e, "#contact")}
                  className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <span className="relative z-10">Hire Me</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 transition-transform duration-500" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Actions Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all"
                aria-label="Toggle theme mobile"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-violet-500 transition-all"
                aria-label="Open navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 md:hidden px-4 pb-6 pt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id.substring(1);
                return (
                  <a
                    key={link.id}
                    href={link.id}
                    onClick={(e) => handleClickLink(e, link.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    <FolderDot className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleClickLink(e, "#contact")}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-extrabold uppercase tracking-widest text-xs shadow-lg shadow-violet-500/20"
              >
                <Sparkles className="w-4 h-4" />
                Open Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

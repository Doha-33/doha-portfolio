import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Sparkles } from "lucide-react";

// Modular Component Imports
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const defaultDark = true; // Dark mode by default as requested

    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (defaultDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle Theme switching
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Monitor user Scroll offsets (for Reading Progress & Scroll To Top visibility)
  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll progress%
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // Scroll to Top visibility
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active section using Intersection Observer
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "services",
      "projects",
      "experience",
      "certificates",
      "testimonials",
      "blogs",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -60% 0px", // Trigger when element occupies central sweetspot
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isLoading]); // Recheck once Loader completes and elements render has bound on DOM

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. Loader screen popover */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-violet-500/20 selection:text-violet-500 relative flex flex-col justify-between">
          
          {/* Scroll progress Indicator Bar (fixed top) */}
          <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200 dark:bg-slate-900 z-50">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Sticky Header Nav */}
          <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

          {/* Core Content Layout Sections Grid */}
          <main className="flex-grow">
            {/* Hero Splash Page */}
            <Hero />

            {/* About & Achievements Column */}
            <About />

            {/* Skills & Tech Arsenal */}
            <Skills />

            {/* Services Solutions */}
            <Services />

            {/* Portfolio Case Studies Showcase */}
            <Projects />

            {/* Journey Timeline */}
            <Experience />

            {/* Professional Certifications */}
            {/* <Certificates /> */}

            {/* Dynamic Clientele Testimonials */}
            {/* <Testimonials /> */}

            {/* Blog previews */}
            {/* <Blogs /> */}

            {/* Connect / Contact */}
            <Contact />
          </main>

          {/* Brand footer details */}
          <Footer activeSection={activeSection} />

          {/* 4. Float Scroll-To-Top dynamic action button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 12 }}
                transition={{ duration: 0.25 }}
                type="button"
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-xl hover:shadow-violet-550/20 shadow-violet-500/10 cursor-pointer flex items-center justify-center border border-violet-500/20 active:scale-90 transition-all group"
                aria-label="Scroll back to index"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Extra ambient glass indicator representing custom AI Studio features */}
          <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md text-[10px] font-mono uppercase font-bold text-slate-500 shadow-lg pointer-events-none transition-opacity duration-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Interactive Space Mode</span>
          </div>

        </div>
      )}
    </>
  );
}

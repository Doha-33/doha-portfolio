import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, ArrowRight, CornerRightDown, Github, Linkedin, MessageSquareCode } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { FaChessQueen } from "react-icons/fa6";

const ROLES = ["Frontend Developer", "React.js & Next.js Specialist", "TypeScript Enthusiast", "UI/UX Innovator"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = ROLES[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole((prev) => prev.substring(0, prev.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole((prev) => currentFullRole.substring(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 md:left-24 w-72 h-72 rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-10 md:right-32 w-80 h-80 rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-600/10 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-cyan-500/5 dark:bg-cyan-600/5 blur-[90px]" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Header Text */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-200 dark:border-violet-900 bg-violet-50/65 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 font-mono text-xs uppercase tracking-wider mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Freelance & Dev Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
            >
              Hey, I'm <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-12 sm:h-16 flex items-center mb-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                A <span className="text-violet-600 dark:text-violet-400 border-r-2 border-violet-500 pr-1 animate-pulse">{displayedRole || "\u00A0"}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed mb-10"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg shadow-violet-500/20 active:scale-95 transition-all"
              >
                Hire Me Today
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("#projects")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-all active:scale-95 shadow-sm"
              >
                View Projects
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-5 mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 w-full justify-center lg:justify-start"
            >
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-violet-500 hover:scale-105 transition-all"
                title="WhatsApp Direct"
              >
                <MessageSquareCode className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Visual Profile Avatar Block */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Spinning tech border halos */}
              <div className="absolute inset-x-2 inset-y-2 rounded-3xl bg-gradient-to-tr from-violet-600 via-pink-500 to-cyan-400 opacity-20 dark:opacity-30 blur-md scale-105 animate-pulse" />
              <div className="absolute inset-0 rounded-3xl border border-dashed border-violet-500/40 dark:border-violet-400/30 animate-[spin_40s_linear_infinite]" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 group">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain grayscale-[25%] hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Floating Stats Glassmorphic Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 dark:border-slate-800/50 shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-widest">Specialty</p>
                      <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">Clean Code & SPA</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-widest">Speed</p>
                      <p className="text-sm font-extrabold text-emerald-500">99% PageScore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge elements */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Fast Loader</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-6 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg flex items-center gap-2"
              >
                <FaChessQueen />

                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tailwind Queen</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Prompt indicator */}
        <div className="flex justify-center mt-16 md:mt-24">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 group text-slate-400 dark:text-slate-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors pointer-events-auto"
            title="Read More"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Explore Bio</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <CornerRightDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}

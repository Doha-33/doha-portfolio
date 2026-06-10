import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Layers, Server, ShieldAlert, Sparkles } from "lucide-react";
import { SKILLS } from "../data";
import { LucideIcon } from "./LucideIcon";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "backend" | "tools" | "soft">("all");

  const filteredSkills = activeFilter === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeFilter);

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case "frontend": return "Client Interface Design";
      // case "backend": return "Server Core Basics";
      case "tools": return "Workspace Engineering Tools";
      case "soft": return "Human Cooperation Skills";
      default: return "Full Arsenal";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden text-slate-800 dark:text-slate-100"
    >
      {/* Background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-violet-600/[0.02] dark:bg-violet-600/[0.02] blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-600/[0.02] dark:bg-cyan-600/[0.02] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/80 dark:bg-violet-950/40 border border-violet-200/50 dark:border-violet-800/30 text-violet-600 dark:text-violet-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>02 . My Tech Stack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Skills & Software Arsenal
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A high-fidelity layout of my current engineering metrics, updated regularly based on production outcomes.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Tech", icon: Layers },
            { id: "frontend", label: "Frontend", icon: Award },
            // { id: "backend", label: "Backend Core", icon: Server },
            { id: "tools", label: "Tools & Workflows", icon: Sparkles },
            { id: "soft", label: "Professional Soft", icon: ShieldAlert },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Category Description Tag */}
        <div className="mb-6 flex justify-between items-center px-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono">
            {getCategoryTitle(activeFilter)}
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Count: {filteredSkills.length} tools
          </span>
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={skill.name}
                className="group relative bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-850/80 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:border-violet-500/20 dark:hover:border-violet-400/20 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 dark:bg-violet-400/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                      <LucideIcon name={skill.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-violet-600 dark:text-violet-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress track */}
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:from-violet-600 group-hover:to-cyan-400 transition-all"
                  />
                </div>

                {/* Extra micro labels */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-tight">
                  <span>Category: {skill.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-violet-500 dark:text-violet-400 font-bold">
                    Expertise
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical Highlights Bar */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/60 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
          
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
              Looking for a custom tech stack integration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              I constantly evaluate new library releases and standards. If your project coordinates demand custom tech (e.g. GraphQL, NextJS App Router, Prisma, WebSockets, or advanced D3 layouts) I can adapt rapidly.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-violet-600/10 hover:bg-violet-600 text-violet-600 dark:text-violet-400 hover:text-white dark:bg-violet-950/40 border border-violet-500/20 text-xs font-bold uppercase tracking-wider transition-all"
          >
            Inquire Tech Fit
          </a>
        </div>

      </div>
    </section>
  );
}

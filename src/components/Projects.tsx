import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderCode, Github, ExternalLink, Flame, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";

const CATEGORIES = ["All", "Dashboards", "E-Commerce", "Websites", "Web Apps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-600/[0.015] dark:bg-violet-600/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-fuchsia-600/[0.015] dark:bg-fuchsia-600/[0.02] rounded-full blur-[120px]" />

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
            <FolderCode className="w-3.5 h-3.5" />
            <span>04 . Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Finished Production Pieces
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Take a look through a filtered representation of web applications, platforms, and templates completed recently.
          </motion.p>
        </div>

        {/* Featured Slider Banner */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 px-1">
            <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono">
              Featured Innovations
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.filter(p => p.featured).slice(0, 2).map((feat, idx) => (
              <motion.div
                key={`feat-${feat.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/65 dark:border-slate-850 shadow-lg flex flex-col sm:flex-row h-full lg:min-h-[280px]"
              >
                {/* Featured indicator tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-400 text-[10px] font-mono tracking-widest uppercase font-bold border border-amber-400/20 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Case Study</span>
                </div>

                {/* Left image column */}
                <div className="sm:w-1/2 relative overflow-hidden h-48 sm:h-auto min-h-[220px]">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/5 transition-colors duration-500" />
                </div>

                {/* Right text info column */}
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                      {feat.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1 mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-4">
                      {feat.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {feat.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9px] font-mono font-bold text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                      {feat.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-850 text-[9px] font-mono text-slate-400">
                          +{feat.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={feat.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code Repo
                      </a>
                      <a
                        href={feat.demoUrl}
                        className="flex items-center gap-1.5 text-[11px] font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Spec
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Filter controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-20/40 dark:border-slate-900 pb-6">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/10"
                  : "bg-white text-slate-600 border border-slate-200/70 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Rearranging Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-850 shadow-md hover:shadow-2xl hover:border-violet-500/20 dark:hover:border-violet-400/20 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Top dynamic img */}
                <div className="relative overflow-hidden h-48 sm:h-52 z-0 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                  />
                  {/* Subtle black overlay to make absolute text pop if needed */}
                  <div className="absolute inset-0 bg-slate-950/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Absolute visual float type tag */}
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-100 dark:border-slate-800 text-[9px] font-bold font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Bottom info section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1.5 mb-5 select-none">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-0.5.5 rounded-md bg-slate-50 dark:bg-slate-850 border border-slate-150/40 dark:border-slate-800/60 text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-1 text-[11px] font-bold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-fuchsia-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Launch Preview
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

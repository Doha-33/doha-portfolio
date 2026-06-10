import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { History, Briefcase, GraduationCap, Calendar, ChevronRight, CornerDownRight } from "lucide-react";
import { TIMELINE } from "../data";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  const filteredTimeline = activeTab === "all"
    ? TIMELINE
    : TIMELINE.filter(item => item.type === activeTab);

  return (
    <section
      // id="experience"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-violet-500/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-500/[0.02] rounded-full blur-[100px]" />

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
            <History className="w-3.5 h-3.5" />
            <span>05 . Professional Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Experience & Education Timeline
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A chronological timeline detailing university courses, bootcamps, and professional software engineering assignments.
          </motion.p>
        </div>

        {/* Dynamic sub-category buttons */}
        <div className="flex justify-center gap-2 mb-16">
          {[
            { id: "all", label: "Full Journey", icon: History },
            { id: "experience", label: "Work Experience", icon: Briefcase },
            { id: "education", label: "Education & Bootcamps", icon: GraduationCap },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Visual Timeline Lane */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central rod */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 sm:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                const isWork = item.type === "experience";
                
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`journey-node-${item.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className={`flex flex-col sm:flex-row relative ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual dot on vertical rail */}
                    <div className="absolute left-6 sm:left-1/2 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-violet-500 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                      {isWork ? (
                        <Briefcase className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                      ) : (
                        <GraduationCap className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                      )}
                    </div>

                    {/* Empty block to push layout to alternate sides */}
                    <div className="w-full sm:w-1/2 hidden sm:block px-8" />

                    {/* Timeline Box Card */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                      <div className="group relative bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-100 dark:border-slate-850 hover:border-violet-500/20 dark:hover:border-violet-400/20 shadow-md hover:shadow-xl transition-all duration-300">
                        {/* Interactive floating indicator */}
                        <div className="absolute top-6 right-6 font-mono text-[9px] p-1 px-2.5 rounded-lg bg-orange-500/10 text-orange-500 dark:bg-amber-400/10 dark:text-amber-400 border border-orange-500/20 uppercase tracking-widest leading-none font-bold">
                          {item.type}
                        </div>

                        {/* Date badge info */}
                        <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.years}</span>
                        </div>

                        {/* Job Roles / Degrees */}
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-100 mb-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {item.role}
                        </h3>

                        <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          {item.company}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-4">
                          {item.description}
                        </p>

                        {/* Bullet achievements if available */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-2 mt-4 pt-4 border-t border-slate-150 dark:border-slate-800/80">
                            {item.highlights.map((bullet, idx) => (
                              <div key={idx} className="flex gap-2.5 items-start">
                                <CornerDownRight className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

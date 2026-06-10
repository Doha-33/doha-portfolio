import { motion } from "motion/react";
import { Sparkles, Terminal } from "lucide-react";
import { SERVICES } from "../data";
import { LucideIcon } from "./LucideIcon";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic graphic shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-400/[0.03] dark:bg-cyan-600/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-400/[0.03] dark:bg-violet-600/[0.03] rounded-full blur-[120px]" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 . My Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Sleek Frontend Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Combining extreme layouts with lightning-fast speeds to scale user engagement metrics.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-md hover:shadow-2xl hover:border-violet-500/20 dark:hover:border-violet-400/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px]"
            >
              {/* Inner glowing hover backer */}
              <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-gradient-to-b from-violet-600 to-fuchsia-500 transition-all duration-350" />
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-violet-600/[0.01] rounded-tl-full translate-x-12 translate-y-12 group-hover:scale-105 group-hover:bg-violet-500/5 transition-all duration-300" />

              <div>
                {/* Header Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 shadow-sm border border-slate-150 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                </div>

                {/* Info titles */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-4">
                  {service.description}
                </p>
              </div>

              {/* Read metadata indicator */}
              <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                <Terminal className="w-3.5 h-3.5" />
                <span>Standard Specs Set</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Section for Custom development */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mb-4">
            Need a custom package that crosses multiple service definitions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-violet-600 dark:hover:bg-violet-400 transition-colors shadow-md"
          >
            Construct Project Formula
          </a>
        </div>

      </div>
    </section>
  );
}

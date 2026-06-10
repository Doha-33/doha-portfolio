import { motion } from "motion/react";
import { User, Mail, MapPin, GraduationCap, Sparkles, MessageCircleCode } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../data";
import { LucideIcon } from "./LucideIcon";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-400/[0.03] dark:bg-fuchsia-600/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-400/[0.04] dark:bg-violet-600/[0.04] rounded-full blur-[120px]" />

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
            <User className="w-3.5 h-3.5" />
            <span>01 . About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            My Mission & Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Bridging the gap between robust software engineering principles and visually breathtaking design details.
          </motion.p>
        </div>

        {/* Bio & Short info grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Life Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-500" />
                Who is Doha?
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6 text-sm sm:text-base">
                I spent the last 2 years refining my expertise in component workflows. Doing so has allowed me to build real-world software templates that client teams trust. Whether it's crafting user profiles, styling dashboards with dynamic responsive structures, or ensuring codebases remain pristine with strict typing systems, I prioritize modularity.
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                My goal is always on high speed and visual alignment. I love using Tailwind CSS alongside modern frameworks to build modular design layers. I value open-source cooperation, clean layouts, and creating accessible code pathways that comply with global UI benchmarks.
              </p>
            </div>

            {/* Quick Profile Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <Mail className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Direct</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-500 truncate block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <MapPin className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Coordinates</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <GraduationCap className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Education Degree</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                    B.Sc. in Computer Science
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <MessageCircleCode className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">WhatsApp</p>
                  <a href={PERSONAL_INFO.whatsapp} target="_blank" referrerPolicy="no-referrer" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-500">
                    Chat with Doha
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Highlights right bento panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-inner"
          >
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
              Why hire me for your team?
            </h4>
            
            <ul className="space-y-4">
              {[
                {
                  title: "High Performance First",
                  desc: "I benchmark layout rendering & bundle dimensions endlessly to secure outstanding performance."
                },
                {
                  title: "Strict Type Alignment",
                  desc: "Ensuring zero arbitrary 'any' tags inside state payloads to avoid runtime UI degradation."
                },
                {
                  title: "Aesthetic Core Eye",
                  desc: "I understand design grids, spacing hierarchies, and fluid animations directly."
                },
                {
                  title: "Cooperative Work Ethic",
                  desc: "Highly available on Slack/Teams/WhatsApp, providing transparent daily branch updates."
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/15 dark:bg-violet-400/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* STATS BENTO GRID - Achievements Counters (Section 11) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-7 rounded-2xl border border-slate-100 dark:border-slate-850/80 shadow-md hover:shadow-xl dark:hover:shadow-violet-950/5 hover:-translate-y-1 hover:border-violet-500/20 dark:hover:border-violet-400/20 transition-all duration-300"
            >
              {/* Card visual glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:scale-110 group-hover:bg-violet-500/10 transition-all duration-300" />
              
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:text-violet-500 group-hover:bg-violet-50 dark:group-hover:bg-violet-950/30 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                  <LucideIcon name={stat.iconName} className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xl font-extrabold text-violet-500">
                  {stat.suffix}
                </span>
              </div>
              
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                {stat.label}
              </h4>
              
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

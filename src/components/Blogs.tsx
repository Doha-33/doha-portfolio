import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRightCircle } from "lucide-react";
import { BLOGS } from "../data";

export default function Blogs() {
  return (
    <section
      // id="blogs"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/[0.012] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/[0.012] rounded-full blur-[100px]" />

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
            <BookOpen className="w-3.5 h-3.5" />
            <span>08 . Tech Publications</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Latest Technical Writing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Sharing workflows, optimization blueprints, and layout engineering logs with the global developer community.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-850 shadow-md hover:shadow-2xl hover:border-violet-500/20 dark:hover:border-violet-400/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card visual img with absolute category tag */}
              <div className="relative overflow-hidden h-48 sm:h-52 z-0 shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Category tag absolutely */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[9px] font-bold font-mono tracking-wider uppercase text-violet-400 shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Card content text body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Date & readLength Metadata */}
                  <div className="flex gap-4 items-center text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-violet-500" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                {/* Read Full Article CTAs line */}
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                    Article Overview
                  </span>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
                  >
                    Read Article
                    <ArrowRightCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Global Medium / GitHub link preview */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mb-4">
            Follow my writing directly on dev.to or Medium.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600/10 hover:bg-violet-600 text-violet-600 dark:text-violet-400 dark:hover:text-white dark:bg-violet-950/40 border border-violet-500/20 text-xs font-bold uppercase tracking-wider transition-all"
          >
            Visit Doha on DeV.To
          </a>
        </div>

      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleDotClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const current = TESTIMONIALS[index];

  // Sliding transitions values
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
    }),
  };

  return (
    <section
      // id="testimonials"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/[0.015] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/[0.015] rounded-full blur-[100px]" />

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
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>07 . Client Reviews</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Trusted Worldwide
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Reviews and reflections from software engineering executives, brand founders, and creative directors.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          
          {/* Main review box */}
          <div className="relative min-h-[340px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-inner relative"
              >
                {/* Floating quote watermark marker */}
                <span className="absolute top-6 right-8 text-8xl font-black font-serif text-slate-200/40 dark:text-slate-800/30 select-none leading-none pointer-events-none">
                  “
                </span>

                {/* Rating layout */}
                <div className="flex items-center gap-1.5 mb-6 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current shrink-0" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-1.5 font-mono">
                    ({current.rating}.0 Rating)
                  </span>
                </div>

                {/* Review Narrative */}
                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-350 leading-relaxed font-light italic mb-8 relative z-10">
                  "{current.content}"
                </p>

                {/* Account Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden border-2 border-white dark:border-slate-800 shrink-0">
                    <img
                      src={current.image}
                      alt={current.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {current.role} at <span className="font-semibold text-violet-500">{current.company}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side arrow controls (Desktop style) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 left-0 sm:-left-4 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white text-slate-650 dark:text-slate-400 shadow-md transition-all active:scale-90"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 right-0 sm:-right-4 -translate-y-1/2 p-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white text-slate-650 dark:text-slate-400 shadow-md transition-all active:scale-90"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom paginating indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => {
              const active = idx === index;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-350 ${
                    active
                      ? "w-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-sm"
                      : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

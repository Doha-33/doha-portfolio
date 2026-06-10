import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Eye, X, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { CERTIFICATES } from "../data";
import { Certificate } from "../types";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      // id="certificates"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/[0.01] rounded-full blur-[90px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-fuchsia-600/[0.01] rounded-full blur-[90px]" />

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
            <span>06 . Qualifications</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Professional Certificates
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A sample of industry-backed certificates and training paths completed to secure advanced technical proficiency.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-850 shadow-md hover:shadow-2xl hover:border-violet-500/20 dark:hover:border-violet-400/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card visual img with overlay eye key */}
              <div className="relative overflow-hidden h-48 sm:h-52 z-0 shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Visual glass overlay showing on Hover only */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="p-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95 transition-all shadow-lg"
                    title="Zoom Certificate"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Card Info content details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase text-violet-600 dark:text-violet-400 font-bold tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-6">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 flex items-center gap-1 hover:text-violet-800 dark:hover:text-light-purple transition-all"
                  >
                    Inspect Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL ZOOM PREVIEW PORTAL (interactive popover layer) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-955/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal main box */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/85 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button absolute top */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-40 p-2 text-slate-500 dark:text-slate-400 bg-slate-100 hover:bg-violet-600 hover:text-white dark:bg-slate-800 dark:hover:bg-violet-600 transition-all rounded-full shadow-md"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                {/* Visual representation */}
                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800 max-h-[380px] w-full bg-slate-100">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>

                {/* Information sidebar inside popover */}
                <div className="md:col-span-5 flex flex-col justify-between h-full pt-1">
                  <div>
                    <span className="p-1 px-3 rounded-full bg-violet-600/10 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 border border-violet-500/20 text-[9px] font-mono tracking-widest font-extrabold uppercase">
                      Verified Credentials
                    </span>

                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-4 mb-2 leading-tight">
                      {selectedCert.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mb-6">
                      Issued by <span className="font-bold text-slate-700 dark:text-slate-300">{selectedCert.issuer}</span> on <span className="font-semibold text-slate-700 dark:text-slate-300">{selectedCert.date}</span>. This certificate covers production-ready frontend principles, standards-aligned layouts, browser optimization metrics, and typing layers.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href={selectedCert.credentialUrl}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Link
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-dashed dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

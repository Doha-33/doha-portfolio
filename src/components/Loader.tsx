import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stageStr, setStageStr] = useState("Initializing workspace...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) {
      setStageStr("Assembling interface components...");
    } else if (progress < 50) {
      setStageStr("Compiling interactive visual blocks...");
    } else if (progress < 75) {
      setStageStr("Injecting premium fluid assets...");
    } else if (progress < 95) {
      setStageStr("Refining responsiveness...");
    } else {
      setStageStr("Welcome to Doha's Portfolio!");
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      id="loader-layer"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center px-4 max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 p-4 bg-slate-900/60 rounded-2xl border border-slate-800 backdrop-blur-md flex items-center justify-center shadow-lg shadow-violet-500/5"
        >
          <Terminal className="w-12 h-12 text-violet-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          DOHA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-xs font-mono tracking-widest uppercase mb-12 text-slate-400"
        >
          Portfolio Experience
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 mb-4 p-[1px]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Progress Metrics */}
        <div className="w-full flex justify-between items-center px-1 font-mono text-xs">
          <span className="text-slate-500 transition-all duration-300">
            {stageStr}
          </span>
          <span className="text-violet-400 font-bold">
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

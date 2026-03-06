import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const systemLines = [
    "Initializing system...",
    "Loading neural modules...",
    "Connecting to data network...",
    "Training AI models...",
    "Optimizing portfolio experience...",
    "Access Granted",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < systemLines.length - 1) return prev + 1;
        clearInterval(textInterval);
        return prev;
      });
    }, 200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return 100;
      });
    }, 20);

    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1000);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 3500);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const ringVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: { duration: 5, ease: "linear", repeat: Infinity },
    },
  };

  const reverseRingVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: -360,
      transition: { duration: 7, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-linen-100 flex items-center justify-center overflow-hidden font-mono"
    >
      {/* Subtle warm grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,87,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,87,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Soft warm background blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">

        {/* Central HUD / Profile Core */}
        <div className="relative w-96 h-96 mb-8 flex items-center justify-center">

          {/* Central Image */}
          <motion.div
            className="absolute w-52 h-52 rounded-full overflow-hidden border-4 border-linen-50 shadow-2xl shadow-primary-200/50 z-20 bg-linen-200"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/preloder.jpeg"
              alt="Ganesh Beldar"
              className="w-full h-full object-cover"
            />
            {/* Warm scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(217,119,87,0.05)_50%)] bg-[size:4px_4px] pointer-events-none"></div>
          </motion.div>

          {/* Outer coral ring */}
          <motion.div
            className="absolute w-64 h-64 border-2 border-primary-400/40 rounded-full border-t-primary-500"
            variants={ringVariants}
            initial="initial"
            animate="animate"
          />

          {/* Inner linen ring */}
          <motion.div
            className="absolute w-72 h-72 border border-linen-400/50 rounded-full border-b-primary-400/60"
            variants={reverseRingVariants}
            initial="initial"
            animate="animate"
          />

          {/* Outer dashed ring */}
          <motion.div
            className="absolute w-80 h-80 border border-dashed border-primary-300/20 rounded-full"
            animate={{ rotate: 180 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Radar sweep */}
          <motion.div
            className="absolute w-full h-full rounded-full bg-gradient-to-t from-transparent via-primary-400/8 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3 + i * 1.5, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
            >
              <div className="w-2 h-2 bg-primary-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(217,119,87,0.8)]"></div>
            </motion.div>
          ))}
        </div>

        {/* System status text */}
        <div className="h-8 mb-4">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-primary-600 text-sm tracking-widest uppercase font-bold font-mono"
          >
            {">"} {systemLines[textIndex]}
          </motion.p>
        </div>

        {/* Name reveal */}
        <div className="h-16 flex items-center justify-center mb-8 relative">
          <AnimatePresence>
            {showName && (
              <motion.h1
                className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-700 tracking-wide relative z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Ganesh Bhaktaraj Beldar
                {/* Subtle warm glow */}
                <div className="absolute inset-0 bg-primary-300/20 blur-2xl -z-10 opacity-60"></div>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-1 bg-linen-300 rounded-full overflow-hidden border border-linen-300">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 shadow-[0_0_12px_rgba(217,119,87,0.6)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <div className="mt-2 text-primary-500 text-xs font-mono flex justify-between w-64 md:w-96">
          <span>LOADING_PORTFOLIO</span>
          <span>{progress}%</span>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;

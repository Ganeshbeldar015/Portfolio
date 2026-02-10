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
    // 1. Text Cycle Logic - Fast reading speed
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < systemLines.length - 1) return prev + 1;
        clearInterval(textInterval);
        return prev;
      });
    }, 200); // 200ms * 6 lines = ~1.2s

    // 2. Progress Bar Logic - Fast loading (2 seconds total)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return 100;
      });
    }, 20); // 20ms * 100 = 2s

    // 3. Name Reveal - delayed start
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1000); // Show name after 1 second

    // 4. Completion/Exit Trigger
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for exit animation to finish
    }, 3500); // Total duration ~3.5s to include exit animation



    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0, 
      scale: 1.5, 
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" } 
    },
  };

  const centerDotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1, 15], 
      opacity: [0, 1, 0],
      transition: { duration: 1.5, times: [0, 0.2, 1] } 
    }
  };

  const ringVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 360,
      transition: { duration: 4, ease: "linear", repeat: Infinity } 
    }
  };

  const reverseRingVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: -360,
      transition: { duration: 5, ease: "linear", repeat: Infinity } 
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  if (isExiting) {
     // We let the AnimatePresence in App.jsx handle the actual unmounting, 
     // but we can also trigger internal exit states here if needed.
     // For now, we'll rely on the parent to unmount this component based on onComplete,
     // or we use the 'exit' prop if we are wrapped in AnimatePresence.
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-cream-50 dark:bg-dark-900 flex items-center justify-center overflow-hidden font-mono"
    >
      {/* Background Grid/Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(131,173,123,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(131,173,123,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        
        {/* Central HUD / Reactor Core */}
        <div className="relative w-96 h-96 mb-8 flex items-center justify-center">
            {/* Core Glow */}
            <motion.div 
               className="absolute w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_20px_10px_rgba(131,173,123,0.6)]"
               variants={centerDotVariants}
               initial="initial"
               animate="animate"
            />
            
            {/* Central Image */}
             <motion.div
              className="absolute w-56 h-56 rounded-full overflow-hidden border-2 border-primary-500/50 shadow-[0_0_30px_rgba(131,173,123,0.4)] z-20 bg-cream-100 dark:bg-dark-800"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              <img 
                src="/images/preloder.jpeg" 
                alt="Admin" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(131,173,123,0.1)_50%)] bg-[size:4px_4px] pointer-events-none"></div>
            </motion.div>

            {/* Spinning Rings */}
            <motion.div 
              className="absolute w-64 h-64 border-2 border-primary-500/30 rounded-full border-t-primary-500"
              variants={ringVariants}
              initial="initial"
              animate="animate"
            />
            <motion.div 
              className="absolute w-72 h-72 border border-secondary-500/20 rounded-full border-b-secondary-500 dashed"
              variants={reverseRingVariants}
              initial="initial"
              animate="animate"
            />
             <motion.div 
              className="absolute w-80 h-80 border border-dashed border-primary-500/10 rounded-full opacity-50"
              animate={{ rotate: 180 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

             {/* Scanning Radar */}
             <motion.div 
               className="absolute w-full h-full rounded-full bg-gradient-to-t from-transparent via-primary-500/10 to-transparent opacity-30"
               animate={{ rotate: 360 }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Particles Orbiting - Simulated with divs */}
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                >
                    <div className="w-2 h-2 bg-secondary-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#dafa20]"></div>
                </motion.div>
             ))}
        </div>

        {/* System Text */}
        <div className="h-8 mb-4">
             <motion.p 
                key={textIndex} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-primary-600 dark:text-primary-400 text-sm tracking-widest uppercase font-bold"
             >
                {">"} {systemLines[textIndex]}
             </motion.p>
        </div>

        {/* Name Reveal with Glitch Effect */}
        <div className="h-16 flex items-center justify-center mb-8 relative">
          <AnimatePresence>
            {showName && (
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 tracking-wider relative z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Ganesh Bhaktaraj Beldar
                {/* Glitch Overlay */}
                <span className="absolute inset-0 text-primary-300 opacity-30 translate-x-[2px] animate-pulse pointer-events-none">Ganesh Bhaktaraj Beldar</span>
                <div className="absolute inset-0 bg-primary-400/20 blur-xl -z-10 opacity-50"></div>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Loading Bar */}
        <div className="w-64 md:w-96 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative border border-gray-300 dark:border-gray-700">
            <motion.div 
               className="h-full bg-primary-500 shadow-[0_0_15px_rgba(131,173,123,0.8)]"
               initial={{ width: "0%" }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "linear", duration: 0.1 }}
            />
        </div>
        <div className="mt-2 text-primary-600 dark:text-primary-400 text-xs font-mono flex justify-between w-64 md:w-96">
            <span>SYSTEM_READY</span>
            <span>{progress}%</span>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;

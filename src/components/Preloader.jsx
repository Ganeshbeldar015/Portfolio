
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter animation logic
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20); // Takes ~2 seconds to reach 100

    // Delay exit to ensure counter finishes and user sees 100%
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-12 bg-[#1C1917] text-[#e8ede4]"
        >
          {/* Top Section */}
          <div className="flex justify-between items-start w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display font-medium text-lg md:text-xl tracking-wide"
            >
              PORTFOLIO &copy; 2026
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display font-medium text-lg md:text-xl tracking-wide text-right hidden md:block"
            >
              CREATIVE DEVELOPER
            </motion.div>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[15vw] md:text-[12vw] font-bold font-display leading-none text-[#789516]"
            >
              {counter}%
            </motion.h1>
          </div>

          {/* Bottom Section */}
          <div className="w-full">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold font-display tracking-tighter uppercase text-center md:text-left"
              >
                GANESH BELDAR
              </motion.h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

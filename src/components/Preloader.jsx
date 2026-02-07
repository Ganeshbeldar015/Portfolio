import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-dark-900"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              Ganesh Beldar
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm typewriter">
              Loading Awesome Portfolio...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

import React from "react";
import { motion } from "framer-motion";

const FloatingCard = ({ icon, title, subtitle, className, delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute flex items-center gap-3 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-primary-100 dark:border-primary-900/30 ${className}`}
    >
      <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-700 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-accent-500 dark:text-accent-400 uppercase tracking-wider">
          {title}
        </p>
        <p className="text-sm font-bold text-accent-900 dark:text-cream-50">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default FloatingCard;

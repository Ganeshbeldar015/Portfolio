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
      className={`absolute flex items-center gap-3 bg-linen-50/95 dark:bg-dark-800/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-linen-200 dark:border-dark-700 ${className}`}
    >
      <div className="p-2 bg-primary-100 dark:bg-primary-900/40 rounded-lg text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-claude-500 dark:text-claude-400 uppercase tracking-wider">
          {title}
        </p>
        <p className="text-sm font-bold text-claude-900 dark:text-linen-100">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default FloatingCard;

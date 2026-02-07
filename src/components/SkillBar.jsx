import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-slate-700 dark:text-slate-300">{skill}</span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-2.5 rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;

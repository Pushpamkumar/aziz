import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon, index }) => {
  return (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img src={icon} alt={name} className="w-6 h-6 mr-2" />
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{name}</span>
        </div>
        <span className="text-sm font-medium text-primary-600 dark:text-accent-950 opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 bg-slate-200 dark:bg-primary-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-950 rounded-full relative group-hover:animate-pulse"
        />
      </div>
    </div>
  );
};

export default SkillBar;
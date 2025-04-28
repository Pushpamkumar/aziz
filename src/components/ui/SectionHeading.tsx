import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-primary-800 dark:text-white mb-2"
      >
        <span className="inline-block relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-950 rounded-full"></span>
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
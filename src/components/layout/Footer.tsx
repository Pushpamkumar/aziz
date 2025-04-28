import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-primary-950 border-t border-slate-200 dark:border-primary-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-display font-bold text-primary-800 dark:text-white"
            >
              Abdul Aziz Khan
            </motion.div>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Data-Driven Innovator & Machine Learning Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <motion.a
              href="https://github.com/ABDUL223344"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdulzizkhan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:abdulazizkhan726@gmail.com"
              whileHover={{ y: -5 }}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-primary-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center">
            <span>&copy; {currentYear} Abdul Aziz Khan. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="mx-1 w-4 h-4 text-red-500" /> by Abdul Aziz Khan
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
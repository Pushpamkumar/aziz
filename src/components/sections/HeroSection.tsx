import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// TypeWriter effect hook
const useTypewriter = (texts: string[], typingSpeed = 150, deletingSpeed = 50, delayBetween = 2000) => {
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [textIndex, setTextIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    // Handle text completion or deletion
    if (!isDeleting && count === texts[textIndex].length) {
      // Text is complete, wait before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && count === 0) {
      // Text is deleted, move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Handle typing or deleting
      timer = setTimeout(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setCurrentText(texts[textIndex].substring(0, count));
        setCount((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [count, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween]);

  return currentText;
};

const HeroSection: React.FC = () => {
  const typewriterText = useTypewriter([
    "Crafting Scalable Data Solutions...",
    "Transforming Data into Insight...",
    "Fueling innovation with AI..."
  ], 100, 50, 3000);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-950 dark:text-white leading-tight"
        >
          Hi, I'm Abdul Aziz Khan
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 mb-6"
        >
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300">
            Data-Driven Innovator | Machine Learning Enthusiast | Future Tech Leader
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-8 text-primary-600 dark:text-accent-950 text-xl font-medium mt-2 mb-8"
        >
          {typewriterText}
          <span className="animate-pulse">|</span>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-primary-600 text-white font-medium shadow-md hover:bg-primary-700 transition-colors"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border-2 border-primary-600 dark:border-accent-950 text-primary-600 dark:text-accent-950 font-medium hover:bg-primary-600/10 dark:hover:bg-accent-950/10 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <ChevronDown size={32} className="text-primary-600 dark:text-accent-950" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
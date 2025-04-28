import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    scrolled
      ? 'py-3 backdrop-blur-md bg-white/80 dark:bg-primary-950/80 shadow-lg'
      : 'py-5 bg-transparent'
  }`;

  return (
    <header className={navbarClasses}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-display font-bold text-primary-800 dark:text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
            >
              <span>AAK</span>
              <span className="ml-2.5">PORTFOLIO</span>
          
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={link.href}
                  className="text-slate-800 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-950 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-primary-900 text-primary-800 dark:text-accent-950 hover:bg-slate-200 dark:hover:bg-primary-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-primary-900 text-primary-800 dark:text-accent-950"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-primary-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-primary-950 shadow-xl"
        >
          <ul className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-slate-800 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
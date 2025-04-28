import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, Clock, Zap, BarChart2, Code, Cpu, Table  } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  technologies: string[];
}

const CertificationsSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'DATA ANALYSIS WITH TABLEAU',
      issuer: 'Coursera',
      date: 'November 2024',
      credential: 'https://coursera.org/verify/R120VHWMW8A0',
      description: 'Mastered advanced data visualization techniques, dashboard creation, and business intelligence reporting using Tableau. Developed skills in data blending, calculations, and interactive analytics.',
      icon: <BarChart2 className="text-white" size={18} />,
      color: 'bg-blue-600',
      image: 'src/components/sections/photo_6080140182109144380_y.jpg',
      technologies: ['Tableau Desktop', 'Data Visualization', 'Dashboard Design', 'Data Blending']
    },
    {
      id: 2,
      title: 'R Programming',
      issuer: 'Coursera',
      date: 'January 2024',
      credential: 'https://coursera.org/verify/SR3ZMKYRBUNG',
      description: 'Gained proficiency in statistical computing, data manipulation, and visualization using R. Learned to create reproducible research with R Markdown and implement statistical models.',
      icon: <Code className="text-white" size={18} />,
      color: 'bg-purple-600',
      image: 'src/components/sections/photo_6080140182109144381_y.jpg',
      technologies: ['R Programming', 'RStudio', 'ggplot2', 'dplyr', 'R Markdown']
    },
    {
      id: 3,
      title: 'Excel Skills for Business Specialization',
      issuer: 'Coursera',
      date: 'March 2023',
      credential: 'https://coursera.org/verify/specialization/58Z4DEQQCET2',
      description: 'It is a four-course series that teaches essential Excel skills for business analytics, reporting, and data management. It covers formulas, pivot tables, data visualization, and advanced functions, with hands-on projects to boost productivity. Ideal for professionals looking to master Excel for business and finance roles.',
      icon: <Table className="text-white" size={18} />,
      color: 'bg-green-600',
      image: 'src/components/sections/photo_6082379578057279366_y.jpg',
      technologies: ['Excel', 'Power Query', 'Data Validation', 'Conditional Formatting', 'Dashboards']
    },
    {
      id: 4,
      title: 'C for Everyone: Programming Fundamentals',
      issuer: 'Coursera',
      date: 'April 2023',
      credential: 'https://coursera.org/verify/8YGKWWRB3RLP',
      description: 'Acquired core programming concepts including memory management, pointers, algorithms, and data structures. Built foundational skills for system programming and low-level development.',
      icon: <Cpu className="text-white" size={18} />,
      color: 'bg-red-600',
      image: 'src/components/sections/photo_6080140182109144382_y.jpg',
      technologies: ['C Language', 'Pointers', 'Data Structures', 'Algorithms', 'Memory Management']
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-950/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <SectionHeading
          title="Certifications"
          subtitle="Validated expertise across data analysis and programming domains"
        />

        {/* Timeline Navigation */}
        <div className="relative mt-16 mb-8">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2"></div>
          
          <div className="relative flex overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex mx-auto space-x-12 px-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.span 
                    className={`text-xs font-medium mb-2 ${
                      activeIndex === index ? 'text-primary-600 dark:text-accent-400' : 'text-slate-600 dark:text-slate-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.date.split(' ')[1]}
                  </motion.span>
                  
                  <div className="relative mb-4">
                    <motion.div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${cert.color} ${
                        activeIndex === index ? 'ring-3 ring-offset-2 ring-primary-500/30 dark:ring-accent-400/30 scale-110 shadow-lg' : 'scale-100 hover:scale-105 shadow-md'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {cert.icon}
                      {activeIndex === index && (
                        <motion.div 
                          className="absolute -bottom-1 -right-1 bg-primary-600 dark:bg-accent-400 rounded-full p-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.span 
                    className={`text-[11px] font-medium mt-6 text-center ${
                      activeIndex === index ? 'text-primary-800 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.issuer.split(' ')[0]}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Single Active Certificate Tile */}
        <div className="flex justify-center">
          <motion.div
            key={certificates[activeIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-primary-800/30 p-6 rounded-xl shadow-md border border-slate-200 dark:border-primary-700 w-full max-w-4xl"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${certificates[activeIndex].color} text-white`}>
                    {certificates[activeIndex].icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-800 dark:text-white">{certificates[activeIndex].title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {certificates[activeIndex].issuer} • {certificates[activeIndex].date}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {certificates[activeIndex].technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-slate-100 dark:bg-primary-700 rounded-full text-slate-700 dark:text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {certificates[activeIndex].description}
                </p>
                
                <a 
                  href={certificates[activeIndex].credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 dark:text-accent-400 hover:underline"
                >
                  View Credential <ChevronRight className="ml-1" size={14} />
                </a>
              </div>
              
              {/* Certificate Image - Now larger and properly aligned */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative w-full h-64 lg:h-72 rounded-md overflow-hidden border border-slate-200 dark:border-primary-700 bg-slate-100 dark:bg-primary-900">
                  <img 
                    src={certificates[activeIndex].image} 
                    alt={`${certificates[activeIndex].title} Certificate`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expanded Next Goal Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-primary-800/50 border border-slate-200 dark:border-primary-700/50 shadow-sm">
            <div className="p-3 rounded-md bg-primary-600/10 dark:bg-accent-400/10 text-primary-600 dark:text-accent-400">
              <Shield size={20} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-primary-600 dark:text-accent-400">NEXT LEARNING GOAL:</span>
                </div>
                <span className="text-base font-semibold text-primary-800 dark:text-white">Python for Data Science, AI & Development</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-slate-500 dark:text-slate-400" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">Target: August 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap size={14} className="text-slate-500 dark:text-slate-400" />
                  <span className="text-xs text-slate-600 dark:text-slate-300">Skills: Python, NumPy, Pandas, Scikit-learn</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              It is a beginner-friendly course teaching Python fundamentals for data analysis, AI, and software development. It covers key libraries like Pandas, NumPy, and data visualization tools. Hands-on labs help learners apply skills in real-world scenarios.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;
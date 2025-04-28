import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, BookOpen, Award, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useTheme } from '../../contexts/ThemeContext';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    startDate: '2022',
    endDate: '2026',
    location: 'Punjab, India',
    description: 'Specialized in Machine Learning and Data Analytics with a focus on developing skills in programming, statistical analysis, and AI to build data-driven solutions for the future.',
    gpa: '7.3/10',
    achievements: [
      'Published research paper on universal translation earbuds for travelers',
      'Led a team of 4 in developing ML models',
      '3rd runner-up in university-level hackathon'
    ]
  },
  {
    institution: 'Saraswati Devi Public School',
    degree: 'Intermediate',
    field: 'Science',
    startDate: '2021',
    endDate: '2022',
    location: 'WB, India',
    description: 'Core coursework included Physics, Chemistry, Mathematics, and Biology. Developed strong analytical and problem-solving skills through rigorous coursework. Active member of the Science Club and participated in various academic competitions.',
    gpa: '85%',
    achievements: [
      'Successfully completed multiple science projects',
      'Mentored junior students in Mathematics and Physics',
      'Became Wise Captain of the school house, leading and organizing house activities'
    ]
  },
  {
    institution: 'Kendriya Vidyalaya B.S.F Krishnanagar',
    degree: 'Matriculation',
    field: 'Science',
    startDate: '2019',
    endDate: '2020',
    location: 'WB, India',
    description: 'Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science. Gained foundational knowledge in basic programming and problem-solving. Actively participated in school-level academic events and developed an interest in technology.',
    gpa: '76%',
    achievements: [
      'Participated in inter-school science competitions',
      'School topper in Computer Science',
      'Led school\'s computer club'
    ]
  },
];

const EducationSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="education" className="py-20 bg-white dark:bg-primary-950 relative overflow-hidden">
      {/* 3D Background Elements */}
      <motion.div 
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-950/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute -left-40 bottom-10 w-80 h-80 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-950/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and qualifications"
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline - Now with 3D cards */}
            <div className="w-full lg:w-1/3 space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative cursor-pointer group perspective-1000 ${activeIndex === index ? 'z-10' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className={`p-6 rounded-xl shadow-lg transition-all duration-300 ease-out ${
                      activeIndex === index
                        ? 'bg-gradient-to-br from-primary-500/20 to-accent-950/20 border border-primary-500/30 dark:border-accent-950/30'
                        : 'bg-white/80 dark:bg-primary-900/30 border border-slate-200 dark:border-primary-800'
                    }`}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                    animate={{
                      rotateY: activeIndex === index ? (isHovered ? 2 : 0) : 0,
                      rotateX: activeIndex === index ? (isHovered ? -2 : 0) : 0,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        activeIndex === index 
                          ? 'bg-gradient-to-r from-primary-500 to-accent-950 text-white'
                          : 'bg-slate-100 dark:bg-primary-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        {index === 0 ? (
                          <Award size={20} />
                        ) : index === 1 ? (
                          <GraduationCap size={20} />
                        ) : (
                          <BookOpen size={20} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold transition-colors ${
                          activeIndex === index 
                            ? 'text-primary-800 dark:text-white'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {item.institution}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.degree} • {item.field}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-slate-500 dark:text-slate-400">
                          <Calendar size={12} className="mr-1" />
                          <span>{item.startDate} - {item.endDate}</span>
                        </div>
                      </div>
                      <ChevronRight 
                        size={18} 
                        className={`transition-transform ${
                          activeIndex === index 
                            ? 'text-primary-600 dark:text-accent-950 rotate-90'
                            : 'text-slate-400'
                        }`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Content - Enhanced 3D card */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 20, rotateX: -5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { duration: 0.5 }
                }}
                exit={{ opacity: 0, y: -20, rotateX: 5 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-2/3"
              >
                <motion.div
                  className="h-full bg-white dark:bg-primary-900/50 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-primary-800 backdrop-blur-sm"
                  initial={{ rotateY: 0, rotateX: 0 }}
                  whileHover={{
                    rotateY: 1,
                    rotateX: -1,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformPerspective: 1000
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="p-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-950 text-white shadow-lg"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 5, repeat: Infinity }
                        }}
                      >
                        {activeIndex === 0 ? (
                          <Award size={28} />
                        ) : activeIndex === 1 ? (
                          <GraduationCap size={28} />
                        ) : (
                          <BookOpen size={28} />
                        )}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-800 dark:text-white">
                          {education[activeIndex].institution}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                          <span className="text-primary-600 dark:text-accent-950 font-medium">
                            {education[activeIndex].degree} in {education[activeIndex].field}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {education[activeIndex].location}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {education[activeIndex].startDate} - {education[activeIndex].endDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-primary-800 dark:text-white">
                          About This Program
                        </h4>
                        <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-accent-950 text-sm font-medium">
                          GPA: {education[activeIndex].gpa}
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {education[activeIndex].description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                        Notable Achievements
                      </h4>
                      <div className="space-y-3">
                        {education[activeIndex].achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-primary-800/30 hover:bg-slate-100 dark:hover:bg-primary-800/50 transition-colors"
                          >
                            <motion.div 
                              className="mt-1 w-2 h-2 rounded-full bg-primary-600 dark:bg-accent-950 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
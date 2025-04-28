import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight, Github, ExternalLink, BarChart2, Database, HeartPulse, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Diabetes Prediction ML Model',
      shortTitle: 'ML Model',
      description: 'Developed and deployed a machine learning model achieving 85% accuracy in predicting diabetes risk from clinical biomarkers. Implemented feature engineering and cross-validation to optimize model performance for healthcare applications.',
      technologies: ['R', 'Machine Learning', 'Data Analysis', 'Healthcare', 'ML Model'],
      image: 'src/components/sections/r project shot.JPG',
      github: 'https://github.com/ABDUL223344/diabetes-prediction',
      date: 'Nov 2024',
      icon: <HeartPulse size={20} className="text-white" />,
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Analysis of Cars Data Dashboard',
      shortTitle: 'Car Analytics',
      description: 'Interactive Tableau dashboard showcasing car data analytics with visual trends, performance metrics, and data-driven insights.',
      technologies: ['Tableau', 'Excel', 'Data Visualization', 'Data Analysis'],
      image: 'src/components/sections/photo_6082379578057279176_y.jpg',
      github: 'https://github.com/ABDUL223344/Exploring-Trends-In-Automotive-Industry-Using-Tableau',
      date: 'Oct 2024',
      icon: <BarChart2 size={20} className="text-white" />,
      color: 'bg-purple-600'
    },
    {
      id: 3,
      title: 'The complete MYSQL developer course',
      shortTitle: 'MYSQL',
      description: 'Completed summer training on MySQL database design, optimization, and integration while building scalable applications with robust data management.',
      technologies: ['E-BOX', 'MYSQL', 'SQL', 'DBMS', 'Database Design'],
      image: 'src/components/sections/e3.JPG',
      github: '#',
      date: 'Jul 2024',
      icon: <Database size={20} className="text-white" />,
      color: 'bg-green-600'
    },
    {
      id: 4,
      title: 'Social Networking Platform',
      shortTitle: 'Social App',
      description: 'Full-stack social media application with user authentication, real-time updates, and content sharing.',
      technologies: ['HTML', 'CSS'],
      image: 'src/components/sections/snw.JPG',
      github: 'https://github.com/ABDUL223344/social-network',
      date: 'Mar 2023',
      icon: <Users size={20} className="text-white" />,
      color: 'bg-red-600'
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-950/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          title="Projects & Trainings"
          subtitle="Professional work demonstrating technical expertise and problem-solving capabilities"
        />

        {/* Timeline Navigation */}
        <div className="relative mt-16 mb-12">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2"></div>
          
          <div className="relative flex overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex mx-auto space-x-12 px-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
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
                    {project.date}
                  </motion.span>
                  
                  <div className="relative mb-4">
                    <motion.div
                      className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${project.color} ${
                        activeIndex === index ? 'ring-3 ring-offset-2 ring-primary-500/30 dark:ring-accent-400/30 scale-110 shadow-lg' : 'scale-100 hover:scale-105 shadow-md'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.icon}
                      {activeIndex === index && (
                        <motion.div 
                          className="absolute -bottom-1 -right-1 bg-primary-600 dark:bg-accent-400 rounded-full p-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
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
                    {project.shortTitle}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Project Display */}
        <div className="flex justify-center">
          <motion.div
            key={projects[activeIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-primary-800/30 rounded-xl shadow-md border border-slate-200 dark:border-primary-700 w-full max-w-6xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Content on left */}
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full ${projects[activeIndex].color} text-white`}>
                    {projects[activeIndex].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800 dark:text-white">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Completed: {projects[activeIndex].date}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {projects[activeIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeIndex].technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={projects[activeIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                  >
                    <Github className="mr-2" size={18} />
                    View Project
                  </a>
                  {projects[activeIndex].demo && (
                    <a
                      href={projects[activeIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-primary-700 dark:text-white dark:hover:bg-primary-800/50 transition-colors"
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Image on right - Updated for full coverage */}
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/ABDUL223344"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:border-primary-700 dark:bg-primary-800/30 dark:text-white dark:hover:bg-primary-800/50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowRight className="ml-2" size={18} />
          </motion.a>
        </div>
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

export default ProjectsSection;
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Linkedin, Github, Mail, Phone, Download, Video } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and my passion for technology and data science"
        />
        
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-950 opacity-75 blur rounded-full"></div>
              
              <div className="relative mx-auto w-96 h-96 md:w-104 md:h-104 lg:w-120 lg:h-120 rounded-full overflow-hidden bg-white dark:bg-primary-900 p-1.5 shadow-lg">
                <img
                  src="src/components/sections/public.jpg"
                  alt="Abdul Aziz Khan"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                  style={{
                    objectPosition: 'top',
                  }}
                />
              </div>

              <motion.div 
                className="absolute -top-2 -right-2 bg-accent-950 dark:bg-accent-950 p-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.8 }}
              >
                <span className="flex h-4 w-4 bg-green-500 rounded-full"></span>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <motion.a 
                href="https://www.linkedin.com/in/abdulzizkhan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 bg-white dark:bg-primary-800 text-primary-600 dark:text-accent-950 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/ABDUL223344"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 bg-white dark:bg-primary-800 text-primary-600 dark:text-accent-950 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:abdulazizkhan726@gmail.com"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 bg-white dark:bg-primary-800 text-primary-600 dark:text-accent-950 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a 
                href="tel:+918250172651"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 bg-white dark:bg-primary-800 text-primary-600 dark:text-accent-950 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Phone size={20} />
              </motion.a>
            </div>

            {/* Download Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1ovHMvjtu7qmns9c2gYlvf3BP_Ijk7j3B/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                download="Abdul_Aziz_Khan_Resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0 2px 5px -1px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.04)"
                }}
                className="flex-1 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-950 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.span
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <Download size={18} />
                </motion.span>
                <span className="font-medium text-sm sm:text-base">Resume</span>
              </motion.a>

              {/* Video CV Button */}
              <motion.a
                href="https://example.com/video-cv.mp4" // Replace with actual video CV link
                target="_blank"
                rel="noopener noreferrer"
                download="Abdul_Aziz_Khan_Video_CV.mp4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0 2px 5px -1px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.04)"
                }}
                className="flex-1 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <motion.span
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <Video size={18} />
                </motion.span>
                <span className="font-medium text-sm sm:text-base">Video CV</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-2xl font-display font-semibold text-primary-800 dark:text-white mb-4">
              Hello, I'm Abdul Aziz Khan
            </h3>
            
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                A passionate data science enthusiast with a strong drive to create innovative, 
                data-driven solutions. My expertise spans machine learning, SQL databases, 
                and web development, supported by a solid academic foundation in computer science.
              </p>
              <p>
                I thrive on transforming complex data into actionable insights that drive business decisions. 
                My approach combines analytical rigor with creative problem-solving to deliver scalable 
                solutions that meet real-world challenges.
              </p>
              <p>
                As a dedicated team player with strong communication skills. I'm constantly expanding my knowledge 
                in emerging technologies and remain adaptable in the rapidly evolving tech landscape.
              </p>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white dark:bg-primary-800/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm text-slate-500 dark:text-slate-400">Email</h4>
                <p className="text-primary-800 dark:text-white font-medium truncate">abdulazizkhan726@gmail.com</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white dark:bg-primary-800/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm text-slate-500 dark:text-slate-400">Phone</h4>
                <p className="text-primary-800 dark:text-white font-medium">+91-8250172651</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white dark:bg-primary-800/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm text-slate-500 dark:text-slate-400">GitHub</h4>
                <p className="text-primary-800 dark:text-white font-medium">github.com/ABDUL223344</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-white dark:bg-primary-800/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</h4>
                <p className="text-primary-800 dark:text-white font-medium">linkedin.com/in/abdulzizkhan</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
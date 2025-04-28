import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

// SkillBar component
const SkillBar: React.FC<{
  name: string;
  level: number;
  icon: string;
  index: number;
}> = ({ name, level, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <img src={icon} alt={name} className="w-5 h-5 mr-2 object-contain" />
          <span className="text-sm font-medium text-primary-800 dark:text-white">
            {name}
          </span>
        </div>
        <span className="text-xs font-medium text-primary-600 dark:text-primary-300">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-primary-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-950"
        />
      </div>
    </motion.div>
  );
};

// Skills data
const languageSkills = [
  {
    name: 'Python',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'R',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  },
  {
    name: 'SQL',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'JavaScript',
    level: 66,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
];

const platformSkills = [
  {
    name: 'Tableau',
    level: 95,
    icon: 'https://www.svgrepo.com/show/354428/tableau-icon.svg',
  },
  {
    name: 'MySQL',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Excel',
    level: 80,
    icon: 'https://www.svgrepo.com/show/373589/excel.svg',
  },
  {
    name: 'GitHub',
    level: 55,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
];

const softSkills = [
  {
    name: 'Problem Solving',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg',
  },
  {
    name: 'Team Collaboration',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
  },
  {
    name: 'Communication',
    level: 60,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'Adaptability',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg',
  },
];

// Main SkillsSection component
const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills" 
          subtitle="A comprehensive overview of my technical and soft skills"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-12">
          {/* Languages Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-display font-semibold text-primary-800 dark:text-white mb-6 text-center">
              Languages
            </h3>
            <div>
              {languageSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Platforms & Tools Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-display font-semibold text-primary-800 dark:text-white mb-6 text-center">
              Platforms & Tools
            </h3>
            <div>
              {platformSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-display font-semibold text-primary-800 dark:text-white mb-6 text-center">
              Soft Skills
            </h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

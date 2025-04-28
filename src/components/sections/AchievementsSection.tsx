import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, Code, Trophy, CheckCircle } from 'lucide-react';

const achievements = [
  {
    icon: <Code className="w-12 h-12 text-primary-600 dark:text-accent-950" />,
    title: '200+ Problems Solved',
    description:
      'Solved over 200 programming challenges across various platforms including LeetCode and HackerRank.',
  },
  {
    icon: <Trophy className="w-12 h-12 text-primary-600 dark:text-accent-950" />,
    title: 'Hackathon 3rd Runner-up',
    description:
      'Placed 3rd in a university-level hackathon for innovative data-driven healthcare solutions.',
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-primary-600 dark:text-accent-950" />,
    title: 'Published Research Paper',
    description:
      'Co-authored a research paper on universal translation earbuds for travelers.',
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-primary-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Achievements"
          subtitle="Key milestones and accomplishments throughout my academic and professional journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-primary-800/30 p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4 transform transition-transform duration-500 hover:scale-110">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-display font-semibold text-primary-800 dark:text-white mb-3">
                {achievement.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                {achievement.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="h-1 bg-accent-950 mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

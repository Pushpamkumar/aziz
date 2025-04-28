import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt effect
  const xSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5]);

  // Handle mouse move on the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calculate the mouse position as a percentage of the card dimensions
      // and subtract 0.5 to get a value between -0.5 and 0.5
      const xValue = (mouseX / width) - 0.5;
      const yValue = (mouseY / height) - 0.5;
      
      x.set(xValue);
      y.set(yValue);
    }
  };

  // Reset the card position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-white dark:bg-primary-900/80 rounded-xl shadow-lg overflow-hidden cursor-pointer h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div 
          className="w-full h-48 overflow-hidden rounded-lg mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
        </div>
        
        <h3 
          className="text-xl font-display font-semibold text-primary-800 dark:text-white mb-2"
          style={{ transform: "translateZ(30px)" }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-slate-600 dark:text-slate-300 mb-4 flex-grow"
          style={{ transform: "translateZ(25px)" }}
        >
          {project.description}
        </p>
        
        <div 
          className="flex flex-wrap gap-2 mb-4"
          style={{ transform: "translateZ(35px)" }}
        >
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-primary-800 text-primary-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div 
          className="flex gap-4 mt-auto"
          style={{ transform: "translateZ(40px)" }}
        >
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-950 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
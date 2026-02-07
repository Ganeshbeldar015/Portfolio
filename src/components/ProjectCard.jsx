import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      layout
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-dark-800 rounded-3xl overflow-hidden border border-white/50 dark:border-dark-700 soft-shadow group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-accent-900/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/90 dark:bg-dark-900/90 rounded-full text-accent-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-lg"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/90 dark:bg-dark-900/90 rounded-full text-accent-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-lg"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 font-display text-accent-900 dark:text-white">{project.title}</h3>
        <p className="text-accent-600 dark:text-cream-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-dark-800 rounded-3xl overflow-hidden border border-linen-200 dark:border-dark-700 soft-shadow group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-claude-900/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 font-display text-claude-900 dark:text-white">{project.title}</h3>
        <p className="text-claude-600 dark:text-linen-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-900/40"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-linen-100 dark:bg-dark-700 text-claude-700 dark:text-linen-200 font-semibold hover:bg-linen-200 dark:hover:bg-dark-600 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5"
            >
              <ExternalLink size={18} /> Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

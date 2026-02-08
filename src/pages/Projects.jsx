import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [

    {
      id: 1,
      title: "MediConnect - A Role-Based Healthcare Platform",
      description: "A secure healthcare management system ensuring verified doctor onboarding, identity-bound prescriptions, real-time appointments, and strict role-based access using Firebase Auth + Firestore.",
      image: "/images/hc.png",
      tags: ["React+Vite","Supabase", "Tailwind CSS", "Framer Motion", "Razopay", "API Integration", "Node.js", "Express.js","PostgreSQL","Cloud Technologies","AI Intrrest evaluation models","Feed feature with persnalised suggestions"],
      github: "https://github.com/Ganeshbeldar015/HealthCare",
      demo: "https://mediconnect-dr.vercel.app/"
    },
     {
      id: 2, 
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio highlighting skills and projects with smooth animations and a fresh nature-inspired theme.",
      image: "/images/image.png",
      tags: ["React+Vite", "Tailwind CSS", "Framer-motion"],
      github: "https://github.com/Ganeshbeldar015/Portfolio",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary-600 dark:text-secondary-400 font-medium tracking-wider uppercase text-sm">My Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 font-display text-accent-900 dark:text-cream-100">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-primary-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/Ganeshbeldar015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cream-100 dark:bg-dark-700 text-accent-800 dark:text-cream-100 font-medium border border-primary-200 dark:border-dark-600 hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

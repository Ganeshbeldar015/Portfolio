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
      tags: ["React+Vite", "Supabase", "Tailwind CSS", "Framer Motion", "Razopay", "API Integration", "Node.js", "Express.js", "PostgreSQL", "Cloud Technologies", "AI Interest evaluation models", "Feed feature with personalised suggestions"],
      github: "https://github.com/Ganeshbeldar015/HealthCare",
      demo: "https://mediconnect-dr.vercel.app/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio highlighting skills and projects with smooth animations and a Claude-inspired warm design.",
      image: "/images/image.png",
      tags: ["React+Vite", "Tailwind CSS", "Framer-motion"],
      github: "https://github.com/Ganeshbeldar015/Portfolio",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-linen-100 dark:bg-dark-800 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 dark:text-primary-400 font-medium tracking-widest uppercase text-sm">My Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 font-display text-claude-950 dark:text-linen-100">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto"></div>
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linen-50 dark:bg-dark-700 text-claude-800 dark:text-linen-100 font-medium border border-linen-300 dark:border-dark-600 hover:bg-primary-50 dark:hover:bg-dark-600 hover:border-primary-300 transition-all"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

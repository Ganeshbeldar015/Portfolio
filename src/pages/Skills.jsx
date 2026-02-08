import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript", "SQL", ],
      color: "bg-primary-100 text-primary-800 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800"
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "Tailwind CSS", "HTML5/CSS3", "Vite", "MongoDB"],
      color: "bg-secondary-100 text-secondary-800 border-secondary-200 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-800"
    },
    {
      title: "AI & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV"],
      color: "bg-accent-100 text-accent-800 border-accent-200 dark:bg-accent-900/30 dark:text-accent-300 dark:border-accent-800"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Firebase", "Postman", "Vercel" ,"Supabase"],
      color: "bg-cream-200 text-accent-800 border-cream-300 dark:bg-dark-700 dark:text-cream-200 dark:border-dark-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-cream-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary-600 dark:text-secondary-400 font-medium tracking-wider uppercase text-sm">My Arsenal</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 font-display text-accent-900 dark:text-cream-100">
            Technical Skills
          </h2>
          <p className="max-w-2xl mx-auto text-accent-700 dark:text-cream-200 font-sans">
           I use these technologies to build AI projects and modern web applications from backend logic to user interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-white/50 dark:border-dark-700 soft-shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 font-display text-accent-900 dark:text-white flex items-center gap-3">
                <span className={`w-3 h-8 rounded-full ${category.color.split(' ')[0]}`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border ${category.color} cursor-default transition-transform`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

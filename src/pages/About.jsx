import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Code size={28} className="text-primary-600 dark:text-primary-400" />, title: "Web Dev", desc: "MERN Stack, React, Tailwind" },
    { icon: <Brain size={28} className="text-accent-600 dark:text-accent-400" />, title: "AI & ML", desc: "Python, TensorFlow, NLP" },
    { icon: <Database size={28} className="text-secondary-600 dark:text-secondary-400" />, title: "Data Science", desc: "Pandas, NumPy, Viz" },
    { icon: <Globe size={28} className="text-teal-600 dark:text-teal-400" />, title: "Hackathons", desc: "Problem Solving & Innovation" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider uppercase text-sm">Who I Am</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 font-display text-accent-900 dark:text-cream-100">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-primary-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Column: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative p-6">
              <div className="absolute inset-0 bg-secondary-100 dark:bg-secondary-900/10 rounded-blob rotate-3 transform scale-105 organic-blob"></div>
              <div className="relative bg-cream-50 dark:bg-dark-900 p-10 rounded-3xl border border-primary-100 dark:border-dark-700 soft-shadow">
                <p className="text-lg text-accent-700 dark:text-cream-200 leading-relaxed mb-6 font-sans">
                  Hi, I'm <span className="font-bold text-primary-600 dark:text-primary-400">Ganesh Beldar</span>, 
                  a Computer Engineering student specialized in <span className="font-semibold text-accent-700 dark:text-accent-300">Artificial Intelligence & Data Science</span>.
                </p>
                <p className="text-lg text-accent-700 dark:text-cream-200 leading-relaxed mb-8">
                  My journey involves bridging the gap between intelligent algorithms and modern web applications. 
                  I am passionate about <span className="underline decoration-secondary-400 decoration-2 underline-offset-2">solving real-world problems</span> and constantly learning new technologies.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-display text-accent-900 dark:text-white">Education</h3>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-dark-800 border border-primary-100 dark:border-dark-600">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold">
                       🎓
                    </div>
                    <div>
                      <h4 className="font-bold text-accent-900 dark:text-white">B.Tech in Computer Engineering</h4>
                      <p className="text-sm text-accent-600 dark:text-cream-300">AI & Data Science • Current</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-sm border border-primary-50 dark:border-dark-700 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream-100 dark:bg-dark-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-transparent group-hover:border-primary-100">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-accent-900 dark:text-white">{card.title}</h3>
                <p className="text-accent-600 dark:text-cream-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "",
      issuer: "",
      date: "",
      link: "",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: "",
      issuer: "",
      date: "",
      link: "",
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
    },
    {
      title: "",
      issuer: "",
      date: "",
      link: "",
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
    }
  ];

  const achievements = [
    " ...................."
  ];

  return (
    <section id="certifications" className="py-24 bg-cream-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary-600 dark:text-secondary-400 font-medium tracking-wider uppercase text-sm">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 font-display text-accent-900 dark:text-cream-100">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1.5 bg-primary-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Certifications List */}
          <div className="lg:w-1/2 space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-white/50 dark:border-dark-700 soft-shadow flex items-start gap-4 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
              >
                <div className={`p-3 rounded-xl ${cert.color} mt-1`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-900 dark:text-white mb-1 font-display">{cert.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-accent-600 dark:text-cream-300">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements List */}
          <div className="lg:w-1/2">
             <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-white/50 dark:border-dark-700 soft-shadow h-full">
              <h3 className="text-xl font-bold mb-6 font-display text-accent-900 dark:text-white flex items-center gap-2">
                 🏆 Key Milestones
              </h3>
              <ul className="space-y-6">
                {achievements.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary-500"></span>
                    <span className="text-accent-700 dark:text-cream-200 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

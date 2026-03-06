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
      color: "bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
    },
    {
      title: "",
      issuer: "",
      date: "",
      link: "",
      color: "bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400"
    },
    {
      title: "",
      issuer: "",
      date: "",
      link: "",
      color: "bg-linen-200 text-claude-600 dark:bg-dark-700 dark:text-linen-300"
    }
  ];

  const achievements = [
    " ...................."
  ];

  return (
    <section id="certifications" className="py-24 bg-linen-100 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 dark:text-primary-400 font-medium tracking-widest uppercase text-sm">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 font-display text-claude-950 dark:text-linen-100">
            Certifications &amp; Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto"></div>
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
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-linen-200 dark:border-dark-700 soft-shadow flex items-start gap-4 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
              >
                <div className={`p-3 rounded-xl ${cert.color} mt-1`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-claude-900 dark:text-white mb-1 font-display">{cert.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-claude-600 dark:text-linen-300">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-linen-200 dark:border-dark-700 soft-shadow h-full">
              <h3 className="text-xl font-bold mb-6 font-display text-claude-900 dark:text-white flex items-center gap-2">
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
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span className="text-claude-700 dark:text-linen-200 leading-relaxed">{item}</span>
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

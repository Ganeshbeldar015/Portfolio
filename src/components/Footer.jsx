import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linen-200 dark:bg-dark-950 py-12 transition-colors duration-300 border-t border-linen-300 dark:border-dark-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-claude-900 dark:text-white mb-1">
              Ganesh Beldar <span className="text-primary-500">.</span>
            </h3>
            <p className="text-claude-500 dark:text-linen-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Ganeshbeldar015"
              className="text-claude-500 dark:text-linen-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1 border border-linen-300 dark:border-dark-700"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-bhaktaraj-beldar-00589335b/"
              className="text-claude-500 dark:text-linen-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1 border border-linen-300 dark:border-dark-700"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ganeshbeldar.ug@gmail.com"
              className="text-claude-500 dark:text-linen-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1 border border-linen-300 dark:border-dark-700"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

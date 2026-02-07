import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream-100 dark:bg-black py-12 transition-colors duration-300 border-t border-primary-100 dark:border-dark-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-accent-900 dark:text-white mb-2">Ganesh Beldar</h3>
            <p className="text-accent-600 dark:text-cream-300 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-accent-600 dark:text-cream-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="#" className="text-accent-600 dark:text-cream-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-accent-600 dark:text-cream-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1">
              <Twitter size={20} />
            </a>
            <a href="mailto:ganesh.beldar@example.com" className="text-accent-600 dark:text-cream-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-dark-800 p-3 rounded-full soft-shadow hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

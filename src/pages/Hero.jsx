import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "AI & Web Developer | Building Smart Solutions";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Organic Background Elements */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-primary-200/50 dark:bg-primary-900/20 organic-blob mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-secondary-200/50 dark:bg-secondary-900/20 organic-blob mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream-100/50 dark:bg-dark-800/50 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-white dark:bg-dark-800 border border-primary-200 dark:border-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 shadow-sm">
            👋 Hello, I'm
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-accent-900 dark:text-cream-50 leading-tight">
            Ganesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Beldar</span>
          </h1>
          <div className="h-8 md:h-12 mb-8">
            <span className="text-xl md:text-2xl font-mono text-accent-600 dark:text-accent-300 font-medium tracking-wide">
              {text}
              <span className="animate-blink text-primary-500">|</span>
            </span>
          </div>
          <p className="text-accent-700 dark:text-cream-200 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans">
            A passionate Computer Engineering student specializing in AI & Data Science. 
            I build modern web applications and <span className="font-semibold text-primary-600 dark:text-primary-400">intelligent systems</span> that solve real problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-xl bg-accent-700 hover:bg-accent-800 text-white font-medium shadow-lg shadow-accent-700/20 hover:shadow-accent-700/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-dark-800 border-2 border-primary-100 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 text-accent-800 dark:text-cream-100 font-medium transition-all flex items-center justify-center gap-2 group"
            >
              Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-300 to-secondary-300 dark:from-primary-900 dark:to-secondary-900 organic-blob opacity-60 animate-pulse-slow rotate-12"></div>
            <div className="absolute inset-4 bg-white dark:bg-dark-800 organic-blob shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white dark:border-dark-700">
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" 
                alt="Ganesh Beldar" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Floating Cards with Soft Shadow */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 bg-white dark:bg-dark-800 px-5 py-3 rounded-2xl text-sm font-medium flex items-center gap-3 soft-shadow border border-primary-50 dark:border-dark-700"
            >
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-accent-800 dark:text-cream-100">Open to Work</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 bg-white dark:bg-dark-800 px-5 py-3 rounded-2xl text-sm font-medium flex items-center gap-3 soft-shadow border border-primary-50 dark:border-dark-700"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-1.5 rounded-lg text-primary-700 dark:text-primary-300 font-bold">5+</div>
              <span className="text-accent-800 dark:text-cream-100">Projects Completed</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-4 mt-8 md:mt-16 pb-12 flex flex-col items-center gap-4 z-20 relative"
      >
        {/* Row 1 */}
        <div className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold shadow-lg shadow-primary-500/30 hover:scale-105 transition-transform cursor-default">
          5+ Hackathons (final round)
        </div>
        
        {/* Row 2 */}
        <div className="px-8 py-3 rounded-full bg-gradient-to-r from-secondary-400 to-secondary-600 text-white font-bold shadow-lg shadow-secondary-500/30 text-center max-w-3xl hover:scale-105 transition-transform cursor-default leading-relaxed">
          Runner up + Best innovation in Reva university, Baguluru National Hackathon
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap justify-center gap-4">
           <div className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-default">
             FE-CGPA: 9.18
           </div>
           <div className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-default">
             10+ Projects
           </div>
           <div className="px-8 py-3 rounded-full bg-gradient-to-r from-secondary-400 to-secondary-600 text-white font-bold shadow-lg hover:scale-105 transition-transform cursor-default flex flex-col items-center leading-tight">
             Member of ACES
             <span className="text-[10px] font-normal opacity-90">(Association of Comp. Engg. Students)</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // No session storage check - always load
    setIsLoaded(false);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-white dark:bg-dark-900 text-slate-900 dark:text-white transition-colors duration-300 ${!isLoaded ? 'overflow-hidden' : ''}`}>
        <ScrollProgress />
        <ScrollToTop />
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />

          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

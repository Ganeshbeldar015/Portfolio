import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

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
      <Preloader />
      <div className="min-h-screen bg-white dark:bg-dark-900 text-slate-900 dark:text-white transition-colors duration-300">
        <ScrollProgress />
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

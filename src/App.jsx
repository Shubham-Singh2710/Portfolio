import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SparklesCore } from './components/ui/sparkles';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
    <div className="min-h-screen font-sans selection:bg-primary-500 selection:text-white relative bg-slate-50 dark:bg-dark-900">
      
      {/* Global Sparkles Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesglobal"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50} // slightly lower density for entire page
          className="w-full h-full"
          particleColor={darkMode ? "#3b82f6" : "#2563eb"} 
          speed={1}
        />
      </div>

      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;

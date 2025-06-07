
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 scroll-smooth">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div className="relative">
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      
      {/* Enhanced Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-slate-400 mb-4">
            © 2024 Manoj M S. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-slate-500 text-sm">
            Crafted with passion for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

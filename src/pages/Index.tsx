
import React, { useEffect } from 'react';
import StickyHeader from '../components/StickyHeader';
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
      <StickyHeader />
      
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
      <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-slate-400 mb-4 text-lg">
            © 2024 Manoj M S. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-slate-500">
            Crafted with passion for innovation and excellence.
          </p>
          <div className="mt-6 text-slate-600 text-sm">
            <p>Ready to connect your portfolio to Supabase for dynamic content and contact forms? 
            <span className="text-blue-400 ml-1">Click the Supabase button in the top-right corner!</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

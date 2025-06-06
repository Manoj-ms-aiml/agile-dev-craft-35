
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Software Engineer (Full-Stack)',
    'AI/ML Engineer', 
    'DevOps Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MANOJ M S
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-blue-300 transition-all duration-500">
              {roles[currentRole]}
            </h2>
          </div>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable solutions with expertise in full-stack development, 
            AI/ML engineering, and DevOps practices. Proven track record with 200+ LeetCode problems solved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin size={20} className="text-blue-400" />
              <span>Mysore, Karnataka</span>
            </div>
            <a href="mailto:manojmsaiml@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <Mail size={20} className="text-blue-400" />
              <span>manojmsaiml@gmail.com</span>
            </a>
            <a href="tel:+916360099113" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <Phone size={20} className="text-blue-400" />
              <span>+91 6360099113</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href="#experience" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

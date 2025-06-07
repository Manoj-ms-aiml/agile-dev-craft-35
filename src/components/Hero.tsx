
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Software Developer',
    'AI Enthusiast', 
    'Tech Explorer',
    'Full-Stack Engineer',
    'DevOps Engineer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleText = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(currentRoleText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRoleText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRoleText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-slate-200">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Manoj M S
                </span>
              </h1>
              
              {/* Typing animation */}
              <div className="h-16 mb-8 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl font-light text-blue-300">
                  I'm a <span className="text-white font-medium">{displayText}</span>
                  <span className="animate-pulse text-blue-400">|</span>
                </h2>
              </div>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                Passionate about building scalable solutions with expertise in full-stack development, 
                AI/ML engineering, and DevOps practices. Proven track record with 200+ LeetCode problems solved.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-sm">Mysore, Karnataka</span>
                </div>
                <a href="mailto:manojmsaiml@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                  <span className="text-sm">manojmsaiml@gmail.com</span>
                </a>
                <a href="tel:+916360099113" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                  <span className="text-sm">+91 6360099113</span>
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                <a href="https://github.com" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Floating background shapes */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Main photo container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
                  <img 
                    src="/lovable-uploads/3e805cba-c1b8-4dce-a2b5-def1cf4f4b6e.png" 
                    alt="Manoj M S - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-400/20 rounded-2xl scale-110 animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional headshot */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/3e805cba-c1b8-4dce-a2b5-def1cf4f4b6e.png" 
                  alt="Manoj M S - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MANOJ M S
          </h1>
          
          {/* Typing animation */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-light text-blue-300">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Passionate about building scalable solutions with expertise in full-stack development, 
            AI/ML engineering, and DevOps practices. Proven track record with 200+ LeetCode problems solved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
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
          
          <div className="flex justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
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


import React, { useState, useEffect } from 'react';

interface AnimatedIntroProps {
  onComplete: () => void;
}

const AnimatedIntro = ({ onComplete }: AnimatedIntroProps) => {
  const [phase, setPhase] = useState<'name' | 'photo' | 'complete'>('name');

  useEffect(() => {
    // Name animation for 5 seconds
    const nameTimer = setTimeout(() => {
      setPhase('photo');
    }, 5000);

    // Photo animation for 5 seconds, then complete
    const photoTimer = setTimeout(() => {
      setPhase('complete');
      setTimeout(onComplete, 500); // Small delay before calling onComplete
    }, 10000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(photoTimer);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center overflow-hidden">
      {phase === 'name' && <NameAnimation />}
      {phase === 'photo' && <PhotoAnimation />}
    </div>
  );
};

const NameAnimation = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-flicker-name">
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0s' }}>M</span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.1s' }}>a</span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.2s' }}>n</span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.3s' }}>o</span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.4s' }}>j</span>
        <span className="inline-block mx-4"></span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.5s' }}>M</span>
        <span className="inline-block animate-glow-letter" style={{ animationDelay: '0.6s' }}>S</span>
      </h1>
      
      {/* Flickering light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-flicker-1"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-flicker-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-flicker-3"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-flicker-4"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-flicker-5"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-green-400 rounded-full animate-flicker-1"></div>
      </div>
    </div>
  );
};

const PhotoAnimation = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="relative mb-8">
        <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-400 animate-photo-reveal">
          <img 
            src="/lovable-uploads/3e805cba-c1b8-4dce-a2b5-def1cf4f4b6e.png"
            alt="Manoj M S"
            className="w-full h-full object-cover animate-photo-zoom"
          />
        </div>
        
        {/* Rotating circles around photo */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-light text-blue-300 animate-type-in">
        Software Developer & AI Enthusiast
      </h2>
    </div>
  );
};

export default AnimatedIntro;

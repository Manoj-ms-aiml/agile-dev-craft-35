import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import anime from 'animejs';

interface AnimatedIntroProps {
  onComplete: () => void;
}

const AnimatedIntro = ({ onComplete }: AnimatedIntroProps) => {
  const [phase, setPhase] = useState<'name' | 'photo' | 'complete'>('name');
  const nameRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-blue-400 rounded-full opacity-70';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesRef.current.appendChild(particle);
        
        // Animate particles with GSAP
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    }

    // Name animation sequence
    const nameTimer = setTimeout(() => {
      setPhase('photo');
    }, 4000);

    const photoTimer = setTimeout(() => {
      setPhase('complete');
      setTimeout(onComplete, 1000);
    }, 8000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(photoTimer);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center overflow-hidden">
      {/* Animated particles background */}
      <div ref={particlesRef} className="absolute inset-0"></div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient-x"></div>
      
      {phase === 'name' && <NameAnimation ref={nameRef} />}
      {phase === 'photo' && <PhotoAnimation ref={photoRef} />}
    </div>
  );
};

const NameAnimation = React.forwardRef<HTMLDivElement>((props, ref) => {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // GSAP timeline for name animation
      const tl = gsap.timeline();
      
      // Initial state
      gsap.set(lettersRef.current, { 
        opacity: 0, 
        y: 100, 
        rotationX: -90,
        transformOrigin: "center bottom"
      });

      // Animate letters in sequence
      tl.to(lettersRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      .to(lettersRef.current, {
        scale: 1.1,
        duration: 0.3,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      }, "-=0.5");

      // Continuous glow animation with Anime.js
      anime({
        targets: lettersRef.current,
        textShadow: [
          '0 0 10px rgba(59, 130, 246, 0.8)',
          '0 0 30px rgba(59, 130, 246, 1)',
          '0 0 10px rgba(59, 130, 246, 0.8)'
        ],
        duration: 2000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
      });
    }
  }, []);

  const name = "MANOJ M S";
  
  return (
    <div ref={containerRef} className="text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
        {name.split('').map((letter, index) => (
          <span
            key={index}
            ref={el => el && (lettersRef.current[index] = el)}
            className="inline-block"
            style={{ 
              textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
              marginRight: letter === ' ' ? '0.5em' : '0'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
});

const PhotoAnimation = React.forwardRef<HTMLDivElement>((props, ref) => {
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const orbitsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (photoContainerRef.current && imageRef.current) {
      // GSAP timeline for photo entrance
      const tl = gsap.timeline();
      
      // Initial state
      gsap.set(photoContainerRef.current, { 
        scale: 0, 
        rotation: 180, 
        opacity: 0 
      });
      
      gsap.set(imageRef.current, { 
        scale: 1.5, 
        filter: 'blur(10px)' 
      });

      // Photo entrance animation
      tl.to(photoContainerRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      })
      .to(imageRef.current, {
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");

      // Animate orbital elements with Anime.js
      orbitsRef.current.forEach((orbit, index) => {
        if (orbit) {
          anime({
            targets: orbit,
            rotate: 360,
            duration: 3000 + (index * 500),
            loop: true,
            easing: 'linear'
          });
        }
      });

      // Floating animation for the photo
      gsap.to(photoContainerRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  return (
    <div className="text-center animate-fade-in">
      <div className="relative mb-8" ref={photoContainerRef}>
        {/* Orbital rings */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            ref={el => el && (orbitsRef.current[index] = el)}
            className={`absolute inset-0 rounded-full border-2 border-dashed opacity-30 ${
              index === 0 ? 'border-blue-400 w-80 h-80' :
              index === 1 ? 'border-purple-400 w-96 h-96' :
              'border-cyan-400 w-112 h-112'
            }`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`absolute w-3 h-3 rounded-full ${
              index === 0 ? 'bg-blue-400' :
              index === 1 ? 'bg-purple-400' :
              'bg-cyan-400'
            } top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
          </div>
        ))}
        
        <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-400 relative z-10">
          <img 
            ref={imageRef}
            src="/lovable-uploads/3e805cba-c1b8-4dce-a2b5-def1cf4f4b6e.png"
            alt="Manoj M S"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-light text-blue-300">
        Software Developer & AI Enthusiast
      </h2>
    </div>
  );
});

export default AnimatedIntro;
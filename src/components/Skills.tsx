import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "from-red-500 to-orange-500",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Flask"],
      color: "from-blue-500 to-cyan-500",
      icon: "🌐"
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
      color: "from-purple-500 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Database & Cloud",
      skills: ["SQL", "MySQL", "PostgreSQL", "AWS", "GCP", "Docker"],
      color: "from-green-500 to-emerald-500",
      icon: "☁️"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "Kubernetes"],
      color: "from-yellow-500 to-amber-500",
      icon: "⚙️"
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "Operating Systems", "Computer Networks", "Microservices"],
      color: "from-indigo-500 to-blue-500",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Set initial state
        gsap.set(card, {
          opacity: 0,
          y: 100,
          rotationY: -15,
          transformOrigin: "center center"
        });

        // Animate on scroll
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        });

        // Hover animations with GSAP
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.4,
            ease: "power2.out"
          });

          // Animate skill tags with Anime.js
          const skillTags = card.querySelectorAll('.skill-tag');
          anime({
            targets: skillTags,
            scale: [1, 1.1, 1],
            duration: 600,
            delay: anime.stagger(50),
            easing: 'easeOutElastic(1, .6)'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });

    // Floating animation for icons
    const icons = sectionRef.current?.querySelectorAll('.skill-icon');
    icons?.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3
      });
    });

  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and cutting-edge technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={el => el && (cardsRef.current[index] = el)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
            >
              {/* Icon and gradient background */}
              <div className="relative mb-6">
                <div className={`skill-icon w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} opacity-20 blur-xl transform group-hover:scale-150 transition-transform duration-300`}></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 text-sm border border-slate-600/30 hover:border-slate-500 transition-all duration-300 hover:bg-slate-600/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
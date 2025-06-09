import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const experienceCardRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Wider Technologies",
      period: "2024 – 2025",
      location: "Remote",
      description: "Gained full-stack web development experience by creating responsive websites for clients",
      achievements: [
        "Designed and deployed apollohealthandfitness website using Yoast SEO, increasing monthly traffic to 100+",
        "Developed responsive CA platform (Kayess Square) improving file processing speed by 40%",
        "Built Python backend for astrology app (Astro Santhvana) with Flask, MySQL, and real-time updates",
        "Enhanced billing system for Sri Kanteshwara Electronics, improving accuracy by 25% and reducing processing time by 30%"
      ],
      projects: [
        {
          name: "Kayess Square",
          description: "Responsive Chartered Accountants platform for client data management",
          tech: ["React.js", "Node.js", "MySQL", "Agile Methodology"]
        },
        {
          name: "Astro Santhvana", 
          description: "Astrology consultation app with video integration and real-time updates",
          tech: ["Python", "Flask", "MySQL", "YouTube API", "Flask-SocketIO"]
        },
        {
          name: "Apollo Health & Fitness",
          description: "SEO-optimized fitness website with significant traffic growth",
          tech: ["WordPress", "Yoast SEO", "Responsive Design"]
        }
      ]
    }
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
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

    // Experience card animation
    if (experienceCardRef.current) {
      gsap.fromTo(experienceCardRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
          transformOrigin: "center top"
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceCardRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animation for experience card
      const handleMouseEnter = () => {
        gsap.to(experienceCardRef.current, {
          scale: 1.02,
          y: -5,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(experienceCardRef.current, {
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      experienceCardRef.current.addEventListener('mouseenter', handleMouseEnter);
      experienceCardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

  }, []);

  const handleProjectToggle = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
    
    // Animate the toggle with Anime.js
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
      anime({
        targets: projectsContainer,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuart'
      });
    }
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-slate-400 text-lg">Building innovative solutions and driving impact</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={experienceCardRef}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => handleProjectToggle(index)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                  >
                    Featured Projects 
                    <div className="transform group-hover:scale-110 transition-transform">
                      {expandedProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {expandedProject === index && (
                    <div className="projects-container mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exp.projects.map((project, projectIndex) => (
                        <div 
                          key={projectIndex} 
                          className="bg-slate-700 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                          <h5 className="font-semibold text-white mb-2">{project.name}</h5>
                          <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs hover:bg-slate-500 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
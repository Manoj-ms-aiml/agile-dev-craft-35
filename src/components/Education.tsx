import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const educationCardsRef = useRef<HTMLDivElement[]>([]);
  const certificationCardsRef = useRef<HTMLDivElement[]>([]);
  const achievementCardsRef = useRef<HTMLDivElement[]>([]);

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering (AI/ML)",
      institution: "Vidyavardhaka College of Engineering",
      period: "2022 – 2026",
      grade: "8.98 CGPA",
      icon: GraduationCap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "Science",
      institution: "Sheshadripuram PU College",
      period: "2020 – 2022", 
      grade: "94.5%",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600"
    },
    {
      degree: "Secondary School Leaving Certificate",
      field: "General Studies",
      institution: "Karnataka Examination Board",
      period: "2019 – 2020",
      grade: "95.2%",
      icon: GraduationCap,
      gradient: "from-pink-500 to-red-600"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning",
      issuer: "Stanford University (Coursera)",
      category: "AI/ML"
    },
    {
      title: "Artificial Intelligence Practitioner", 
      issuer: "IBM",
      category: "AI/ML"
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      category: "Programming"
    },
    {
      title: "Cloud Computing",
      issuer: "Coursera",
      category: "Cloud"
    },
    {
      title: "Software Development Lifecycle",
      issuer: "Coursera", 
      category: "Development"
    },
    {
      title: "Data Visualization with Tableau",
      issuer: "Coursera",
      category: "Analytics"
    }
  ];

  const achievements = [
    {
      title: "Outreach Head - Vectorflow Club",
      description: "Led outreach programs for pre-university students, promoting AI & ML engineering through workshops",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "HackSprint 5.0 Participant",
      description: "24-hour national hackathon at P.E.S. College - developed acclaimed Stickman Shootout AI project",
      icon: Award,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Successfully solved 200+ algorithmic problems demonstrating strong DSA skills",
      icon: Trophy,
      gradient: "from-green-500 to-blue-600"
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

    // Education cards animation
    educationCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            rotationY: -15,
            transformOrigin: "center center"
          },
          {
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
          }
        );

        // Hover animations
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.4,
            ease: "power2.out"
          });

          // Animate icon with Anime.js
          const icon = card.querySelector('.edu-icon');
          if (icon) {
            anime({
              targets: icon,
              scale: [1, 1.3, 1.1],
              rotate: [0, 15, 0],
              duration: 800,
              easing: 'easeOutElastic(1, .6)'
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    // Certification cards animation
    certificationCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.05
          }
        );

        // Hover animation
        const handleMouseEnter = () => {
          anime({
            targets: card,
            scale: [1, 1.05],
            translateY: [0, -5],
            duration: 300,
            easing: 'easeOutQuad'
          });
        };

        const handleMouseLeave = () => {
          anime({
            targets: card,
            scale: [1.05, 1],
            translateY: [-5, 0],
            duration: 300,
            easing: 'easeOutQuad'
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    // Achievement cards animation
    achievementCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -20 : 20
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );

        // Hover animation
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.03,
            y: -8,
            duration: 0.4,
            ease: "power2.out"
          });

          // Animate achievement icon
          const icon = card.querySelector('.achievement-icon');
          if (icon) {
            anime({
              targets: icon,
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              duration: 1000,
              easing: 'easeOutElastic(1, .6)'
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      }
    });

  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Achievements</h2>
          <p className="text-slate-400 text-lg">Academic excellence and professional development</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                ref={el => el && (educationCardsRef.current[index] = el)}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`edu-icon w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-lg flex items-center justify-center`}>
                      <edu.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-400 text-sm font-medium">{edu.period}</div>
                      <div className="text-white font-bold text-lg">{edu.grade}</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-slate-300 mb-2">{edu.field}</p>
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                ref={el => el && (certificationCardsRef.current[index] = el)}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                  <span className="px-2 py-1 bg-blue-600 text-blue-100 rounded text-xs">
                    {cert.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                ref={el => el && (achievementCardsRef.current[index] = el)}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`achievement-icon w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-lg flex items-center justify-center`}>
                      <achievement.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{achievement.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
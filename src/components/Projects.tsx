import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      title: "Stickman Shootout with Adaptive AI",
      description: "2D shooter game with Q-Learning AI achieving 85% accuracy in predicting enemy positions and reducing response time by 40%",
      tech: ["Python", "PyGame", "Flask", "Q-Learning", "AI"],
      features: [
        "3 unique game modes (Chess Grid, Shootout, Hidden Search)",
        "Q-Learning algorithm with 85% prediction accuracy",
        "Backend integration with Flask",
        "Real-time adaptive AI behavior"
      ],
      status: "Featured at HackSprint 5.0",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Instagram Emotion Recognition System",
      description: "LSTM-based NLP model for emotion classification from Instagram captions and comments with 90% accuracy",
      tech: ["Python", "TensorFlow", "Keras", "NLTK", "Instagram API"],
      features: [
        "Deep learning LSTM architecture",
        "Text preprocessing and sentiment analysis",
        "Instagram Graph API integration",
        "90% classification accuracy"
      ],
      status: "AI/ML Research Project",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI Breast Cancer Classification",
      description: "Deep learning models for automatic classification of Invasive Ductal Carcinoma in digital pathology images",
      tech: ["Deep Learning", "CNN", "Transfer Learning", "VGG-16"],
      features: [
        "Baseline CNN and VGG-16 transfer learning",
        "85% accuracy on 277K+ image patches",
        "Digital pathology image analysis",
        "Medical AI application"
      ],
      status: "Research Publication",
      gradient: "from-pink-500 to-red-600"
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

    // Projects animation
    projectsRef.current.forEach((project, index) => {
      if (project) {
        // Set initial state
        gsap.set(project, {
          opacity: 0,
          y: 100,
          rotationX: -15,
          transformOrigin: "center top"
        });

        // Animate on scroll
        gsap.to(project, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        });

        // Enhanced hover animations
        const handleMouseEnter = () => {
          gsap.to(project, {
            scale: 1.03,
            y: -10,
            rotationY: 2,
            duration: 0.4,
            ease: "power2.out"
          });

          // Animate tech tags
          const techTags = project.querySelectorAll('.tech-tag');
          anime({
            targets: techTags,
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutElastic(1, .6)'
          });

          // Animate feature bullets
          const features = project.querySelectorAll('.feature-item');
          anime({
            targets: features,
            translateX: [0, 10, 0],
            duration: 600,
            delay: anime.stagger(50),
            easing: 'easeOutQuad'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(project, {
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        project.addEventListener('mouseenter', handleMouseEnter);
        project.addEventListener('mouseleave', handleMouseLeave);

        // Button hover animations
        const buttons = project.querySelectorAll('.project-button');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    });

  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Innovative solutions showcasing technical expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => el && (projectsRef.current[index] = el)}
              className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item flex items-start gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="project-button flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                  <button className="project-button flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
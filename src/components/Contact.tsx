import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const socialLinksRef = useRef<HTMLDivElement[]>([]);

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

    // Left content animation
    gsap.fromTo(leftContentRef.current,
      {
        opacity: 0,
        x: -100,
        rotationY: -15
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Right content animation
    gsap.fromTo(rightContentRef.current,
      {
        opacity: 0,
        x: 100,
        rotationY: 15
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        delay: 0.2
      }
    );

    // Contact cards animations
    contactCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
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
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });

          // Animate icon with Anime.js
          const icon = card.querySelector('.contact-icon');
          if (icon) {
            anime({
              targets: icon,
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              duration: 600,
              easing: 'easeOutElastic(1, .6)'
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    // Social links animations
    socialLinksRef.current.forEach((link, index) => {
      if (link) {
        // Floating animation
        gsap.to(link, {
          y: -5,
          duration: 2 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2
        });

        // Hover animation
        const handleMouseEnter = () => {
          anime({
            targets: link,
            scale: [1, 1.3, 1.1],
            rotate: [0, 360],
            duration: 800,
            easing: 'easeOutElastic(1, .6)'
          });
        };

        link.addEventListener('mouseenter', handleMouseEnter);
      }
    });

  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg">Ready to collaborate on innovative projects</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div ref={leftContentRef} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or collaborations in software engineering, AI/ML, and DevOps. Let's build something amazing together!
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:manojmsaiml@gmail.com"
                  ref={el => el && (contactCardsRef.current[0] = el)}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                >
                  <div className="contact-icon w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-400">manojmsaiml@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+916360099113"
                  ref={el => el && (contactCardsRef.current[1] = el)}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 group cursor-pointer"
                >
                  <div className="contact-icon w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-400">+91 6360099113</div>
                  </div>
                </a>

                <div 
                  ref={el => el && (contactCardsRef.current[2] = el)}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 group cursor-pointer"
                >
                  <div className="contact-icon w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-slate-400">Mysore, Karnataka - 570016</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/manoj-ms-aiml" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    ref={el => el && (socialLinksRef.current[0] = el)}
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <Linkedin className="text-white" size={24} />
                  </a>
                  <a 
                    href="#" 
                    ref={el => el && (socialLinksRef.current[1] = el)}
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <Github className="text-white" size={24} />
                  </a>
                  <a 
                    href="https://wa.me/916360099113" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    ref={el => el && (socialLinksRef.current[2] = el)}
                    className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-300 cursor-pointer"
                  >
                    <MessageSquare className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={rightContentRef}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
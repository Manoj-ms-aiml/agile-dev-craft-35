import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import anime from 'animejs';

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate header on scroll state change
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        backgroundColor: isScrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottomColor: isScrolled ? 'rgba(71, 85, 105, 0.5)' : 'transparent',
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Animate logo/profile section
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: isScrolled ? 0.9 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    // Initial header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
      );
    }
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen && mobileMenuRef.current) {
      // Animate mobile menu opening
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      
      // Animate menu items
      const menuItems = mobileMenuRef.current.querySelectorAll('.mobile-nav-item');
      anime({
        targets: menuItems,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 400,
        delay: anime.stagger(50),
        easing: 'easeOutQuart'
      });
    }
  };

  const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleNavLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo/Profile section */}
          <div ref={logoRef} className="flex items-center gap-4">
            <div className={`transition-all duration-500 ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}>
              <img 
                src="/lovable-uploads/3e805cba-c1b8-4dce-a2b5-def1cf4f4b6e.png"
                alt="Manoj M S"
                className="w-full h-full object-cover rounded-full border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
              />
            </div>
            <div className={`transition-all duration-500 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>
              <h3 className="font-semibold text-white">Manoj M S</h3>
              <p className="text-slate-400 text-xs">Software Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onMouseEnter={handleNavHover}
                onMouseLeave={handleNavLeave}
                className={`text-slate-300 hover:text-blue-400 transition-colors duration-300 relative group cursor-pointer ${
                  activeSection === item.href.slice(1) ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav 
            ref={mobileMenuRef}
            className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-900/95 backdrop-blur-lg rounded-lg"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`mobile-nav-item text-slate-300 hover:text-blue-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-slate-800/50 cursor-pointer ${
                    activeSection === item.href.slice(1) ? 'text-blue-400 bg-slate-800/50' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;
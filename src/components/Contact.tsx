
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from './ContactForm';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg">Ready to collaborate on innovative projects</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
            >
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
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors animate-float">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-400">manojmsaiml@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+916360099113"
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors animate-float" style={{ animationDelay: '0.5s' }}>
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-400">+91 6360099113</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
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
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 animate-float"
                  >
                    <Linkedin className="text-white" size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 animate-float"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <Github className="text-white" size={24} />
                  </a>
                  <a 
                    href="https://wa.me/916360099113" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110 animate-float"
                    style={{ animationDelay: '0.6s' }}
                  >
                    <MessageSquare className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`bg-slate-800 rounded-xl p-8 border border-slate-700 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
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

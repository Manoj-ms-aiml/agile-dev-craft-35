
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "from-red-500 to-orange-500",
      progress: [95, 90, 85, 92, 88, 85]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Flask"],
      color: "from-blue-500 to-cyan-500",
      progress: [95, 90, 92, 88, 85, 80]
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
      color: "from-purple-500 to-pink-500",
      progress: [85, 88, 82, 90, 85, 80]
    },
    {
      title: "Database & Cloud",
      skills: ["SQL", "MySQL", "PostgreSQL", "AWS", "GCP", "Docker"],
      color: "from-green-500 to-emerald-500",
      progress: [90, 88, 85, 82, 78, 85]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "Kubernetes"],
      color: "from-yellow-500 to-amber-500",
      progress: [95, 92, 80, 85, 85, 75]
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "Operating Systems", "Computer Networks", "Microservices"],
      color: "from-indigo-500 to-blue-500",
      progress: [95, 90, 85, 80, 78]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 text-lg">A comprehensive toolkit for modern software development</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 hover:transform hover:scale-105' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 animate-pulse`}>
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">{skill}</span>
                      <span className="text-slate-400 text-xs">{category.progress[skillIndex]}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${category.progress[skillIndex]}%` : '0%',
                          transitionDelay: isVisible ? `${(index * 100) + (skillIndex * 50)}ms` : '0ms'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

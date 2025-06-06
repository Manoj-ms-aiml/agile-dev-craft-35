
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Flask"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML & Data",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & Cloud",
      skills: ["SQL", "MySQL", "PostgreSQL", "AWS", "GCP", "Docker"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "Kubernetes"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "Operating Systems", "Computer Networks", "Microservices"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 text-lg">A comprehensive toolkit for modern software development</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-slate-600">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
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

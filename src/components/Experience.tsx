
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

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

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-slate-400 text-lg">Building innovative solutions and driving impact</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
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
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Featured Projects 
                  {expandedProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {expandedProject === index && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                        <h5 className="font-semibold text-white mb-2">{project.name}</h5>
                        <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

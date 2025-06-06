
import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering (AI/ML)",
      institution: "Vidyavardhaka College of Engineering",
      period: "2022 – 2026",
      grade: "8.98 CGPA",
      icon: GraduationCap
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "Science",
      institution: "Sheshadripuram PU College",
      period: "2020 – 2022", 
      grade: "94.5%",
      icon: GraduationCap
    },
    {
      degree: "Secondary School Leaving Certificate",
      field: "General Studies",
      institution: "Karnataka Examination Board",
      period: "2019 – 2020",
      grade: "95.2%",
      icon: GraduationCap
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
      icon: Trophy
    },
    {
      title: "HackSprint 5.0 Participant",
      description: "24-hour national hackathon at P.E.S. College - developed acclaimed Stickman Shootout AI project",
      icon: Award
    },
    {
      title: "LeetCode Problem Solver",
      description: "Successfully solved 200+ algorithmic problems demonstrating strong DSA skills",
      icon: Trophy
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Achievements</h2>
          <p className="text-slate-400 text-lg">Academic excellence and professional development</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
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
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-blue-500 transition-all duration-300">
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
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{achievement.title}</h4>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

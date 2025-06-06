
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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
      status: "Featured at HackSprint 5.0"
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
      status: "AI/ML Research Project"
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
      status: "Research Publication"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Innovative solutions showcasing technical expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm font-medium">
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
                    <li key={featureIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <ExternalLink size={16} />
                  <span>View Details</span>
                </button>
                <button className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
                  <Github size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

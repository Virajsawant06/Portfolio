import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Visual Recognition System',
      category: 'Computer Vision',
      description: 'An advanced computer vision system that detects and classifies objects in real-time using convolutional neural networks and transfer learning techniques.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Sentiment Analysis API',
      category: 'NLP',
      description: 'A robust natural language processing API that analyzes sentiment in text data from social media, reviews, and customer feedback with high accuracy.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'BERT'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Predictive Maintenance System',
      category: 'Machine Learning',
      description: 'An industrial IoT solution that predicts equipment failures before they occur using time-series analysis and anomaly detection algorithms.',
      image: 'https://images.pexels.com/photos/2254323/pexels-photo-2254323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'AWS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Recommendation Engine',
      category: 'Machine Learning',
      description: 'A personalized recommendation system for e-commerce that suggests products based on user behavior and preferences using collaborative filtering.',
      image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'TensorFlow', 'SQL', 'Flask'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Autonomous Agent Simulation',
      category: 'Reinforcement Learning',
      description: 'A reinforcement learning environment where autonomous agents learn optimal behaviors through interaction with a simulated environment.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'PyTorch', 'Gym', 'NumPy'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Healthcare Diagnosis Assistant',
      category: 'NLP',
      description: 'An AI-powered tool that assists healthcare professionals in diagnosing conditions by analyzing medical records and research papers.',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'BERT', 'Scikit-Learn', 'Streamlit'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filters = ['all', 'Computer Vision', 'NLP', 'Machine Learning', 'Reinforcement Learning'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore some of my recent work that showcases my expertise in AI and machine learning across various domains.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
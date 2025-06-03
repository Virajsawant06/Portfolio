import React from 'react';
import { Brain, Cpu, Database, Globe } from 'lucide-react';

const About = () => {
  const specialties = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />,
      title: 'Machine Learning',
      description: 'Developing advanced ML models for computer vision, NLP, and predictive analytics.'
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />,
      title: 'Deep Learning',
      description: 'Building and optimizing neural networks for complex pattern recognition tasks.'
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />,
      title: 'Big Data',
      description: 'Processing and analyzing large datasets to extract valuable insights.'
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />,
      title: 'AI Systems',
      description: 'Designing end-to-end AI systems that solve real-world problems.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I'm a passionate AI Developer with expertise in building intelligent systems that solve complex problems. With a strong foundation in machine learning, deep learning, and data science, I create solutions that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                With over 5 years of experience in AI and machine learning, I've worked on projects ranging from computer vision applications to natural language processing systems. My journey began with a deep curiosity about how machines can learn and adapt.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                I've collaborated with startups and enterprise companies to develop AI solutions that drive business value. My approach combines technical expertise with a strong focus on creating practical, scalable, and ethical AI systems.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">My Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I believe that AI should be accessible, transparent, and designed with human needs at the center. Every project I undertake is guided by this philosophy, ensuring that the technology serves people in meaningful ways.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Continuous learning is at the heart of my practice. The field of AI evolves rapidly, and I'm committed to staying at the forefront by exploring new techniques, algorithms, and frameworks that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
              My Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center">
                    {specialty.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {specialty.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
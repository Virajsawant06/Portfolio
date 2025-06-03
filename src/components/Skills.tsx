import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 90 },
    { name: 'PyTorch', level: 85 },
    { name: 'Scikit-Learn', level: 90 },
    { name: 'Computer Vision', level: 85 },
    { name: 'Natural Language Processing', level: 90 },
    { name: 'Data Analysis', level: 88 },
    { name: 'Deep Learning', level: 85 }
  ];

  const tools = [
    'Docker', 'Kubernetes', 'Git', 'AWS', 'Google Cloud', 'Azure ML', 
    'Jupyter', 'VSCode', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
    'SQL', 'NoSQL', 'REST APIs', 'FastAPI'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              My technical toolkit combines deep expertise in AI and machine learning with software engineering best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  My Process
                </h3>
                <ol className="relative border-l border-slate-300 dark:border-slate-700 ml-3">
                  {[
                    { title: 'Problem Definition', description: 'Clearly define the problem and establish success metrics' },
                    { title: 'Data Collection & Analysis', description: 'Gather, clean and analyze relevant data' },
                    { title: 'Model Development', description: 'Design, train and fine-tune AI models' },
                    { title: 'Evaluation & Iteration', description: 'Rigorously test and refine the solution' },
                    { title: 'Deployment & Monitoring', description: 'Implement in production and monitor performance' }
                  ].map((step, index) => (
                    <li key={index} className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 text-white font-medium">
                        {index + 1}
                      </span>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
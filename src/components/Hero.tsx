import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;
    
    titleElement.innerHTML = titleElement.textContent!.replace(/\S/g, "<span class='inline-block'>$&</span>");
    
    const spans = titleElement.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.05}s`;
      span.classList.add('animate-fade-in');
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-5 opacity-5 dark:opacity-10">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square border border-slate-200 dark:border-slate-700"
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            AI Developer & Machine Learning Engineer
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Building intelligent solutions that push the boundaries of what's possible
            with artificial intelligence and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 font-medium rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
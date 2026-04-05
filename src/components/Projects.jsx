import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

// Images import (apnar ager motoi thakbe)
import fshb from "../assets/img/fasionhub.png"
import dash from "../assets/img/dash.png"
import land from "../assets/img/land.png"
import laziiz from "../assets/img/laziiz.png"

const projects = [
  { id: 1, title: 'Fashion Hub', tech: 'React, Tailwind', image: fshb, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
  { id: 2, title: 'Laziiz Restaurant', tech: 'React, Tailwind', image: laziiz, link: 'https://69d15b2b0b847ceec46943b0--laziiz.netlify.app/' },
  { id: 3, title: 'Landing Page', tech: 'React, Tailwind', image: land, link: 'https://landing-page-a2on.vercel.app/' },
  { id: 4, title: 'Admin Dashboard', tech: 'React, Tailwind', image: dash, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
];

const Projects = () => {
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    let diff = index - centerIdx;
    if (diff > Math.floor(projects.length / 2)) diff -= projects.length;
    if (diff < -Math.floor(projects.length / 2)) diff += projects.length;
    return diff;
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#020617] overflow-hidden min-h-[700px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header - Compact for Mobile */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-3"
          >
            <Sparkles size={10} /> Curated Gallery
          </motion.div>
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tighter">
            Featured <span className="text-blue-500">Works</span>
          </h2>
        </div>

        {/* The Carousel */}
        <div className="relative h-[350px] md:h-[450px] flex items-center justify-center">
          {projects.map((project, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            // Mobile-e distance 240px ebong Desktop-e 380px
            const xOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 240 : 380;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: position * xOffset,
                  scale: isActive ? 1 : 0.75, // Mobile-e scale ektu komano hoyeche jate side card dekha jay
                  zIndex: 10 - Math.abs(position),
                  opacity: Math.abs(position) > 1 ? 0 : (isActive ? 1 : 0.4),
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setCenterIdx(index)}
                className="absolute w-[280px] md:w-[450px] cursor-pointer touch-pan-x"
              >
                {/* Project Card */}
                <div className={`relative group rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 border transition-all duration-500 ${isActive ? 'border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]' : 'border-white/5'}`}>
                  
                  {/* Image Container */}
                  <div className="relative h-48 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-100' : 'grayscale-[80%] scale-110'}`}
                    />
                    
                    {/* Hover/Active Overlay */}
                    <div className={`absolute inset-0 bg-blue-600/90 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center ${isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-blue-600 flex items-center justify-center mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300"
                      >
                        <ArrowUpRight size={24} />
                      </a>
                      <p className="text-white text-xs font-bold uppercase">View Project</p>
                    </div>
                  </div>

                  {/* Content - Compact for Mobile */}
                  <div className="p-5 md:p-8 bg-slate-900/90 text-center">
                    <h3 className={`text-lg md:text-2xl font-bold text-white transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      {project.title}
                    </h3>
                    <div className={`mt-1 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicators - Smaller for Mobile */}
        <div className="flex justify-center gap-2 mt-10 md:mt-16">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIdx(i)}
              className={`h-1 rounded-full transition-all duration-500 ${centerIdx === i ? 'w-8 md:w-12 bg-blue-500' : 'w-2 md:w-3 bg-slate-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
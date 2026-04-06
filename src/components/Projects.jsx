import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

// Images import
import fshb from "../assets/img/fasionhub.png";
import dash from "../assets/img/dash.png";
import land from "../assets/img/land.png";
import laziiz from "../assets/img/laziiz.png";

const projects = [
  { id: 1, title: 'Fashion Hub', tech: 'React, Tailwind', image: fshb, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
  { id: 2, title: 'Laziiz Restaurant', tech: 'React, Tailwind', image: laziiz, link: 'https://69d15b2b0b847ceec46943b0--laziiz.netlify.app/' },
  { id: 3, title: 'Landing Page', tech: 'React, Tailwind', image: land, link: 'https://landing-page-a2on.vercel.app/' },
  { id: 4, title: 'Admin Dashboard', tech: 'React, Tailwind', image: dash, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
];

const Projects = () => {
  const [centerIdx, setCenterIdx] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % projects.length);
    }, 5000); // 5 seconds interval for better readability
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    let diff = index - centerIdx;
    if (diff > Math.floor(projects.length / 2)) diff -= projects.length;
    if (diff < -Math.floor(projects.length / 2)) diff += projects.length;
    return diff;
  };

  // Fix: Functional click handler for navigation
  const handleCardInteraction = (index, isActive, link) => {
    if (isActive) {
      // Jodi card-ti center-e thake, tobe click korle live site open hobe
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Jodi card-ti side-e thake, tobe click korle sheti center-e ashbe
      setCenterIdx(index);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-[#020617] overflow-hidden min-h-[700px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-3"
          >
            <Sparkles size={10} /> Curated Gallery
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
            Featured <span className="text-gradient">Works</span>
          </h2>
        </div>

        {/* The Carousel */}
        <div className="relative h-[380px] md:h-[500px] flex items-center justify-center">
          {projects.map((project, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            
            // Responsive offset calculation
            const xOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 240 : 420;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: position * xOffset,
                  scale: isActive ? 1 : 0.75,
                  zIndex: 10 - Math.abs(position),
                  opacity: Math.abs(position) > 1 ? 0 : (isActive ? 1 : 0.4),
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={() => handleCardInteraction(index, isActive, project.link)}
                className="absolute w-[280px] md:w-[500px] cursor-pointer touch-none"
              >
                {/* Project Card Design */}
                <div className={`relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 border transition-all duration-500 ${isActive ? 'border-blue-500/50 shadow-[0_20px_50px_-10px_rgba(59,130,246,0.3)]' : 'border-white/5'}`}>
                  
                  {/* Image with dynamic grayscale */}
                  <div className="relative h-52 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-100' : 'grayscale-[100%] scale-110'}`}
                    />
                    
                    {/* Hover/Active Overlay - Mobile friendly */}
                    <div className={`absolute inset-0 bg-blue-600/80 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center ${isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-blue-600 flex items-center justify-center mb-2 shadow-2xl">
                        <ArrowUpRight size={28} />
                      </div>
                      <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Open Live Demo</p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-8 bg-[#0a0f1d] text-center">
                    <h3 className={`text-xl md:text-2xl font-bold text-white transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                      {project.title}
                    </h3>
                    <div className={`mt-2 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-blue-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${centerIdx === i ? 'w-10 md:w-16 bg-blue-500' : 'w-2 md:w-4 bg-slate-800'}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
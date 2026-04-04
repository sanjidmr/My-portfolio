import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import fshb from "../assets/img/fasionhub.png"
import dash from "../assets/img/dash.png"
import land from "../assets/img/land.png"
import laziiz from "../assets/img/laziiz.png"

const projects = [
  { id: 1, title: 'Fasion Hub', tech: 'React, Tailwind', image: fshb, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
  { id: 2, title: 'Laziiz reastaurant', tech: 'React, Tailwind', image: laziiz, link: 'https://69d15b2b0b847ceec46943b0--laziiz.netlify.app/' },
  { id: 3, title: 'Landing Page', tech: 'React, Tailwind', image: land, link: 'https://landing-page-a2on.vercel.app/' },
   { id: 4, title: 'Admin Dashboard', tech: 'React, Tailwind', image: dash, link: 'https://loquacious-dieffenbachia-7299a8.netlify.app/' },
];

const Projects = () => {
  const [centerIdx, setCenterIdx] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Helper function to calculate circular position
  const getPosition = (index) => {
    let diff = index - centerIdx;
    if (diff > Math.floor(projects.length / 2)) diff -= projects.length;
    if (diff < -Math.floor(projects.length / 2)) diff += projects.length;
    return diff;
  };

  return (
    <section className="py-24 px-4 bg-[#020617] overflow-hidden min-h-[800px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            <Sparkles size={12} /> Curated Gallery
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Featured <span className="text-blue-500">Works</span>
          </h2>
        </div>

        {/* The Carousel */}
        <div className="relative h-[450px] flex items-center justify-center">
          {projects.map((project, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 2;

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: position * 380, // Distance between cards
                  scale: isActive ? 1.1 : 0.8,
                  zIndex: 10 - Math.abs(position),
                  opacity: isVisible ? (Math.abs(position) === 2 ? 0.3 : 1) : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
                onClick={() => setCenterIdx(index)}
                className="absolute w-[320px] md:w-[450px] cursor-pointer"
              >
                {/* Project Card */}
                <div className={`relative group rounded-[2.5rem] overflow-hidden bg-slate-900 border transition-all duration-700 ${isActive ? 'border-blue-500 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]' : 'border-white/5 opacity-40 hover:opacity-100'}`}>
                  
                  {/* Image Container */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <ArrowUpRight size={32} />
                      </a>
                      <p className="text-white font-black uppercase tracking-tighter">View Live</p>
                    </div>
                  </div>

                  {/* Content (Title/Tech) - Bottom visible when active */}
                  <div className="p-8 bg-slate-900 text-center">
                    <h3 className={`text-2xl font-bold text-white transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}>
                      {project.title}
                    </h3>
                    <div className={`mt-2 overflow-hidden transition-all duration-500 ${isActive ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIdx(i)}
              className={`h-1 rounded-full transition-all duration-500 ${centerIdx === i ? 'w-12 bg-blue-500' : 'w-3 bg-slate-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
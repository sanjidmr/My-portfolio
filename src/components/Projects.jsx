import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Image Generator',
    category: 'AI Tool',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Next.js', 'OpenAI', 'Prisma'],
    link: '#',
    github: '#',
  },
  {
    title: 'Crypto Dashboard',
    category: 'Fintech',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tags: ['React', 'Chart.js', 'API'],
    link: '#',
    github: '#',
  },
];

const Projects= () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A selection of my recent work, ranging from complex web applications 
              to creative experiments.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 text-primary font-bold group"
          >
            View All Projects <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden glass hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.link} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-primary transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
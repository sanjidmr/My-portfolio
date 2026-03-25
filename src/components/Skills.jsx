import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Layout, 
  GitBranch, 
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: <Code />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <Layout />, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: <Layers />, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <Terminal />, color: 'text-yellow-400' },
  { name: 'React.js', icon: <Cpu />, color: 'text-sky-400' },
  { name: 'Git', icon: <GitBranch />, color: 'text-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Technical <span className="text-gradient">Expertise</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400">
              A curated selection of technologies I leverage to build high-performance, 
              scalable web applications with a focus on modern standards and exceptional user experience.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-40">Skills & Tools</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col items-center text-center gap-4"
            >
              <div className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="font-bold text-sm tracking-tight">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
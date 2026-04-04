import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { cn } from '../assets/lib/utils';

const experience = [
  {
    type: 'experience',
    title: 'High School',
    company: 'Progressive model school',
    period: '2021',
    description: 'I completed my SSC from Progressive Model School. After finishing my studies there, I successfully graduated and moved forward in my academic journey.',
  },
  {
    type: 'experience',
    title: 'Collage',
    company: 'Ananda mahan Collage',
    period: '2022 - 2023',
    description: 'I completed my HSC from Anondo Mahan College. After successfully passing my exams, I graduated from the college and moved forward in my academic journey.',
  },
  {
    type: 'education',
    title: 'University',
    company: 'KB University',
    period: '2024 - present',
    description: 'I am currently studying at a Krishi University, pursuing a degree in Agricultural Science. I am learning modern agricultural methods and developing my knowledge in this field to build my future career.',
  },
  // --- নতুন সেকশনটি সবার শেষে যুক্ত করা হলো ---
  {
    type: 'experience',
    title: 'Front End Developer',
    company: 'Next Xen ITES',
    period: '2024 - Present',
    description: 'I completed my web development training at Next Zen ITES. After that, I developed my skills in frontend development and started my journey as a frontend developer.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight text-white"
          >
            Journey & <span className="text-gradient">Milestones</span>
          </motion.h2>
          <p className="text-lg font-outfit text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional growth and educational background.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="p-8 rounded-[2rem] glass border-primary/5 hover:border-primary/20 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.type === 'experience' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-primary font-outfit font-medium">{item.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-outfit font-bold uppercase tracking-widest opacity-40 mb-4 text-white">
                      <Calendar size={14} /> {item.period}
                    </div>
                    
                    <p className="text-slate-400 font-outfit leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-950 -translate-x-1/2 z-10 hidden md:block" />

                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
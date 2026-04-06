import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Zap, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Responsive Heading: Mobile-e ektu choto (4xl) kintu desktop-e boro (7xl) */}
            <h2 className="text-4xl md:text-7xl font-serif font-black mb-6 md:mb-8 tracking-tight leading-[1.1] text-white">
              Turning <br className="hidden md:block" /><span className="text-gradient">Vision</span>  Into Reality
            </h2>
            
            <p className="text-base md:text-lg font-outfit text-slate-400 mb-5 leading-relaxed max-w-xl">
              I am a passionate Frontend Developer with over 2 years of experience in building 
              modern web applications. My journey started with a curiosity for how things work 
              on the web.
            </p>
            
            <p className="text-base md:text-lg font-outfit text-slate-400 mb-8 leading-relaxed max-w-xl">
              I specialize in React, JavaScript, and Tailwind CSS. I believe great design is 
              about how it feels and functions for the end user.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: <Github size={22} />, link: "#" },
                { icon: <Linkedin size={22} />, link: "#" },
                { icon: <Twitter size={22} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors text-slate-300 border border-slate-800/40"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
            {[
              { icon: <Code2 className="text-primary" size={20} />, title: 'Clean Code', desc: 'Maintainable and scalable architecture.' },
              { icon: <Palette className="text-secondary" size={20} />, title: 'Modern UI', desc: 'Aesthetic designs with detail.' },
              { icon: <Zap className="text-accent" size={20} />, title: 'Fast Performance', desc: 'Optimized for speed and efficiency.' },
              { icon: <Globe className="text-primary" size={20} />, title: 'Global Reach', desc: 'Building products for worldwide.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 rounded-2xl md:rounded-3xl glass border border-slate-800/50 flex flex-col items-start"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700/30">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm font-outfit text-slate-400 opacity-80 leading-snug">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
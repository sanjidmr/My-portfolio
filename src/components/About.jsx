import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Zap, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin ,FaTwitter  } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Turning your <span className="text-gradient">Vision</span> <br /> Into Digital Reality
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a passionate Frontend Developer with over 1 years of experience in building 
              modern web applications. My journey started with a curiosity for how things work 
              on the web, which evolved into a professional career dedicated to creating 
              seamless user experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I specialize in React, JavaScript, and modern CSS frameworks like Tailwind. 
              I believe that great design is not just about how it looks, but how it feels 
              and functions for the end user.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Code2 className="text-primary" />, title: 'Clean Code', desc: 'Maintainable and scalable architecture.' },
              { icon: <Palette className="text-secondary" />, title: 'Modern UI', desc: 'Aesthetic designs with attention to detail.' },
              { icon: <Zap className="text-accent" />, title: 'Fast Performance', desc: 'Optimized for speed and efficiency.' },
              { icon: <Globe className="text-primary" />, title: 'Global Reach', desc: 'Building products for users worldwide.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'motion/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Download, Send } from 'lucide-react';
import image from "../assets/img/Sanjid.jpg"

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Designer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section - মোবাইলে এটি উপরে দেখাবে (order-first md:order-last) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-first md:order-last" 
        >
          <div className="relative z-10 w-full aspect-square max-w-[280px] md:max-w-[350px] mx-auto rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src={image}
              alt="Sanjid" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        {/* Text and Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left" // মোবাইলে টেক্সট সেন্টারে থাকবে
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 inline-block"
          >
            Available for Freelance
          </motion.span>
          
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-gradient">Sanjid</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 h-12">
            <span>{text}</span>
            <Cursor cursorColor="#3b82f6" />
          </div>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Crafting digital experiences that merge aesthetic precision with functional excellence. 
            I build high-performance web applications with a focus on user-centric design.
          </p>
          
          {/* Buttons - এখন মোবাইলে এগুলো ইমেজের নিচেই থাকবে যেহেতু টেক্সট সেকশন ইমেজের পরে আসছে */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
            >
              Contact Me <Send size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Mushfiqur_Rahman_Sanjid_CV.pdf';
                link.click();
              }}
              className="px-8 py-4 rounded-full glass font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700"
            >
              Download CV <Download size={18} />
            </motion.button>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
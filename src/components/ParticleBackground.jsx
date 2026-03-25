import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const ParticleBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className={isDarkMode ? "absolute inset-0 bg-slate-950" : "absolute inset-0 bg-white"} />
      
      {/* Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default ParticleBackground;